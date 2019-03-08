import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  public songs:Array<Object>=null;

  constructor() { }

  ngOnInit() {

    this.songs=[{artist:'Love of Lesbian ',
  name:'El astronauta que vio a Elvis ',
url: 'https://music.amazon.com.mx/albums/B07K6Y5QJM?trackAsin=B07K6Y61LF&ref=dm_sh_6aa0-49a9-dmcp-89d4-a0110&musicTerritory=MX&marketplaceId=A1AM78C64UM0Y8'}]
  }

}
