import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-workflow-approvals',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './workflow-approvals.component.html',
  styleUrl: './workflow-approvals.component.css',
})
export class WorkflowApprovalsComponent {}
