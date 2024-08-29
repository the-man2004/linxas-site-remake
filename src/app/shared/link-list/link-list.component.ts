import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './link-list.component.html',
  styleUrl: './link-list.component.css',
})
export class LinkListComponent {
  @Input({ required: true }) arr!: {
    text: string;
    url: string;
  }[];

  onLinkClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
