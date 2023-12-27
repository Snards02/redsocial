import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token/token.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService,private router: Router, private tokenService: TokenService) { }

  onSubmit(): void {
    this.userService.postLogin(this.email, this.password).subscribe(
      (data) => {
        console.log(data)
        this.tokenService.setToken(data.token);
        let user: User = new User();
        user.age=data.age;
        user.email = data.email ;
        user.fullName = data.fullName ;
        user.createdAt = data.createdAt ;
        user.id= data._id;
        localStorage.setItem('user',JSON.stringify(user))
        this.router.navigate(['inicio']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = 'Credenciales inválidas. Inténtalo de nuevo.';
      }
    );
  }

  registerRouter(): void {
    this.router.navigate(['register'])
  }

}

