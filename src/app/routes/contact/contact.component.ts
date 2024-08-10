import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './contact.component.html',
})
export class ContactComponent {}
