import { CacheService } from './../../shared/services/cache.service';
import { Artist } from './../../shared/interfaces/artist.interface';

import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ArtistEvents } from 'src/app/shared/interfaces/event.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit, DoCheck{

  @Input() artistData: Array<Artist> = [];
  eventData: Array<any> = [];
  nonExistent: Boolean = false;
  constructor(private data: DataService, private cache: CacheService) {}

  ngOnInit(): void {
    this.eventData.length = 0;
  }

  ngDoCheck() {
    
  }

  getEvents() {
      this.artistData.map(artist => {
        const existingArtist = this.cache.artistExists(artist.id);
        if(existingArtist?.length > 0) {
          if (existingArtist[0].events) {
            existingArtist[0].events.map(e => {
              this.eventData.push(e);
              this.nonExistent = false;
            })
          } else {
            console.log('ads')
            this.nonExistent = true;
            this.eventData.length = 0;
            this.requestEvents(existingArtist);
          }
        } else {
          this.requestEvents(this.artistData);
        }
      })
  }

  requestEvents(artistList: Array<any>) {
    artistList.map(artist => {
      this.data.getEvents(artist.name).subscribe(event => {
        this.cache.cacheEvents(event, this.artistData[0].id);
        event.map(value => {
          this.eventData.push(value);
        })
      });
    })
  }

}
