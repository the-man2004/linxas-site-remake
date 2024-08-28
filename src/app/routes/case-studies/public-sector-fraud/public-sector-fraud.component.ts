import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-public-sector-fraud',
  standalone: true,
  imports: [LogoComponent, ListComponent],
  templateUrl: './public-sector-fraud.component.html',
})
export class PublicSectorFraudComponent {
  businessSituation = [
    'Increase in claims against Occupational Health Compensation, Pension Funds, and other social benefits which are not matched by equivalent collection of insurance premiums',
    'Financial challenges produced by difficult economic conditions',
    'Lack of controls in beneficiary registration and in benefits disbursement',
  ];

  keyChallenges = [
    'Prevent fraudulent claims for government social benefits',
    'Prevent double payments, misdirected payments due to password sharing',
    'Prevent complicity of agency employees with fraudulent beneficiaries',
    'Control registration and activities involving beneficiaries',
    'Enforce biometric authentication of high-risk activities',
    'Required tamper-proof logging of all restricted activities, including failed or unauthorized attempts',
  ];

  keyBusinessOutcomes = [
    'Biometric re-authentication of key activities involving beneficiary claims mitigates the risk of fraudulent activities and the resulting budgetary shortfalls',
    'Registration and management of business partners and beneficiaries is controlled via smart cards and biometrics',
    'Tamper-proof audit trail in effect for user accountability',
  ];
}
