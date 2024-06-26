import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.sercives';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  constructor(private gifsServicces: GifsService) { }


  get tags(): string[] {
    return this.gifsServicces.tagsHistory;
  }

  searchTag(tag: string):void {
    this.gifsServicces.searchTag(tag)
  }


}
