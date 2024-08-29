import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LinkListComponent } from '../shared/link-list/link-list.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, LinkListComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  onLinkClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
