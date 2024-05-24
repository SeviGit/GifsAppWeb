import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../Interfaces/gifs.interfaces';

const GIPHY_API_KEY = 'j0OX6j3wUrsyS46g88Rku2MjTyGQNZca'

@Injectable({ providedIn: 'root' })
export class GifsService {

  public gifList: Gif[] = [];
  private _tagHistory: string[] = [];
  private apiURL: string = 'http://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) { }

  get tagsHistory() {
    return [...this._tagHistory]
  }

  //
  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((oldTag) => oldTag !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10)

  }


  searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', GIPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag)


    this.http.get<SearchResponse>( `${ this.apiURL }/search`, {  params: params} )
      .subscribe(resp => {
       this.gifList = resp.data;
      });
    // fetch(`http://api.giphy.com/v1/gifs/search?api_key=j0OX6j3wUrsyS46g88Rku2MjTyGQNZca&q=${tag}&limit=10`)
    // .then( resp => resp.json() )
    // .then( data => console.log( data ) );
  }

}
