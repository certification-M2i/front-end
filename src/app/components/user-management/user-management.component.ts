import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/User.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.css'
})
export class UserManagementComponent {

  updateUser : User = {
    id : 1,
    username : ""
  }

  updateUserError : string = ''

  constructor(public userService : UserService){}

  onSubmit(){
    this.updateUser.id = this.userService.userConnect.id
    console.log(this.updateUser)
    if(this.updateUser.username === ""){
      this.updateUserError = "Le pseudo ne peut être vide"
      return;
    }
    if(this.updateUser.username === this.userService.userConnect.username){
      this.updateUserError = "Vous ne pouvez pas modifier avec le même pseudo"
      return;
    }

    if(this.userService.userList.find(user => user.username === this.updateUser.username)){
      this.updateUserError = "Vous ne pouvez pas modifier avec un pseudo déjà existant"
      return;
    }
    this.userService.updateUser(this.updateUser).subscribe(
      (res) => {
        console.log(res)
        this.updateUserError = "Pseudo modifié avec succès ! Rechargement dans 5 secondes";
        
        let countdown = 5;
        const intervalId = setInterval(() => {
          countdown -= 1;
          this.updateUserError = `Pseudo modifié avec succès ! Rechargement dans ${countdown} secondes`;
  
          if (countdown <= 0) {
            clearInterval(intervalId);
            location.reload();
          }
        }, 1000);
      })
  }
}
