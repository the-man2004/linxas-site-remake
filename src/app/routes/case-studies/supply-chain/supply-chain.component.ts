import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-supply-chain',
  standalone: true,
  imports: [LogoComponent, ListComponent],
  templateUrl: './supply-chain.component.html',
})
export class SupplyChainComponent {
  theChallenge = [
    'Securing access to scheduling, planning, BOM, maintenance',
    'Ensuring secure access to SAP data at shared kiosks via biometrics',
    'Improve efficiency, lower downtime and maintenance costs',
  ];

  keyChallenges = [
    'Enable users with limited computer literacy or SAP proficiency to interact with systems easily',
    'Minimize training requirements',
    'Accommodate multi-lingual needs',
    'Enforce biometric authentication of all SAP data access',
    'Lower Maintenance costs – keep plants & depots running more efficiently',
  ];
}
