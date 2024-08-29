import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';
import { ListComponent } from '../../../shared/list/list.component';
import { LinkListComponent } from '../../../shared/link-list/link-list.component';

@Component({
  selector: 'app-data-security',
  standalone: true,
  imports: [LogoComponent, RouterModule, ListComponent, LinkListComponent],
  templateUrl: './data-security.component.html',
  styleUrl: './data-security.component.css',
})
export class DataSecurityComponent {
  threatsInDataSecurity = [
    'Browser functions such as SE16, SU01',
    'Generic logon such as DDIC, firefighter',
    'Transport Manager',
    'Perimeter Access Control',
  ];
}
