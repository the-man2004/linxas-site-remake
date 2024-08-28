import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { LinkComponent } from '../../shared/link/link.component';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [LogoComponent, LinkComponent],
  templateUrl: './case-studies.component.html',
})
export class CaseStudiesComponent {
  caseStudies = [
    {
      title: 'Supply Chain',
      text: 'Users are authenticated biometrically before they can access SAP systems via shared access kiosks. We no longer have to worry about password fraud from these users at all.',
      url: '/case-studies/supply-chain',
      id: 1,
    },
    {
      title: 'Banking Fraud',
      text: 'A major international bank required biometric security capabilities natively embedded in their SAP system as part of their internal checks and balances requirements.',
      url: '/case-studies/banking-fraud',
      id: 2,
    },
    {
      title: 'Procure-to-Pay',
      text: 'With over half a century of glass manufacturing experience in South Africa, Consol has a heritage that is truly South African and assumes its position as industry leader with pride.',
      url: '/case-studies/procure-to-pay',
      id: 3,
    },
    {
      title: 'Payroll Fraud',
      text: 'The Association of Fraud Examiners defines payroll fraud as “any scheme in which an employee causes an employer to issue a payment by making false claims for compensation.” This means that every organization that pays employees can be a victim of fraud.',
      url: '/case-studies/payroll-fraud',
      id: 4,
    },
    {
      title: 'Retail / POS',
      text: 'RWZ is the third largest agricultural cooperative in Germany based in Mainz. It employs more than 3,300 employees working at over 200 locations via 17 subsidiary companies.',
      url: '/case-studies/retail-and-pos',
      id: 5,
    },
    {
      title: 'Employee Self-Service',
      text: 'As a truly Namibian company employing 5,568 people in various sectors, the Ohlthaver & List Group is rooted in and committed to, Namibia and all her peoples.',
      url: '/case-studies/employee-self-service',
      id: 6,
    },
    {
      title: 'Workflow Approvals',
      text: 'Pharma manufacturer installs bioLock(TM) within SAP to implement workflow approvals with biometric identity management.',
      url: '',
      id: 7,
    },
    {
      title: 'Perimeter Security',
      text: 'With the implementation of this solution, the client has graduated from the obsolete world of passwords to a far more controlled environment of biometric identity management.',
      url: '',
      id: 8,
    },
    {
      title: 'HIPAA Compliance',
      text: 'HIPAA, the American Health Insurance Portability and Accountability Act, as amended by the Final Rule and the HITECH Act provisions of 2009 is a set of rules to be followed by doctors, hospitals, and also employers',
      url: '',
      id: 9,
    },
    {
      title: 'Public Sector Fraud',
      text: 'We are seeing an increasing number of high-profile security breaches in the recent past. Apart from legislative challenges, SAP customers in general are facing more skilled and ruthless opportunists that will do anything to get unauthorized access to data and funds',
      url: '',
      id: 10,
    },
  ];
}
