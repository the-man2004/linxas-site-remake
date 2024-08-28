import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-banking-fraud',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent],
  templateUrl: './banking-fraud.component.html',
  styleUrl: './banking-fraud.component.css',
})
export class BankingFraudComponent {
  // Business Situation
  businessSituation = [
    'Major banking organization',
    'High volume of high-value transactions',
    'Exposure to international currency fluctuations',
    'Multiple aspects of banking including deposits, lending, investment and bullion',
  ];

  keyChallenges = [
    'Eliminate reliance on passwords',
    'Control electronic movement of large sums in various international currencies',
    'Control access to vendor data and release of payments',
    'Provide assurance to stakeholders of the safe-keeping of depositors’ and investors’ funds',
    'Monitor any SAP activity considered to offer risk',
    'Restrict access to high-level financial data viewing to authorized users only',
    'Required tamper-proof logging of all restricted activities, including failed or unauthorized attempts',
  ];

  keyBusinessOutcomes = [
    'Sensitive financial activities including large wire transfers, loan write-offs and more require biometric credentials and authentication',
    'Ability to set threshold field values in certain transactions, above which threshold biometric re-authentication is triggered',
    'Silent e-mail alerts and tamper-proof logging of failed activities indicating possible overstepping of a user’s credentials, providing a forensic trail',
  ];
}
