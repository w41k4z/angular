import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialAuthService, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone:true,
  imports:[
    CommonModule,
    GoogleSigninButtonModule,
    HttpClientModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor( private authService:SocialAuthService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      if(user){
        const token = user.authToken
        this.sendTokenToBackEnd(token);
      }
    });
  }

  sendTokenToBackEnd(token: string) {
    const url = 'http://127.0.0.1:8000/auth/google';
    this.http.post(url, { token: token }).subscribe({
       next: (response) => {
         console.log(response);
         this.router.navigateByUrl('/accueil');
       },
       error: (error) => {
         console.error(error);
       }
    });
  }
}
