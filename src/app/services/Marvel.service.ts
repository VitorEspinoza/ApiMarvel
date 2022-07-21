import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

private V1BaseUrl: string = 'https://gateway.marvel.com/v1/public';
private ts = '1565045589';
private publicApiKey = 'd527c395bca279f2d8064c61676893ad';
private hash = '22d27f1fe29947a1edefa44cb4bf5228';
private endUrl = 'ts=' + this.ts + '&apikey=' + this.publicApiKey + '&hash=' + this.hash;

constructor(private http: HttpClient) { }

allCharacters(pageNumber: number = 0, pageSize: number = 10):Observable<any>
{
  return this.http.get(this.V1BaseUrl + '/characters?' + this.endUrl + '&offset=' + (pageNumber * pageSize) + '&limit=' + pageSize);
}

allComics(pageNumber: number = 0, pageSize: number = 10):Observable<any>
{
  return this.http.get(this.V1BaseUrl + '/comics?' + this.endUrl + '&offset=' + (pageNumber * pageSize) + '&limit=' + pageSize);
}

allSeries(pageNumber: number = 0, pageSize: number = 10):Observable<any>
{
  return this.http.get(this.V1BaseUrl + '/series?' + this.endUrl + '&offset=' + (pageNumber * pageSize) + '&limit=' + pageSize);
}

characterBySerieId(serieId: String):Observable<any>
{
  return this.http.get(this.V1BaseUrl + '/series/' + serieId + '/characters?' + this.endUrl);
}

characterBySerieIdAndName(serieId: String, searchedName: String):Observable<any>
{
  console.log(this.V1BaseUrl + '/series/' + serieId + '/characters?' + this.endUrl + '&nameStartsWith=' + searchedName)
  return this.http.get(this.V1BaseUrl + '/series/' + serieId + '/characters?' + this.endUrl + '&nameStartsWith=' + searchedName);
}

}



