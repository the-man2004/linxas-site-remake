import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-solution-areas',
  standalone: true,
  imports: [LogoComponent, RouterModule],
  templateUrl: './solution-areas.component.html',
  styleUrl: './solution-areas.component.css',
})
export class SolutionAreasComponent {
  onLinkClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
