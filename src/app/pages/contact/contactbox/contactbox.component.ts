import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactbox',
  templateUrl: './contactbox.component.html',
  styleUrls: ['./contactbox.component.css']
})
export class ContactboxComponent implements OnInit {
@Input() contact:any;
  constructor() { }

  ngOnInit(): void {
  }

}
