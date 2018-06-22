import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsContentContainerComponent } from './news-content-container/news-content-container.component';
import {GaurdianNewsServiceClient} from './services/GaurdianNewsServiceClient';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SummaryExplorerComponent } from './summary-explorer/summary-explorer.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    NewsContentContainerComponent,
    NavBarComponent,
    HomePageComponent,
    SummaryExplorerComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [GaurdianNewsServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
