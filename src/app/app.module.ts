import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastService, AngularToastifyModule } from 'angular-toastify'; 
import { AppComponent } from './app.component';
import { GithubUserModule } from './core/github-user/github-user.module';
import {HttpClientModule} from "@angular/common/http"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GithubUserModule, HttpClientModule,AngularToastifyModule
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
