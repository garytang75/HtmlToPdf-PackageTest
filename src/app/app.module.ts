import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SanitizehtmlPipe } from './sanitizehtml.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SanitizehtmlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
