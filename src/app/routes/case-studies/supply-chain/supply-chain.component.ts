import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';

@Component({
  selector: 'app-supply-chain',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './supply-chain.component.html',
  styleUrl: './supply-chain.component.css',
})
export class SupplyChainComponent {}
