import { Component } from '@angular/core';
import { LogoComponent } from '../../../shared/logo/logo.component';

@Component({
  selector: 'app-hipaa-compliance',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './hipaa-compliance.component.html',
  styleUrl: './hipaa-compliance.component.css',
})
export class HipaaComplianceComponent {}
