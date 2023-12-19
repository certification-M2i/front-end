import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-authentification',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './authentification.component.html',
  styleUrl: './authentification.component.css'
})
export class AuthentificationComponent {

  newUser : User = {
    username : "",
  };

  onSubmit(){
    console.log("formulaire envoyé")
    console.log(this.newUser)
  }

}
