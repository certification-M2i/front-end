import { Component } from '@angular/core';
import {MessageService} from "../../services/message.service";
import {MessagePost} from "../../models/MessagePost.model";
import {UserService} from "../../services/user.service";
import {FormsModule} from "@angular/forms";
import {ChannelService} from "../../services/channel.service";

@Component({
  selector: 'app-add-message',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-message.component.html',
  styleUrl: './add-message.component.css'
})
export class AddMessageComponent {

  newMessage: MessagePost = {
    id:1,
  content : "",
  sendingDate : "",
  idUser : this.userService.userConnect.id,
  idChannel : 0,
}

  constructor(public messageService:MessageService,public userService:UserService, public channelService:ChannelService) {}

  onSubmit(){
    console.log("message envoyé")
    this.newMessage.idChannel= this.channelService.getChannelId()
    console.log(this.newMessage)
    this.messageService.postMessage(this.newMessage).subscribe(
      (res)=> {
        console.log("message posté");
        console.log(res);
        this.channelService.getMessageInChannel(this.newMessage.idChannel);
        this.newMessage.content = "";
      },
      (err)=>{
        console.log(err)
      }
    )
  }
}
