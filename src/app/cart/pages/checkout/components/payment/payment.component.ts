import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  isFormSubmitedCard: boolean = false;

  constructor(private fbc: FormBuilder) {}
  @Output() formSubmitedCard: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  get name() {
    return this.formUserCard.get('name') as FormControl;
  }

  get card() {
    return this.formUserCard.get('card') as FormControl;
  }

  get cvc() {
    return this.formUserCard.get('cvc') as FormControl;
  }
  get date() {
    return this.formUserCard.get('date') as FormControl;
  }

  formUserCard = this.fbc.group({
    name: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    card: [
      '',
      [
        Validators.required,
        Validators.pattern('^([0-9]{4}[- ]){3}[0-9]{4}|[0-9]{16}$'),
      ],
    ],
    cvc: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    date: ['', [Validators.required]],
  });

  ngOnInit() {
    this.formUserCard.valueChanges.subscribe(() => {
      this.isFormSubmitedCard = this.formUserCard.valid;
    });
  }
  formatName(event: any) {
    let input = event.target.value;
    const formattedValue = input.replace(/[^a-zA-Z ]/g, '');
    this.formUserCard.patchValue(
      { name: formattedValue },
      { emitEvent: false }
    );
  }

  formatCardNumber(event: any) {
    let input = event.target.value;
    const numericValue = input.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{4})(?=\d)/g, '$1 ');
    this.formUserCard.patchValue(
      { card: formattedValue },
      { emitEvent: false }
    );
  }

  formatCvc(event: any) {
    let input = event.target.value;
    const numericValue = input.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{2})(?=\d{2})/g, '$1/');
    this.formUserCard.patchValue({ cvc: formattedValue }, { emitEvent: false });
  }

  formatExpirationDate(event: any) {
    let input = event.target.value;
    const numericValue = input.replace(/\D/g, '');
    const formattedValue = numericValue.replace(/(\d{2})(?=\d{2})/g, '$1/');
    this.formUserCard.patchValue(
      { date: formattedValue },
      { emitEvent: false }
    );
  }
}
