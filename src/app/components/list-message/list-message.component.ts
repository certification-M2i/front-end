import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../services/message.service";
import {UserService} from "../../services/user.service";
import {NgForOf} from "@angular/common";
import {ChannelService} from "../../services/channel.service";

@Component({
  selector: 'app-list-message',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './list-message.component.html',
  styleUrl: './list-message.component.css'
})
export class ListMessageComponent implements OnInit{

  constructor(public channelService:ChannelService, public messageService:MessageService) {}

  ngOnInit():void{
    this.channelService.getMessageInChannel(this.channelService.getChannelId());
  }

}
