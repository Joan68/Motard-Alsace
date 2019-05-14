import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { DataService } from "../data.service";

declare var FB: any;

@Component({
  selector: 'app-login',
  // templateUrl: './login.component.html',
  template:`
  {{ message }}
  <button class="float-left" type="button" class="btn" (click)="submitLogin();" >Login with facebook</button>
  <div class="float-right ml-4 mt-2" id="status"></div>`,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: boolean;
  // @Output() MessageEvent = new EventEmitter<boolean>();

  constructor(private data: DataService) { }

  // sendMessage() {
  //   this.MessageEvent.emit(this.message);
  //   return
  // }

  public name: any;

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            //login success
            //login success code here
            //redirect to home page
            this.testAPI();
            this.data.changeMessage(true);
           }
           else
           {
           console.log('User login failed');
           this.data.changeMessage(false);
         }
      });

  }
  testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
}