import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/services/contacts.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private cs:ContactsService,private ls:LoginService) { }
  contacts:any;
  status:boolean=false;
  ngOnInit(): void {
    /*
     this.cs.getContacts().subscribe(
       (data:any)=>this.contacts=data,
       (error)=>this.contacts=[]
     )
  }*/
      if(this.ls.getStatus())
          this.status=true
      this.cs.getContacts().subscribe(
        {
          next: (data:any)=>this.contacts=data,
          error: (error)=>this.contacts=[]
        }
      )

  }  

}
