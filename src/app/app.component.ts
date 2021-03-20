import { Artist } from './shared/interfaces/artist.interface';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  artists: Array<Artist> = [];

  constructor(private data: DataService) {}

  search(e: any) {
    let searchValue = e.target.value;
    if (searchValue !== '') {
      this.data.getArtists(searchValue).subscribe(artist => {
        this.artists.push(artist);
      })
    }
  }
}
