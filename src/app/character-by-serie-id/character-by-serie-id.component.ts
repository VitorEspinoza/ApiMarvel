import { MarvelService } from './../services/Marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-by-serie-id',
  templateUrl: './character-by-serie-id.component.html'
})
export class CharacterBySerieIdComponent implements OnInit {

  constructor(private marvelService: MarvelService) { }

  characterName: String = '';
  characters: any[] = [];
  searchedName: String = '';
  serieId = '';
  ngOnInit(): void {
    this.marvelService.characterBySerieId(this.serieId).subscribe(result => this.characters = result.data.results);
  }

  SearchByName(): void
  {


    if(this.searchedName != '' && this.searchedName != ' ')
    {
      console.log(this.searchedName);
      this.marvelService.characterBySerieIdAndName(this.serieId, this.searchedName).subscribe(result => this.characters = result.data.results);
    }
    else {
      this.marvelService.characterBySerieId(this.serieId).subscribe(result => this.characters = result.data.results);
    }
  }

}
