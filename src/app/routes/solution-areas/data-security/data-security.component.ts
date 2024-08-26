import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';

@Component({
  selector: 'app-data-security',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './data-security.component.html',
  styleUrl: './data-security.component.css',
})
export class DataSecurityComponent {}
