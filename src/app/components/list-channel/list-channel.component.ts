import { Component, OnInit } from '@angular/core';
import { GetChannel } from '../../models/GetChannel.model';
import { CommonModule } from '@angular/common';
import { ChannelService } from '../../services/channel.service';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-channel',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  editingChannel: string | null = null;

  editingIndex: number | null = null;

  startEditing(index: number) {
      this.editingIndex = index;
  }

  saveChanges(index: number, channel: GetChannel) {
      if (this.editingIndex !== null) {
          this.editingIndex = null;
      }
  }

  cancelEditing() {
      this.editingIndex = null;
  }
}
