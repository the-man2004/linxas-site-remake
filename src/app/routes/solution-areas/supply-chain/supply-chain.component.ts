import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-supply-chain',
  standalone: true,
  imports: [RouterModule, LogoComponent, ListComponent],
  templateUrl: './supply-chain.component.html',
  styleUrl: './supply-chain.component.css',
})
export class SupplyChainComponent {
  threatAreas = [
    'Unauthorized Movement of Inventory, WIP, Raw Materials',
    'Receipt and Release of Goods',
    'Customer or Vendor Account Tampering',
    'Shrinkage',
    'Inventory Write-offs',
    'Unauthorized Access to Bill of Materials (BOM)',
    'System access at shared devices',
    'Regulatory violations (example ITAR)',
  ];
}
