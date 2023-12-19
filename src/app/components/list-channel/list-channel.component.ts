import { Component, OnInit } from '@angular/core';
import { GetChannel } from '../../models/GetChannel.model';
import { CommonModule } from '@angular/common';
import { ChannelService } from '../../services/channel.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-channel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-channel.component.html',
  styleUrl: './list-channel.component.css'
})
export class ListChannelComponent implements OnInit {

  constructor(public channelService : ChannelService, public userService : UserService) { }

  ngOnInit(): void {
    this.channelService.getAllChannels(this.userService.userConnect.username)
  }

  evenement(channel : GetChannel) {
    console.log("événement click sur channel OK");
    console.log("avec l'id " + channel.id)
  }

}
