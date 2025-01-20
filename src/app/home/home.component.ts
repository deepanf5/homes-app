import { Component } from '@angular/core';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousinglocationComponent],
  template: `
      <section>
            <form>
              <input type="text" name="search" id="search" placeholder="filter by city">
              <button type="button">Search</button>
            </form>
      </section>
  `,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
