import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GithubUserModule } from './core/github-user/github-user.module';
import {HttpClientModule} from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GithubUserModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
