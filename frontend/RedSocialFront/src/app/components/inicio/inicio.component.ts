import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit{
  public post : Post = new Post();
  public listPost: Array<Post>=[]
  errorMessage="";
  constructor( private serviceModal: NgbModal, private servicePost: PostService) { }

  ngOnInit(): void {
    this.servicePost.getPosts().subscribe(
      (data)=> {        
        this.listPost = data
        console.log("listapost",this.listPost);
      }
    )
  }
  parceJSONtoUser(user:string){
    let newUser : User = JSON.parse(JSON.stringify(user));
    return newUser
  }
  openModal(modal: any): void {
    console.log("entra")
    this.serviceModal.open(modal)
  }
  createPost(){

    let user : User = JSON.parse(localStorage.getItem("user")||'') as User;
    this.post.userId = user.id;
    this.servicePost.postCreate(this.post).subscribe(
      (data) => {
        console.log(data)
        this.serviceModal.dismissAll()
        alert("se público el post")
        this.ngOnInit()
      },
      (error) => {
        console.log(error);
        this.errorMessage = error;
      }
    );
  }
}
