import { catchError, map } from 'rxjs/operators';
import { Artist } from './../interfaces/artist.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { ArtistEvents } from '../interfaces/event.interface';

@Injectable({
  providedIn: 'root'
})

export class DataService {
    
    apiUrl: string = 'https://rest.bandsintown.com';
    app_id: number = 123;

    constructor(private http: HttpClient) {}

    getArtists(artistName: string) {
        const actorsUrl = `${this.apiUrl}/artists/${artistName}?app_id=${this.app_id}`;
        return this.http.get<Artist>(actorsUrl).pipe(map(artist => {
            return artist;
        }) ,catchError(this.errorHandler))
    }

    getEvents(artistName: string) {
        const eventUrl = `${this.apiUrl}/artists/${artistName}/events?app_id=${this.app_id}`;
        return this.http.get<Array<ArtistEvents>>(eventUrl).pipe(map(events => {
            return events;
        }) ,catchError(this.errorHandler))    
    }

    errorHandler(error: HttpErrorResponse) {
        return throwError(error.message);
    }
}
