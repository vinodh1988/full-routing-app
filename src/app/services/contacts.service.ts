import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
httpOptions:any

  constructor(private http:HttpClient) { }

  getContacts(): Observable<object>{
    
  this.httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': "Bearer "+localStorage.getItem("token")
    })

  }

    return this.http.get("http://localhost:4500/660/contacts",this.httpOptions);
  }
}
