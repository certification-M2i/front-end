import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {


  newUser : User = {
    id: 0,
    username : "",
  };

  constructor(public userService : UserService){}



  onSubmit(){
    console.log("formulaire envoyé")
    console.log(this.newUser)
    this.userService.postUser(this.newUser)
    .subscribe(
      (response : any) => {
        console.log("post ok");
        console.log(response.username);
        this.userService.userConnect.username = response.username
      },
      (error) => {
        console.log("post erreur");
        console.log(error);
      }
    )
  }

}
