import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-retail-and-pos',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './retail-and-pos.component.html',
  styleUrl: './retail-and-pos.component.css',
})
export class RetailAndPosComponent {}
