import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../models/user.model';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrl: './mypost.component.css'
})
export class MypostComponent implements OnInit{

  public infoUser: User = new User();
  public pwsfinal: string = '';
  public listPost: Array<Post> = [];
  public postSelect: Post = new Post();

  constructor(private servicePost: PostService, private serviceModal: NgbModal) { }
  
  ngOnInit() {
    this.infoUser = JSON.parse(localStorage.getItem("user") || '') as User;
    this.servicePost.getPostByUserId(this.infoUser.id).subscribe(
      (data) => {
        this.listPost = data
      },
      (error) => {
        console.log("error", error);

      }
    )
  }
  seleccionPost(post: any, modal: any) {

    this.postSelect = post;
    this.postSelect.id = post._id
    this.postSelect.userId = this.infoUser.id.toString()
    if (modal)
      this.serviceModal.open(modal);
    else this.deletePost()
  }
  deletePost() {
    this.servicePost.deletePostById(this.postSelect.id).subscribe(
      (data) => {
        alert("se borro post con exito")
        this.ngOnInit()
      },
      (errot) => {
        console.log(errot);
        alert("no se puco borrar el post")
      }
    )
  }

  actualizarPost() {
    this.servicePost.putPostById(this.postSelect).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(Post));
        
        this.serviceModal.dismissAll()
        alert("se actualizo el post")
        this.ngOnInit()
      },
      (error) => {
        alert("no se puedo editar el post" + error.toString())
        console.log(error)
      }
    )
  }
}
