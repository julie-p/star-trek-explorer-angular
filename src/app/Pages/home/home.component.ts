import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faSearch = faSearch;

  data: Array<any>;

  searchFilter?: string;
  
  constructor(private api: ApiService) { 
    this.api.getData().subscribe(data => {
      this.data = data.episodes;
    })
  }

  ngOnInit(): void {}

  get titles() {
    return this.data ? this.data.filter(episode => 
      this.searchFilter 
      ? episode.title
        .toLowerCase()
        .includes(this.searchFilter.toLowerCase())
      : episode
      )
      : this.data;
  }

  goToEpisodeSection() {
    document.getElementById('episode-section').scrollIntoView({behavior: 'smooth'});
  }
}
