import { Routes } from '@angular/router';

import { HomeComponent } from './app/routes/home/home.component';
import { AboutComponent } from './app/routes/about/about.component';
import { SolutionAreasComponent } from './app/routes/solution-areas/solution-areas.component';
import { CaseStudiesComponent } from './app/routes/case-studies/case-studies.component';
import { MultimediaComponent } from './app/routes/multimedia/multimedia.component';
import { TeamComponent } from './app/routes/team/team.component';
import { ContactComponent } from './app/routes/contact/contact.component';

import { FinanceComponent } from './app/routes/solution-areas/finance/finance.component';
import { HumanResourcesComponent } from './app/routes/solution-areas/human-resources/human-resources.component';
import { CustomerServiceComponent } from './app/routes/solution-areas/customer-service/customer-service.component';
import { SupplyChainComponent } from './app/routes/solution-areas/supply-chain/supply-chain.component';
import { DataSecurityComponent } from './app/routes/solution-areas/data-security/data-security.component';

import { SupplyChainComponent as SupplyChainCaseStudyComponent } from './app/routes/case-studies/supply-chain/supply-chain.component';
import { BankingFraudComponent } from './app/routes/case-studies/banking-fraud/banking-fraud.component';
import { ProcureToPayComponent } from './app/routes/case-studies/procure-to-pay/procure-to-pay.component';
import { PayrollFraudComponent } from './app/routes/case-studies/payroll-fraud/payroll-fraud.component';
import { RetailAndPosComponent } from './app/routes/case-studies/retail-and-pos/retail-and-pos.component';
import { EmployeeSelfServiceComponent } from './app/routes/case-studies/employee-self-service/employee-self-service.component';
import { WorkflowApprovalsComponent } from './app/routes/case-studies/workflow-approvals/workflow-approvals.component';
import { PerimeterSecurityComponent } from './app/routes/case-studies/perimeter-security/perimeter-security.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'CheckIDInSAP',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'About - CheckIDInSAP',
  },
  {
    path: 'solution-areas',
    component: SolutionAreasComponent,
    title: 'Solution Areas - CheckIDInSAP',
  },
  // --------------------
  // ALL THE SOLUTION AREAS ROUTES
  {
    path: 'solution-areas/finance',
    component: FinanceComponent,
    title: 'Finance - CheckIDInSAP',
  },
  {
    path: 'solution-areas/human-resources',
    component: HumanResourcesComponent,
    title: 'Human Resources - CheckIDInSAP',
  },
  {
    path: 'solution-areas/customer-service',
    component: CustomerServiceComponent,
    title: 'Customer Service - CheckIDInSAP',
  },
  {
    path: 'solution-areas/supply-chain',
    component: SupplyChainComponent,
    title: 'Supply Chain - CheckIDInSAP',
  },
  {
    path: 'solution-areas/data-security',
    component: DataSecurityComponent,
    title: 'Data Security - CheckIDInSAP',
  },
  // ---------------------

  {
    path: 'case-studies',
    component: CaseStudiesComponent,
    title: 'Case Studies - CheckIDInSAP',
  },
  // --------------------
  // ALL THE CASE STUDIES ROUTES
  {
    path: 'case-studies/supply-chain',
    component: SupplyChainCaseStudyComponent,
    title: 'Supply Chain - CheckIDInSAP',
  },
  {
    path: 'case-studies/banking-fraud',
    component: BankingFraudComponent,
    title: 'Banking Fraud - CheckIDInSAP',
  },
  {
    path: 'case-studies/procure-to-pay',
    component: ProcureToPayComponent,
    title: 'Procure-to-Pay - CheckIDInSAP',
  },
  {
    path: 'case-studies/payroll-fraud',
    component: PayrollFraudComponent,
    title: 'Payroll Fraud - CheckIDInSAP',
  },
  {
    path: 'case-studies/retail-and-pos',
    component: RetailAndPosComponent,
    title: 'Retail and POS - CheckIDInSAP',
  },
  {
    path: 'case-studies/employee-self-service',
    component: EmployeeSelfServiceComponent,
    title: 'Employee Self-Service - CheckIDInSAP',
  },
  {
    path: 'case-studies/workflow-approvals',
    component: WorkflowApprovalsComponent,
    title: 'Workflow Approvals - CheckIDInSAP',
  },
  {
    path: 'case-studies/perimeter-security',
    component: PerimeterSecurityComponent,
    title: 'Perimeter Security - CheckIDInSAP',
  },
  // --------------------
  {
    path: 'multimedia',
    component: MultimediaComponent,
    title: 'Multimedia - CheckIDInSAP',
  },
  {
    path: 'team',
    component: TeamComponent,
    title: 'Team - CheckIDInSAP',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact - CheckIDInSAP',
  },
];

export default routeConfig;
