import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MarvelService } from '../services/Marvel.service';

@Component({
  selector: 'app-all-comics',
  templateUrl: './all-comics.component.html'
})
export class AllComicsComponent implements OnInit {

  constructor(private marvelService: MarvelService) { }

  allComics:any=[];
  totalResults: number = 1;
  pageEvent: PageEvent = new PageEvent;

  ngOnInit(): void {
    this.marvelService.allComics().subscribe((result) => {
      this.allComics = result.data.results;
      this.totalResults = result.data.total;
    })
  }

  loadComics() {
    const pageNumber: number = this.pageEvent.pageIndex;
    const pageSize: number = this.pageEvent.pageSize
    this.marvelService.allComics(pageNumber, pageSize).subscribe((result) =>this.allComics = result.data.results)
  }
}
