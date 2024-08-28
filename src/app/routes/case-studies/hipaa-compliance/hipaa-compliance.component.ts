import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-hipaa-compliance',
  standalone: true,
  imports: [LogoComponent, ListComponent],
  templateUrl: './hipaa-compliance.component.html',
})
export class HipaaComplianceComponent {
  businessSituation = [
    'The government agency uses SAP solutions for most business processes including HR & Payroll',
    'An information privacy violation had occurred prior to bioLock installation, where employees’ electronic protected health information (EPHI) was accessed by unauthorized parties',
    'Risk of increased civil/criminal penalties',
  ];

  keyChallenges = [
    'HIPAA requires disclosure of any breaches of protected data. Employers are “covered entities” if they provide healthcare benefits to employees',
    'SAP HR data is stored in “infotypes”, e.g. infotype 0167 (Health Plans), which have to be individually controlled to avoid unauthorized access',
    'Both administrative and technical safeguards are required – standard passwords cannot provide the needed granular access control to SAP infotypes',
  ];

  implementationHighlights = [
    'Created biometric credential profiles for users authorized to view/edit data defined as PHI under the Privacy Rule',
    'Associated individual biometric user profiles with specific tasks in SAP HR',
    'Enforced biometric re-authentication for every sensitive task',
    'Implemented tamper-proof log-file trail for each protected transaction',
  ];

  majorObjectives = [
    'Comply with the Security Rule which requires technical safeguards (§164.304) “… the technology and the policy and procedures for its use that protect electronic protected health information and control access to it.”',
  ];

  arr = [
    'Unique User Identification',
    'Emergency Access Procedure',
    'Automatic Logoff',
    'Encryption and Decryption',
  ];
}
