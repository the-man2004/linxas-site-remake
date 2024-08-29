import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from '../../../shared/list/list.component';
import { LinkListComponent } from '../../../shared/link-list/link-list.component';

@Component({
  selector: 'app-retail-and-pos',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent, LinkListComponent],
  templateUrl: './retail-and-pos.component.html',
})
export class RetailAndPosComponent {
  businessSituation = [
    'Rapid business growth',
    'Many retail locations spread out geographically',
    'Many workers not tied to a specific store or warehouse, switch places frequently',
  ];

  keyChallenges = [
    'Eliminate the delays caused by repeated log in/out from SAP',
    'Allow rapid employee rotation between stores or cash registers',
    'Create indisputable user accountability',
  ];

  majorObjectives = [
    'Mandatory biometric access control for any combination of 300 cash registers, over 200 locations, 800+ cashiers',
    'Secure access to SAP Transaction VA01 (creating a sales order) at the individual cashier & cash register activity level',
  ];

  implementationHighlights = [
    'Created generic SAP profiles, then associated individual biometric user profiles to them',
    'Logged biometric cashier re- authentication for EACH sale',
    'Automatic audit trail generated for each cash register transaction',
  ];

  keyBusinessOutcomes = [
    'True identity management for cashiers with 100% flexibility of workplace / cash register rotation',
    'Access to unattended cash registers by unauthorized users prevented',
    'Robust, tamper-proof audit trail in effect',
    'Reconciliation of cash register sales activity by individual cashier / transaction to SAP ERP financials',
  ];
}
