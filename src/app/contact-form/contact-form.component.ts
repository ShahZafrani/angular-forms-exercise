import { Component, inject } from '@angular/core';
import {NgIf} from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, NgIf],
  template: `
    <form [formGroup]="profileForm" (ngSubmit)="onSubmit()">
      <label for="first-name">First Name: </label>
      <input id="first-name" type="text" formControlName="firstName">
      <div class="error" *ngIf="profileForm.controls['firstName'].invalid && (profileForm.controls['firstName'].dirty || profileForm.controls['firstName'].touched)">First Name is required.</div>
      <label for="middle-name">Middle Name: </label>
      <input id="middle-name" type="text" formControlName="middleName">

      <label for="last-name">Last Name: </label>
      <input id="last-name" type="text" formControlName="lastName">
      <div class="error"  *ngIf="profileForm.controls['lastName'].invalid && (profileForm.controls['lastName'].dirty || profileForm.controls['lastName'].touched)">Last Name is required.</div>
      <label for="phone-number">Phone Number: </label>
      <input id="phone-number" type="text" formControlName="phoneNumber">

      <label for="email">Email Address: </label>
      <input id="email" type="email" ngModel email formControlName="email">
      <div class="error"  *ngIf="profileForm.controls['email'].invalid && (profileForm.controls['email'].dirty || profileForm.controls['email'].touched)">A valid email address is required.</div>
      <!-- <p>Complete the form to enable button.</p> -->
      <p>formstatus: {{profileForm.status}}</p>
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrl: './contact-form.component.css',
})
export class ContactFormComponent {
  private formBuilder = inject(FormBuilder);

  profileForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    middleName: ['',],
    lastName: ['', Validators.required],
    phoneNumber: [''],
    email: ['', [Validators.required, Validators.email]],
  });

  onSubmit() {
    console.log(this.profileForm);
    if (this.profileForm.valid) {
      window.alert("Data Saved");
    } else {
      window.alert("Your form is invalid");
    }
  }
}
