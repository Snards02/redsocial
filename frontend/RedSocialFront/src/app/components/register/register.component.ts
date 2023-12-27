import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { TokenService } from '../../services/token/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user : User = new User();
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService,private router: Router, private tokenService: TokenService) { }

  onSubmit(): void {
    this.userService.postRegister(this.user).subscribe(
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
        this.errorMessage = error;
      }
    );
  }

  loginRouter(): void {
    this.router.navigate(['login'])
  }

}
