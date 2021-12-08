import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private cs:ContactsService) { }
  contacts:any;
  ngOnInit(): void {
     this.cs.getContacts().subscribe(
       (data:any)=>this.contacts=data,
       (error)=>this.contacts=[]
     )
  }

}
