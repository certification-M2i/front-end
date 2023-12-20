import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChannelCreation } from '../../models/ChannelCreation.model';
import { ChannelService } from '../../services/channel.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-channel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-channel.component.html',
  styleUrl: './add-channel.component.css'
})
export class AddChannelComponent {

  newChannel : ChannelCreation = {
    id:1,
    name : "",
    creatorUsername:this.userService.userConnect.username
  };

  constructor(public channelService : ChannelService, public userService : UserService){}

  onSubmit(){
    console.log("formulaire envoyé")
    console.log(this.newChannel)
    this.channelService.postChannel(this.newChannel).subscribe(
      (res) => {
        console.log("channel posté")
        console.log(res)
        this.channelService.getAllChannels(this.userService.userConnect.username)
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
