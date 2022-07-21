import { LocalStorageUtils } from './services/localSotrage';
import { MarvelService } from './services/Marvel.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AllComicsComponent } from './all-comics/all-comics.component';
import { AllSeriesComponent } from './all-series/all-series.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { CharacterBySerieIdComponent } from './character-by-serie-id/character-by-serie-id.component';
import { NavbarComponent } from './navegation/navbar/navbar.component';
import { NavegationLoginComponent } from './navegation/navegation-login/navegation-login.component';
import { ProfileComponent } from './profile/profile.component';

import {MatButtonModule, } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig, SocialAuthService } from 'angularx-social-login';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavegationLoginComponent,
    AllSeriesComponent,
    AllCharactersComponent,
    AllComicsComponent,
    CharacterBySerieIdComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatPaginatorModule,
    MatInputModule
  ],
  providers: [
    MarvelService,
    LocalStorageUtils,
    FormBuilder,
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '643220910557589'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
