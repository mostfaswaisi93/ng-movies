import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email:string=''
  password:string=''
  hide:boolean=true
  name:string =''
  message:boolean=false
  constructor(private router:Router,private auth:AuthService) { }

  ngOnInit(): void {

  }
  login()
  {

    var x ={"name": this.name,"email":this.email,"password":this.password};
    if(localStorage.getItem(this.name) == JSON.stringify(x) )
    {
      this.router.navigate(['/'])
    }else
    {
      this.message = !this.message
    }
  }

}
