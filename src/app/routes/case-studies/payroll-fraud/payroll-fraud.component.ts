import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-payroll-fraud',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent],
  templateUrl: './payroll-fraud.component.html',
  styleUrl: './payroll-fraud.component.css',
})
export class PayrollFraudComponent {
  businessSituation = [
    'Growing student body',
    'Budgetary restraints due to declining funding allocations',
    'Declining capital spending putting more pressure on infrastructure',
    'Salaries fixed by Collective Bargaining',
    'Agreement – non-exempt overtime pay contributing to budget shortfall',
  ];

  keyChallenges = [
    'Non-exempt administrative workers overtime approval process flawed',
    'This user has experienced instances of extensive fraud in the approval of overtime pay',
    'SAP process for approval of overtime pay typically delegated to administrative assistants, creating a fraud opportunity',
    'SAP passwords were the only security mechanism prior to bioLock',
  ];

  implementationHighlights = [
    'Associate individual biometric user profiles with specific SAP tasks in HR/Payroll, defining any delegated tasks',
    'Enforce biometric re-authentication for every sensitive task',
    'Tamper-proof logging and audit trail for each protected transaction',
  ];

  majorObjectives = [
    'Provide indisputable identity management with biometrics',
    'Control extended authorizations where a user executed transactions under a supervisor’s profile',
    'Identify transactions executed under delegated authority',
    'Create an indelible audit trail of activity',
    'Ensure true segregation of duties (SoD) in the approval of overtime pay',
  ];

  keyBusinessOutcomes = [
    'Payroll overtime fraud has been eliminated',
    'Payroll budget control has been regained using biometrics',
    'Employees responsible for fraud were held accountable',
  ];
}
