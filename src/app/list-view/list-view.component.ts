import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

import {User} from '../user';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-list-view',
  imports: [
    FormsModule, CommonModule
  ],
  templateUrl: './list-view.component.html',
  standalone: true,
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {
  @Input() user!: User;
  @Output() creditsUpdated = new EventEmitter<number>();
  @Input() isAdmin: boolean = false; // default to false


  updateCredits() {
    this.creditsUpdated.emit(this.user.credits);
  }
}
