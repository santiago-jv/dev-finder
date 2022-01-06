import { Component } from '@angular/core';
import { User } from './core/github-user/interfaces/user.interface';
import { GithubUserService } from './core/github-user/services/github-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user!:User;
  name:string = ""
  constructor(private githubUserService: GithubUserService) {
    
  }
  search(name:string){
    this.name = name

    this.loadUser()
  }
  loadUser(){
    this.githubUserService.fetchUser(this.name).subscribe(
      {
        next:(response)=>{
          this.user = response;
        },
        error:(error)=>console.log(error)
      }
    );
  }
}
