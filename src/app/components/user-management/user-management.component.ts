import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User.model';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, NgbModule, CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {

  updateUser : User = {
    id : 1,
    username : ""
  }

  constructor(public userService : UserService){}

  onSubmit(){
    this.updateUser.id = this.userService.userConnect.id
    console.log(this.updateUser)
    this.userService.updateUser(this.updateUser).subscribe(
      (res) => {
        console.log(res)})
  }
}
