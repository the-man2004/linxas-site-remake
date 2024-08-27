import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';

@Component({
  selector: 'app-banking-fraud',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './banking-fraud.component.html',
  styleUrl: './banking-fraud.component.css',
})
export class BankingFraudComponent {}
