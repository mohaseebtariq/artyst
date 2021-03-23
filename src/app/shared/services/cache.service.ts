import { Artist } from './../interfaces/artist.interface';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CacheService {

    constructor() {}

    cacheArtists(artist: Artist) {
        const artistStorage: Array<Artist> = JSON.parse(localStorage.getItem('artists') !) || [];
        if (artistStorage.length > 0) {
            artistStorage.push(artist);
            localStorage.setItem('artists', JSON.stringify(artistStorage));
        } else {
            localStorage.setItem('artists', JSON.stringify([artist]));
        }
    }

    getCachedArtists() {
        const cachedArtist = JSON.parse(localStorage.getItem('artists') !);
        return new Observable((observer) => {
            return observer.next(cachedArtist);
        });
    }
    

}