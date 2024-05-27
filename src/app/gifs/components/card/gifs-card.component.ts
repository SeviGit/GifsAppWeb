
import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css'
})
export class CardComponent implements OnInit {

  @Input()
  public gif!: Gif ;

  ngOnInit(): void {
    if ( !this.gif ) throw new Error('Gif poperty is required');
  }


}
