import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-service',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './customer-service.component.html',
  styleUrl: './customer-service.component.css',
})
export class CustomerServiceComponent {}
