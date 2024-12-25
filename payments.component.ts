import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css'],
})
export class PaymentsComponent {
  onPayWithCard() {
    alert('Processing Card Payment...');
  }

  onPayWithPayPal() {
    window.location.href = 'https://www.paypal.com/signin'; // Redirect to PayPal
  }
}
