import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-direction',
  templateUrl: './direction.component.html',
  styleUrls: ['./direction.component.scss'],
})
export class DirectionComponent {
  isFormSubmited: boolean = false;

  constructor(private fb: FormBuilder) {}
  @Output() formSubmited: EventEmitter<boolean> = new EventEmitter<boolean>();

  get name() {
    return this.formUser.get('name') as FormControl;
  }

  get surname() {
    return this.formUser.get('surname') as FormControl;
  }

  get phone() {
    return this.formUser.get('phone') as FormControl;
  }

  get email() {
    return this.formUser.get('email') as FormControl;
  }

  get village() {
    return this.formUser.get('village') as FormControl;
  }

  get cp() {
    return this.formUser.get('cp') as FormControl;
  }
  get street() {
    return this.formUser.get('street') as FormControl;
  }
  get flat() {
    return this.formUser.get('flat') as FormControl;
  }
  get number() {
    return this.formUser.get('number') as FormControl;
  }
  get door() {
    return this.formUser.get('door') as FormControl;
  }

  formUser = this.fb.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    surname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    phone: ['', [Validators.required, Validators.minLength(11)]],
    email: ['', [Validators.required, Validators.email]],
    village: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    cp: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    street: ['', [Validators.required]],
    flat: ['', [Validators.required]],
    door: ['', [Validators.required]],
    number: ['', [Validators.required]],
  });

  ngOnInit() {
    this.formUser.valueChanges.subscribe(() => {
      this.isFormSubmited = this.formUser.valid;
    });
  }

  formatName(event: any) {
    let input = event.target.value;
    const formattedValue = input.replace(/[^a-zA-Z ]/g, '');
    this.formUser.patchValue({ name: formattedValue }, { emitEvent: false });
  }

  formatSurname(event: any) {
    let input = event.target.value;
    const formattedValue = input.replace(/[^a-zA-Z ]/g, '');
    this.formUser.patchValue({ surname: formattedValue }, { emitEvent: false });
  }
  formatPhone(event: any) {
    let input = event.target.value;
    const numericValue = input.replace(/[^0-9]/g, '');
    const formattedValue = `+${numericValue.slice(0, 11)}`.replace(
      /(\+\d{2})(\d{3})(\d{3})(\d{3})/,
      '$1 $2 $3 $4'
    );
    this.formUser.patchValue({ phone: formattedValue }, { emitEvent: false });
  }

  formatVillage(event: any) {
    let input = event.target.value;
    const formattedValue = input.replace(/[^a-zA-Z ]/g, '');
    this.formUser.patchValue({ village: formattedValue }, { emitEvent: false });
  }
  formatCP(event: any) {
    let input = event.target.value;
    const numericValue = input.replace(/\D/g, '');
    const formattedValue = numericValue.slice(0, 8);
    this.formUser.patchValue({ cp: formattedValue }, { emitEvent: false });
  }
}
