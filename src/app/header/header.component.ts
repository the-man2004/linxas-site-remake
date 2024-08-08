import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationLinksComponent } from './navigation-links/navigation-links.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, NavigationLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;

  onMenuClick() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
