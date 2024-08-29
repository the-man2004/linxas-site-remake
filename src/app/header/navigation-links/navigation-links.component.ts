import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-links',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navigation-links.component.html',
  styleUrl: './navigation-links.component.css',
})
export class NavigationLinksComponent {
  @Input({ required: true }) styleClass!: string;
  @Output() clickEvent = new EventEmitter();

  onLinkClick() {
    this.clickEvent.emit();
  }
}
