import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-customer-service',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent],
  templateUrl: './customer-service.component.html',
  styleUrl: './customer-service.component.css',
})
export class CustomerServiceComponent {
  pointOfSale = [
    'Unauthorized cashier activity: credits, discounts, merchandise returns',
    'Cash reconciliation',
    'Inventory shrinkage',
    'Call center customer privacy',
  ];
}
