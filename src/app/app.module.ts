import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsContentContainerComponent } from './news-content-container/news-content-container.component';
import {GaurdianNewsServiceClient} from './services/GaurdianNewsServiceClient';

@NgModule({
  declarations: [
    AppComponent,
    NewsContentContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GaurdianNewsServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
