import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.sercives';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>🔎 Buscar</h5>
  <input type="text"
  placeholder="Buscar gifs..."
  class="form-control"
   (keyup.enter)="searchTag(  )"
   #txtTagInput
  >`,
  styleUrl: './search-box.component.css',
})
export class SearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) { }

  searchTag() {

    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag)
    this.tagInput.nativeElement.value = "";
  }


}
