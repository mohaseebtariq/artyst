import { Artist } from './../../shared/interfaces/artist.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-card',
  templateUrl: './artist-card.component.html',
  styleUrls: ['./artist-card.component.scss']
})
export class ArtistCardComponent implements OnInit {

  @Input() artistData: Array<Artist> = []

  constructor() { }

  ngOnInit(): void {
  }

}
