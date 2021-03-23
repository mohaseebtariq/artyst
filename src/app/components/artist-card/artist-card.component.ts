import { Artist } from './../../shared/interfaces/artist.interface';

import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { ArtistEvents } from 'src/app/shared/interfaces/event.interface';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit{

  @Input() artistData: Array<Artist> = [];
  eventData: Array<ArtistEvents> = [];

  constructor(private data: DataService) {}

  ngOnInit(): void {}

  getEvents() {
    this.artistData.map(artist => {
      this.data.getEvents(artist.name).subscribe(event => {
        event.map(value => {
          console.log(value);
          this.eventData.push(value);
        })
      });
    })
  }

}
