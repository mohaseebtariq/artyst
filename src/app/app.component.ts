import { Artist } from './shared/interfaces/artist.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataService } from './shared/services/data.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  artists: Array<Artist> = [];
  subjectKeyUp = new Subject<any>();
  artistResponse: any;
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.subjectKeyUp.pipe(debounceTime(1000)).subscribe(data => {
      this.artistResponse = this.data.getArtists(data).subscribe(artist => {
        if (typeof artist !== 'string') {
          this.artists.push(artist);
        }
      })
    })
  }

  search(e: any) {
    let searchValue = e.target.value;
    if (searchValue !== '') {
      this.subjectKeyUp.next(searchValue);
    }
  }

  ngOnDestroy() {
    this.subjectKeyUp.unsubscribe();
    this.artistResponse.unsubscribe();
  }

}
