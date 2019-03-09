import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

type Response={
  results:{
    artistmatches:{
      artist:Array<Artist>
    }
  }

}


type Artist={
  name:string,
  url:string
  }

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  private API_KEY='fb818c9e3dc9667e082d7cc53b98c4ca';

  constructor(private http: HttpClient) { }

  searchArtist(artist){
    const URL=`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http
    .get<Response>(URL)
    .pipe(
      map(response=>{
        console.log('response', response);
        return response.results.artistmatches.artist;
      })
    ).toPromise();


  }

  getDetails(artist){
    const URL=`http://ws.audioscrobbler.com/2.0/?method=artist.getInfo&artist=${artist}&api_key=${this.API_KEY}&format=json`;
    return this.http
    .get<Response>(URL)
    .toPromise();
  }
}
