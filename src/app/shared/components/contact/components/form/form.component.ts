import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  selectedCountryCode = 'ES';
  phoneValue = '+34';

  countries = [
    { code: 'ES', pre: '+34' },
    { code: 'FR', pre: '+343' },
    { code: 'IT', pre: '+341' },
    { code: 'US', pre: '+342' },
  ];
  constructor(private fb: FormBuilder) {}
  get name() {
    return this.formUser.get('name') as FormControl;
  }
  get email() {
    return this.formUser.get('email') as FormControl;
  }
  get phone() {
    return this.formUser.get('phone') as FormControl;
  }
  get acceptConditions() {
    return this.formUser.get('acceptConditions') as FormControl;
  }

  formUser = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    countryCode: ['ES'],
    phone: [
      '',
      [Validators.required, Validators.pattern(/^(\+?\d{1,3}[- ]?)?\d+$/)],
    ],
    acceptConditions: [false, Validators.requiredTrue],
  });

  updatePhoneValue() {
    const countryCode = this.selectedCountryCode;
    const selectedCountry = this.countries.find(
      (country) => country.code === countryCode
    );
    if (selectedCountry) {
      this.phoneValue = selectedCountry.pre;
    }
  }

  process() {
    console.log(this.formUser.value);
  }
}
