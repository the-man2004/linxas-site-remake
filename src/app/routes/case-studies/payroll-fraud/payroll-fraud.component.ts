import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-payroll-fraud',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './payroll-fraud.component.html',
  styleUrl: './payroll-fraud.component.css',
})
export class PayrollFraudComponent {}
