import { Component, OnInit } from '@angular/core';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public name: any;

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '363018557891918',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.3'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
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
           }
           else
           {
           console.log('User login failed');
         }
      });
  }
  testAPI(){
    FB.api(
      '/me',
      'GET',
      {"fields":"name"},
      function(response) {
          // Insert your code here
          console.log(response);
          this.name = response.name;
          //document.getElementById('name').innerHTML = response.name;
      }
    );
  }
}