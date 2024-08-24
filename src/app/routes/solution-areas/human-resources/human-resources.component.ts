import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LogoComponent } from '../../../shared/logo/logo.component';

@Component({
  selector: 'app-human-resources',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: './human-resources.component.html',
  styleUrl: './human-resources.component.css',
})
export class HumanResourcesComponent {}
