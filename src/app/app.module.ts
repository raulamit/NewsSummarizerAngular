import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
import { ReviewComponent } from './review/review.component';
import {FormsModule} from '@angular/forms';
import {SummaryServiceClient} from './services/summary.service.client';
import { SummaryEditorComponent } from './summary-editor/summary-editor.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { AdvertiseEditorComponent } from './advertise-editor/advertise-editor.component';

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
    NewsCardComponent,
    ReviewComponent,
    SummaryEditorComponent,
    RegisterComponent,
    AdminComponent,
    AdvertiseEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    MatSnackBarModule,
    NgbModule.forRoot()
  ],
  providers: [
    GaurdianNewsServiceClient,
    UserServiceClient,
    SummaryServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
