import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css',
})
export class TeamComponent {}
