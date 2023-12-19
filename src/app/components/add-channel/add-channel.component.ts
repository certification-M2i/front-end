import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChannelCreation } from '../../models/ChannelCreation.model';

@Component({
  selector: 'app-add-channel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-channel.component.html',
  styleUrl: './add-channel.component.css'
})
export class AddChannelComponent {

  newChannel : ChannelCreation = {
    name : "",
    creatorUsername:"moi"
  };

  onSubmit(){
    console.log("formulaire envoyé")
    console.log(this.newChannel)
  }

}
