import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChannelCreation } from '../../models/ChannelCreation.model';
import { ChannelService } from '../../services/channel.service';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-channel',
  standalone: true,
  imports: [FormsModule, CommonModule, NgbModule],
  templateUrl: './add-channel.component.html',
  styleUrl: './add-channel.component.css'
})
export class AddChannelComponent {

  newChannel : ChannelCreation = {
    id:1,
    name : "",
    creatorUsername:this.userService.userConnect.username
  };

  errorCreateChannel : string = ""

  constructor(public channelService : ChannelService, public userService : UserService){}

  onSubmit(){
    console.log("formulaire envoyé")
    console.log(this.newChannel)
    if(this.newChannel.name == "Général"){
      this.errorCreateChannel = "Vous ne pouvez pas créer 2 channels Général"
      return
    }
    this.channelService.postChannel(this.newChannel).subscribe(
      (res) => {
        console.log("channel posté")
        console.log(res)
        this.channelService.getAllChannels(this.userService.userConnect.username)
        this.newChannel.name = ""
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
