import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';
import { LinkListComponent } from '../../../shared/link-list/link-list.component';

@Component({
  selector: 'app-solution-areas',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent, LinkListComponent],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.css',
})
export class FinanceComponent {
  keyThreatVectors = [
    'Procure-to-Pay Cycle',
    'Electronic Movement of Funds',
    'Fraudulent Accounting Entries',
    'Segregation-of-Duties (SoD)',
    'Regulatory (i.e. Sarbanes-Oxley)',
  ];
}
