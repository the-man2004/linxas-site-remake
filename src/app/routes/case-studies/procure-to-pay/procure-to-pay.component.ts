import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from '../../../shared/list/list.component';
import { LinkListComponent } from '../../../shared/link-list/link-list.component';

@Component({
  selector: 'app-procure-to-pay',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent, LinkListComponent],
  templateUrl: './procure-to-pay.component.html',
})
export class ProcureToPayComponent {
  businessSituation = [
    'Multiple manufacturing plus retail locations',
    'Complex vendor/procurement landscape',
    'Host-to-host payment streams direct to vendors’ banks',
  ];

  keyChallenges = [
    'Need to mitigate risk associated with vendor payment approvals',
    'Provide for mandatory dual biometric approval built into the payment process',
    'Enforce biometric authentication of high-risk activities',
    'Prevent non-biometric users from access to high-risk functional areas',
    'Required tamper-proof logging of all restricted activities, including failed or unauthorized attempts',
  ];

  majorObjectives = [
    'Securing streams of vendor payments serving the needs of four factories',
    'Securing retail product return cash operations',
    'Ensuring segregation of duties (SoD) in procurement',
  ];
}
