import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from '../../../shared/list/list.component';

@Component({
  selector: 'app-workflow-approvals',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent],
  templateUrl: './workflow-approvals.component.html',
  styleUrl: './workflow-approvals.component.css',
})
export class WorkflowApprovalsComponent {
  businessSituation = [
    'Major brand-name pharmaceutical company uses SAP for most of their business processes including manufacturing',
    'Decentralized operations create the need for remote financial approvals on a timely basis, while preserving the highest levels of identity management for approvers',
  ];

  keyChallenges = [
    'A custom workflow process was created to prioritize large transactions that exceeded a threshold value',
    'These transactions were routed to the appropriate approver via email',
    'Approvals of such high-value transactions involved mandatory biometric authentication of the SAP user, even high-ranking executives',
    'Workflow items would only be passed on following successful biometric authentication of the activity',
  ];

  majorObjectives = [
    'High-dollar payment approvals in SAP to be processed with customized web interface for end-users',
    'Payment approval link forwarded to approver via e-mail',
    'Approver opens webpage for list of payments to approve',
    'Biometric identification must occur for approval to update in SAP',
    'Payment is sent only after the successful biometric identification and credential verification',
  ];

  keyBusinessOutcomes = [
    'Control of high-value payment approvals obtained with tamper-proof audit trail in SAP',
    'Process cannot be circumvented with administrator passwords',
    'Remote approvals in SAP with biometric authentication of high-risk transactions are now possible',
  ];
}
