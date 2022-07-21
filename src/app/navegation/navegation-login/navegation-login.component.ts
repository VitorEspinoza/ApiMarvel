import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/services/localSotrage';
import { FormGroup } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
;
declare var google: any;

@Component({
  selector: 'app-navegation-login',
  templateUrl: './navegation-login.component.html',
  styleUrls: ['./navegation-login.component.scss']
})
export class NavegationLoginComponent implements AfterViewInit, OnInit {

  token: string = "";
  user: any;
  email: string = "";
  LocalStorage = new LocalStorageUtils();
  myForm: FormGroup;
  FacebookUser: SocialUser;
  isSignedin: boolean = null;

  constructor(private router: Router, private socialAuthService: SocialAuthService) {  }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
    });
  }

  ngAfterViewInit(): void {
    google.accounts.id.initialize({
      client_id: "238503139412-ikct5ck8bi8eu7q5uac9dns2iblob5f8.apps.googleusercontent.com",
      callback: (response: any) => this.handleGoogleSignIn(response)
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { size: "large", type: "icon", shape: "pill" }  // customization attributes
    );
  }

  handleGoogleSignIn(response: any) {


    // This next is for decoding the idToken to an object if you want to see the details.
    let base64Url = response.credential.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));


    var credential = response.credential;

    var userInfo = JSON.parse(jsonPayload)

    this.LocalStorage.saveUser(userInfo);
    this.LocalStorage.saveTokenUser(credential);
  }


  loggedUser(): boolean {
    this.token = this.LocalStorage.getTokenUser();
    this.user = this.LocalStorage.getUser();

    if (this.user)
      this.email = this.user.email;

    return this.token !== null;
  }

  logout() {
    this.LocalStorage.clearUserLocalData();
    this.router.navigate(['/characters'])
  }

  facebookSignin(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);

    setTimeout(() => {
    this.LocalStorage.saveUser(this.FacebookUser);
    this.LocalStorage.saveTokenUser("teste");
    }, 10000)

  }

  facebookLogut(): void {
    this.socialAuthService.signOut();
    this.LocalStorage.clearUserLocalData();
    this.router.navigate(['/characters'])
  }
}
