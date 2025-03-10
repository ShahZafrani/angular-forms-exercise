import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactFormComponent } from "./contact-form/contact-form.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactFormComponent],
  template: `
    <main class="main">
    <div class="content">
      <div >
        <h1>Name & Contact Entry</h1>
        <app-contact-form></app-contact-form>
      </div>
    </div>
    </main>
    <router-outlet />
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cares-exercise';
}
