import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

type Response = {
  topalbums: {
    album: Album
  }
};

type Album = {

}

@Injectable({
  providedIn: 'root'
})

export class AlbumService {


  constructor(private http: HttpClient) { }

  private API_KEY='fb818c9e3dc9667e082d7cc53b98c4ca';

  getAlbums(artist){
    
    const ALBUMS_URL=`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=${this.API_KEY}&format=json`;



    return this.http
      .get(ALBUMS_URL)
      .pipe(
        map((response: Response) => response.topalbums.album)
      )
      .toPromise();
}
}
