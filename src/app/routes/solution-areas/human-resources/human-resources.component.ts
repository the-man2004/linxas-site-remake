import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';
import { LinkListComponent } from '../../../shared/link-list/link-list.component';

@Component({
  selector: 'app-human-resources',
  standalone: true,
  imports: [RouterModule, LogoComponent, ListComponent, LinkListComponent],
  templateUrl: './human-resources.component.html',
  styleUrl: './human-resources.component.css',
})
export class HumanResourcesComponent {
  keyAreasOfConcern = [
    'Payroll Visibility & Fraud',
    'Time & Attendance Fraud',
    'System Access by “Ghost Workers”',
    'Privacy: Personally Identifiable Information (PII)',
    'Personnel Records',
    'Employee Self-Service',
  ];
}
