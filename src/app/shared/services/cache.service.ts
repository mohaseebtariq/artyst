import { Artist } from './../interfaces/artist.interface';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CacheService {
    artists: Artist[] = [];

    constructor() {}

    cacheArtists(artist: Artist) {
        this.artists.push(artist);
        const artistStorage = localStorage.getItem('artists');
        if(artistStorage) {
            let storage = JSON.parse(artistStorage)
            this.artists.map(value => {
                storage.push(value);
            })
            localStorage.setItem('artists', JSON.stringify(storage));    
        }
        localStorage.setItem('artists', JSON.stringify(this.artists));
    }

    getCachedArtists() {
        const cachedArtist = localStorage.getItem('artists');
        return cachedArtist;
    }
    

}