import { Component } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { BranchIo } from '@ionic-native/branch-io';
declare var RazorpayCheckout:any;
declare var branch:BranchIo;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

//constructor (private branch: BranchIo) {}

  payWithRazorpay() {
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: "INR", // your 3 letter currency code
      key: "rzp_live_gM2B9AtiieU4AC", // your Key Id from Razorpay dashboard
      amount: 100, // Payment amount in smallest denomiation e.g. cents for USD
      retry: {
      "enabled": true,
      "max_count": 4
      } ,
      name: 'Razorpay',
      prefill: {
        email: 'test@razorpay.com',
        contact: '9990009991',
        name: 'Razorpay'
      },
      theme: {
        color: '#F37254'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };

    var successCallback = function (payment_id) {
      alert('payment_id: ' + payment_id);
    };

    var cancelCallback = function (error) {
      alert(error.description + ' (Error ' + error.code + ')');
    };

    RazorpayCheckout.open(options, successCallback, cancelCallback);
  }
}
