import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './routes/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, ContactComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
