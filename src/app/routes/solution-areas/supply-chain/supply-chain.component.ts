import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';

@Component({
  selector: 'app-supply-chain',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: './supply-chain.component.html',
  styleUrl: './supply-chain.component.css',
})
export class SupplyChainComponent {}
