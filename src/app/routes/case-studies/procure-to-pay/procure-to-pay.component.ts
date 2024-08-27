import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-procure-to-pay',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './procure-to-pay.component.html',
  styleUrl: './procure-to-pay.component.css',
})
export class ProcureToPayComponent {}
