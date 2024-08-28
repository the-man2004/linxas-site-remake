import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-perimeter-security',
  standalone: true,
  imports: [LogoComponent, ListComponent],
  templateUrl: './perimeter-security.component.html',
})
export class PerimeterSecurityComponent {
  businessSituation = [
    'Rapid business growth',
    'Many warehouse and office locations over a large geographical area',
    'Workforce not necessarily tied to a specific location',
  ];

  keyChallenges = [
    'Know who has access to SAP',
    'Eliminate password-sharing',
    'Provide robust audit trail of users’ access to SAP',
    'Prevent unauthorized access',
    'Achieve 100% SAP perimeter access control',
    'Create indisputable user accountability',
  ];

  implementationHighlights = [
    'Enroll all authorized users with biometric profiles, regardless of SAP function',
    'Require biometric access control at every log-on',
    'Maintain audit log, including failed attempts, for analysis',
  ];

  majorObjectives = [
    'Mandatory biometric identity management for 1,000 users at multiple locations',
    'Biometrically secure access to SAP log-on for all users on PCs and laptops via direct access or VPN',
  ];

  keyBusinessOutcomes = [
    'True identity management for all employees, with 100% flexibility of workplace rotation',
    'Tamper-proof audit trail in effect',
    'Future option includes biometric access for non-employees such',
  ];
}
