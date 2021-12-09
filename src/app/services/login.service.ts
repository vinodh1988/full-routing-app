import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
httpOptions:any;
  constructor(private http:HttpClient) { }

  login(email:string,password:string):Observable<object>{
     this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })

    }
      return this.http.post("http://localhost:4500/login",{
        email:email,
        password:password
      },this.httpOptions)
    }

    getStatus():boolean {
       if(localStorage.getItem("token"))    
         return true
       else
         return false 
     }
  }

