import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { DataService } from "../data.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  // template:
  //   `requiredIf value : {{ message }}
  //   <app-login></app-login>`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private data: DataService) { }

  message:boolean = false;

  // message = false;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
  }

  // receiveMessage($event){
  //   this.message = $event;
  // }
}
