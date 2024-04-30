import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { routes } from './app.routes';



export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('774392658404-kki6gijpmm6rnad8d47skbpgknr4vck0.apps.googleusercontent.com')
          }
        ],
        onError: (error) => {
          alert(error);
        }
      } as SocialAuthServiceConfig
    },
  ]
};
