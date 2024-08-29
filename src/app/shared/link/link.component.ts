import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css',
})
export class LinkComponent {
  @Input({ required: true }) text!: string;
  @Input({ required: true }) url!: string;

  onLinkClick() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
