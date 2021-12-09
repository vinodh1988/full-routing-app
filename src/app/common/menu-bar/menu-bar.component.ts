import { Component, OnInit } from '@angular/core';
import { LogGuard } from 'src/app/Guards/log.guard';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
email:string="";
password:string="";
error:string="";
status:boolean=false;
menutext:any="Login"
  constructor(private ls:LoginService,public lg:LogGuard) { }

  ngOnInit():void {
      if(this.ls.getStatus()){
         this.menutext=localStorage.getItem("username")
         this.status=true
         
      }
      else{
         this.menutext="Login"
         this.status=false
      }
  }
 
  login(){
    this.error="";
    
    let regex:RegExp = new RegExp("^[a-z][a-z0-9_]+@[a-z]+\.(com|in)$")
    if(!regex.test(this.email)) {
           this.error="invalid Email"
    }
    else if(!this.password || this.password.length<6)
    {
        this.error ="please fill proper password"
    }
    if(this.error==""){
      this.ls.login(this.email,this.password).subscribe({
        next:(result:any)=>{
          localStorage.setItem("token",result.accessToken);
          localStorage.setItem("username",result.user.name);
          localStorage.setItem("usertype",result.user.usertype);
          this.status=true;
          this.menutext=result.user.name
        },
        error:()=>{
           this.error="Login Failure - invalid Credentials"
        }
      })
    }
  }

  signout(){
      alert("Called")
      localStorage.removeItem("username")
      localStorage.removeItem("token")
      localStorage.removeItem("usertype")
      this.menutext="Login"
      this.status=false
  }
}
