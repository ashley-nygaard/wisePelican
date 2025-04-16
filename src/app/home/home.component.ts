import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListViewComponent} from '../list-view/list-view.component';
import {User} from '../user';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ListViewComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true
})
export class HomeComponent implements OnInit{
 userList: User[] = [];
 userService: UsersService = inject(UsersService);
 filteredUserList: User[] = [];
 isAdmin: boolean = false;

 constructor() {
   this.userService.getRecords('Users')
     .subscribe({
       next: (data) => {
        this.filteredUserList = data;
        this.userList = data;
      },
       error: (err) => {(alert('An error occurred'));}
     });

   this.filteredUserList = this.userList;
 }

 isAdminSelect(eve: Event) {
   // @ts-ignore
   this.isAdmin = eve.target.checked;
   console.log(this.isAdmin);
 }

 filterUsers(text: string) {
   if(!text) {
     this.filteredUserList = this.userList;
     return;
   }
   this.userService.getUser('Users', text)
     .subscribe(data => {
       this.filteredUserList = data;
     });

 }

  onCreditsUpdated(userId: number, newCredits: number) {
    const user = this.filteredUserList.find(u => u.id === userId);
    if (user) {
      user.credits = newCredits;
      this.updateRecord(userId, newCredits);
      console.log(`User ${user.name}'s credits updated to ${newCredits}`);
    }
  }

 updateRecord(userId: number, credits: number) {
   this.userService.findUserThenUpdate(userId, credits);
 }

 clearSearch(filter: HTMLInputElement) {
    filter.value = ""
    this.filteredUserList = this.userList;
 }

 ngOnInit() :void {
   this.userService.getRecords('Users')
     .subscribe(data => {
       this.filteredUserList = data;
     });
 }
}
