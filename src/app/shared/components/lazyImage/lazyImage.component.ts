import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
  styleUrl: './lazyImage.component.css',

})
export class LazyImageComponent implements OnInit{

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded :boolean = false;

  ngOnInit(): void {
    if ( !this.url ) throw new Error('La propiedad URL es requerida');
  }

  onLoad(){
    setTimeout(()=>{
      this.hasLoaded=true
    }, 1000 );

  }
}
