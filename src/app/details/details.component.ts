import { Component,inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';
import {ReactiveFormsModule,FormControl, FormGroup} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
   <article>
    <img class="listing-photo" [src]="housingLocation?.photo" [alt]="housingLocation?.name">
    <section class="lisiting-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
      <p>{{housingLocation?.city}}{{housingLocation?.state}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <ul>
        <li>Unit available:{{housingLocation?.availableUnits}}</li>
        <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
        <li>Does this location have laundary:{{housingLocation?.laundry}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Apply now to live here</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input type="text" id="first-name" formControlName="firstName">
        <label for="last-name">Last Name</label>
        <input type="text" id="last-name" formControlName="LastName">
        <label for="email">Email</label>
        <input type="text" id="email" formControlName="email">
        <button  class="primary">
          Apply Now
        </button>
      </form>

    </section>
   </article>
  `,
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  route:ActivatedRoute = inject(ActivatedRoute);
  hosuingservice:HousingService = inject(HousingService);
  housingLocation:Housinglocation | undefined;
  applyForm = new FormGroup({
    firstName:new FormControl(''),
    LastName:new FormControl(''),
    email:new FormControl(''),
  })

  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.hosuingservice.getHousingLocationById(housingLocationId).then((housingLocation) => {
      this.housingLocation = housingLocation;
    })
  }

  submitApplication() {
    console.log('works')
    this.hosuingservice.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.LastName ?? '',
      this.applyForm.value.email ?? '',
    )
  }

}
