import { Component, OnInit } from '@angular/core';
import { SongService } from './song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public songs:Array<Object>=null;

  constructor(private songService:SongService) { }

  ngOnInit() {
    this.songs=this.songService.getSongs();
  }

}
