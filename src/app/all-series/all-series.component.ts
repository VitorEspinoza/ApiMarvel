import { MarvelService } from '../services/Marvel.service';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-all-series',
  templateUrl: './all-series.component.html',
})
export class AllSeriesComponent implements OnInit {


  constructor(private marvelService: MarvelService) { }

  allSeries:any=[];
  totalResults: number = 1;
  pageEvent: PageEvent = new PageEvent;

  ngOnInit(): void {
    this.marvelService.allSeries().subscribe((result) => {
      this.totalResults = result.data.total;
      this.allSeries = result.data.results;
    })
  }

  loadSeries() {
    const pageNumber: number = this.pageEvent.pageIndex;
    const pageSize: number = this.pageEvent.pageSize
    this.marvelService.allSeries(pageNumber, pageSize).subscribe((result) =>this.allSeries = result.data.results)

  }
}
