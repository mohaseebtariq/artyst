import { Artist } from './shared/interfaces/artist.interface';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { DataService } from './shared/services/data.service';
import { CacheService } from './shared/services/cache.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{

  artists: Array<Artist> = [];
  subjectKeyUp = new Subject<any>();
  artistResponse: Subscription = new Subscription;

  constructor(private data: DataService, private cache: CacheService) {}

  ngOnInit(): void {
    const cachedArtistList = this.cache.getCachedArtists();
    this.subjectKeyUp.pipe(debounceTime(1000), distinctUntilChanged()).subscribe(data => {
      if (cachedArtistList === null) {
        this.requestArtist(data);
    } else {
      let artistArray: Array<Artist> = JSON.parse(cachedArtistList !);
      let cachedArtist = artistArray.filter(value => value.name.toLocaleLowerCase() === data);
      if (cachedArtist.length > 0) {
        cachedArtist.map(artist => {
          this.artists.push(artist);
        })
      } else {
        this.requestArtist(data);
      }
    } 
    })
  }

  search(e: any) {
    let searchValue = e.target.value;
    if (searchValue !== '') {
      this.subjectKeyUp.next(searchValue);
    }
  }

  requestArtist(data: string) {
    this.artistResponse = this.data.getArtists(data).subscribe(artist => {
      if (typeof artist !== 'string') {
        this.cache.cacheArtists(artist);
        this.artists.push(artist);
      }
    })
  }

  ngOnDestroy() {
    this.subjectKeyUp.unsubscribe();
    this.artistResponse.unsubscribe();
  }

}
