import { Component, OnInit } from '@angular/core';
import { ArtistService } from './artist.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  public artists:Array<any>=null;
  public artist:string=null;
  constructor(private artistService:ArtistService) { }

  ngOnInit() {
    
  }

  getArtists(){
    this.artistService.searchArtist(this.artist).then(response=>{
      this.artists=response;
    }
    
    ).catch(
      error=>console.error('Mi Error', error)
    )
  }

}
