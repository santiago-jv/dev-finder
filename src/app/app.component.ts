import { Component } from '@angular/core';
import { ToastService } from 'angular-toastify';
import { User } from './core/github-user/interfaces/user.interface';
import { GithubUserService } from './core/github-user/services/github-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading:boolean=false;
  user!:User;
  name:string = ""
  constructor(private githubUserService: GithubUserService,private toastService: ToastService) {
    
  }
  search(name:string){
    this.name = name

    this.loadUser()
  }
  loadUser(){
    this.loading=true
    this.githubUserService.fetchUser(this.name).subscribe(
      {
        next:(response)=>{
          this.user = response;
          this.loading=false
          
        },
        error:(error)=>{
          this.toastService.error('User not found')
        }
      }
    );
  }
}
