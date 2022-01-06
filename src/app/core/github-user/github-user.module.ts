import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    SearcherComponent,
    UserInfoComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[
    HeaderComponent,
    SearcherComponent,
    UserInfoComponent
  ]
})
export class GithubUserModule { }
