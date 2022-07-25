import { Component } from '@angular/core';

@Component({
  selector: 'app-thread-member',
  templateUrl: './thread.component.html',
  styleUrls: ['./../thread.style.css'],
})
export class ThreadMemberComponent {
  blocked: boolean = true;

  blockedDocument: boolean = true;
}
