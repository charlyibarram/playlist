import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ArtistService } from '../artist.service';

type Response = {
  artist: Artist
};

type Artist = {
  image: Array<string>,
  bio:{
    summary: string,
    content: string
  }
}

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit, OnDestroy {

  artistName: string = null;
  artist: Artist = null;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private artistService: ArtistService
  ) { }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const { artist } = params;
      this.artistName = artist;
      this.getArtist(this.artistName);
    })
  }

  getArtist(artist) {
    this.artistService
      .getDetails(artist)
        .then((response) =>{
          this.artist = response['artist'];
        });
  }

}