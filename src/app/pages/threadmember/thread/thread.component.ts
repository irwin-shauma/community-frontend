import { Component } from '@angular/core';
import { FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-thread-member',
  templateUrl: './thread.component.html',
  styleUrls: ['./../thread.style.css'],
})
export class ThreadMemberComponent {
  polling: boolean = false;

  pollingArray = new FormArray([new FormControl('', Validators.required)]);

  addInputControl() {
    this.pollingArray.push(new FormControl('', Validators.required));
  }
  removeInputControl(idx: number) {
    this.pollingArray.removeAt(idx);
  }

  exitPolling() {
    this.polling = false;
  }

  clickPolling() {
    this.polling = true;
    this.pollingArray.reset();
  }
}
