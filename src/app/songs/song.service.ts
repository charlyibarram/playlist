import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


type Track={
artist:string,
name:string,
url:string
}

@Injectable({
  providedIn: 'root'
})
export class SongService {

  public songs: Array<Track>=null;
  private API_KEY='fb818c9e3dc9667e082d7cc53b98c4ca';

  constructor(private http:HttpClient) { }

  searchSong(song){
    
   const API_URL=`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${song}&api_key=${this.API_KEY}&format=json`;
   
    return this.http.get(API_URL)
    .pipe(
      map(response => response['results'].trackmatches.track)
    ).toPromise();
    
  }

  getSongs(){

    return this.songs=[{
      artist:'Love of Lesbian ',
      name:'El astronauta que vio a Elvis ',
    url: 'https://music.amazon.com.mx/albums/B07K6Y5QJM?trackAsin=B07K6Y61LF&ref=dm_sh_6aa0-49a9-dmcp-89d4-a0110&musicTerritory=MX&marketplaceId=A1AM78C64UM0Y8'
  }];
  }
}

