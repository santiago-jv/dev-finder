import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { GithubUserService } from '../../services/github-user.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  name:string = ""
  @Output() onSearch:EventEmitter<string> = new EventEmitter()
  constructor(private githubUserService : GithubUserService) { }

  ngOnInit(): void {
  }
  

  search() {
    console.log(this.name)
    this.onSearch.emit(this.name)
  }

}
