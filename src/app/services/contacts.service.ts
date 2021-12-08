import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  getContacts(): Observable<object>{
    return this.http.get("http://localhost:4500/contacts");
  }
}
