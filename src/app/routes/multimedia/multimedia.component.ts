import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-multimedia',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './multimedia.component.html',
  styleUrl: './multimedia.component.css',
})
export class MultimediaComponent {}
