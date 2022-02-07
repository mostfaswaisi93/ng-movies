import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string=''
  password:string=''
  hide:boolean=true
  name:string=''
  message:boolean=false
  constructor(private auth:AuthService,private router:Router) {}

  submit()
  {
    var user = { "name": this.name, "email": this.email ,"password": this.password};
    localStorage.setItem(this.name, JSON.stringify(user));
    this.message = ! this.message
    this.router.navigate(['/login'])

    setTimeout(() => {
      this.message = ! this.message
    }, 2000);
  }
  ngOnInit()
  {

  }


}
