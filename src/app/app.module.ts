import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsContentContainerComponent } from './news-content-container/news-content-container.component';
import {GaurdianNewsServiceClient} from './services/GaurdianNewsServiceClient';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SummaryExplorerComponent } from './summary-explorer/summary-explorer.component';
import {routing} from './app.routing';
import { AboutComponent } from './about/about.component';
import {UserServiceClient} from './services/user.service.client';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { NewsCardComponent } from './news-card/news-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsContentContainerComponent,
    NavBarComponent,
    HomePageComponent,
    SummaryExplorerComponent,
    AboutComponent,
    LoginComponent,
    ProfileComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    GaurdianNewsServiceClient,
    UserServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
