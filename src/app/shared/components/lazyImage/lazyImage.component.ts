import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lazy-image',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>lazyImage works!</p>`,
  styleUrl: './lazyImage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent { }
