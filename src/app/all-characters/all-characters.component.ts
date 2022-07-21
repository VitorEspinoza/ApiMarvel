import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MarvelService } from './../services/Marvel.service';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html'
})
export class AllCharactersComponent implements OnInit {

  constructor(private marvelService: MarvelService) { }

  allCharacters:any=[];
  totalResults: number = 1;
  pageEvent: PageEvent = new PageEvent;

  ngOnInit(): void {
    this.marvelService.allCharacters().subscribe((result) => {
      this.totalResults = result.data.total;
      this.allCharacters = result.data.results;
    })
  }

  loadCharacters() {
    const pageNumber: number = this.pageEvent.pageIndex;
    const pageSize: number = this.pageEvent.pageSize
    this.marvelService.allCharacters(pageNumber, pageSize).subscribe((result) =>this.allCharacters = result.data.results)
  }

}
