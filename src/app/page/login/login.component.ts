import { Component } from '@angular/core';
import { UsersService } from '../../services/users/users.service';
import { Validators, FormGroup, ReactiveFormsModule, FormBuilder,  } from '@angular/forms';
import { response } from 'express';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: FormGroup;
  constructor(private usersService: UsersService, private formBuiler: FormBuilder){  
  this.form = this.formBuiler.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  });
  }

  onClickRegister(): void{
    this.usersService.register(this.form.value)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  onClickLogin(): void{
    this.usersService.login(this.form.value)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
    
  
  onClickLoginWithGoogle(): void{
    this.usersService.loginWithGoogle()
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
