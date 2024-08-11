import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solution-areas',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './solution-areas.component.html',
})
export class SolutionAreasComponent {}
