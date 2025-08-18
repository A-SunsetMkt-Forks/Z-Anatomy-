import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false
})
export class AppComponent implements OnInit {

  title = 'Z-Anatomy';
  version = 232;
  cookiesONvar: boolean = false;
  cooks: string = ''; // It's best to initialize this as an empty string.

  constructor() { 
    // Code that needs to run when the component is first created goes here.
  }

  ngOnInit(): void {
    // This is the right place to check for existing cookies when the component loads.
    console.log("Cookies at page load:", document.cookie);
    this.cooks = document.cookie;
    if (this.cooks.includes('cookieActivated=yes')) {
      this.cookiesONvar = true;
    } else {
      this.myFunction();
    }
  }

  myFunction(): void {
    const popup = document.getElementById('myPopup');
    popup?.classList.toggle('show');
  }

  clickOnOK(): void {
    // And this is the right place to set the cookie when the user clicks the button.
    document.cookie = "cookieActivated=yes; expires=Thu, 18 Dec 2053 12:00:00 UTC; path=/";
    document.cookie = "username=John Smith; expires=Thu, 18 Dec 2053 12:00:00 UTC; path=/";
    this.cookiesONvar = true;
    this.cooks = document.cookie;
    console.log("Cookies after clicking OK:", document.cookie);
    this.myFunction();
  }
}
