import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { authGuard } from '../guards/auth.guard';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private auth:AuthService, private guard:authGuard){

  }
  user={
    name:'',
    email:'',
    password:''
  }
  login(){
    this.auth.login();

  }

}
