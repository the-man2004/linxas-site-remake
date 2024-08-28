import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';

@Component({
  selector: 'app-employee-self-service',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './employee-self-service.component.html',
  styleUrl: './employee-self-service.component.css',
})
export class EmployeeSelfServiceComponent {}
