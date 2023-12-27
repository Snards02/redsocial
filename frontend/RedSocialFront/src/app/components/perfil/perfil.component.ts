import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { UserService } from '../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  public infoUser: User = new User();
  public pwsfinal: string = '';
  public listPost: Array<Post> = [];
  public postSelect: Post = new Post();

  constructor(private servicePost: PostService, private serviceUser: UserService, private serviceModal: NgbModal) { }

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

  actualizarPerfil() {
    this.serviceUser.putUserById(this.infoUser).subscribe(
      (data) => {
        localStorage.setItem('user', JSON.stringify(this.infoUser));
        this.serviceModal.dismissAll()
        alert("se actualizo su perfil")
        this.ngOnInit()
      },
      (error) => {
        alert("no se puedo editar el post" + error)
      }
    )
  }

  

}
