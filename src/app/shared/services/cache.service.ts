import { Artist } from './../interfaces/artist.interface';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ArtistEvents } from '../interfaces/event.interface';

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

    cacheEvents(events: Array<ArtistEvents>, id: string) {
        const artistStorage: Array<Artist> = JSON.parse(localStorage.getItem('artists') !) || [];
        if (artistStorage.length > 0) {
            artistStorage.forEach(artist => {
                if(artist.id === id) {
                     artist['events'] = events;
                }
            })
        localStorage.setItem('artists', JSON.stringify(artistStorage));   
        }
    }

    artistExists(id: string) {
        const artistStorage: Array<Artist> = JSON.parse(localStorage.getItem('artists') !) || [];
        if (artistStorage.length > 0) {
            return artistStorage.filter(artist => artist.id === id);
        }
        return [];
    }

    getCachedArtists() {
        const cachedArtist = JSON.parse(localStorage.getItem('artists') !);
        return new Observable((observer) => {
            return observer.next(cachedArtist);
        });
    }
    
}