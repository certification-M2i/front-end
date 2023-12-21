import { Component, OnInit } from '@angular/core';
import { GetChannel } from '../../models/GetChannel.model';
import { CommonModule } from '@angular/common';
import { ChannelService } from '../../services/channel.service';
import { UserService } from '../../services/user.service';
import { FormsModule } from '@angular/forms';
import { UpdateChannel } from '../../models/UpdateChannel.model';

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
    this.channelService.setDefaultChannel();
    this.channelService.getAllChannels(this.userService.userConnect.username);
    this.channelService.ordonnerParOrdreCroissant();
  }

  evenement(channel : GetChannel) {
    console.log("événement click sur channel OK");
    console.log("avec l'id " + channel.id)
    this.channelService.setChannelId(channel.id)
    console.log(this.channelService.getChannelId())
    this.channelService.getMessageInChannel(channel.id)
  }


  editingChannel: string | null = null;

  editingIndex: number | null = null;

  startEditing(index: number) {
      this.editingIndex = index;
  }

  saveChanges(channel: GetChannel) {
      if (this.editingIndex !== null) {
        let updateChannel : UpdateChannel = {
          id : channel.id,
          newName : channel.name
        }
        this.channelService.updateChannel(updateChannel).subscribe(
          (response) => {
            console.log("update channel OK");
            console.log(response);
          },
          (error) => {
            console.log("update channel KO");
            console.log(error);
          }
        )
        this.editingIndex = null;
      }
  }

  deleteChannel(id : number){
    this.channelService.deleteChannel(id).subscribe(
        (response) => {
          console.log("delete channel OK");
          console.log(response);
          this.channelService.getAllChannels(this.userService.userConnect.username);
        },
        (error) => {
          console.log("delete channel KO");
          console.log(error);
        }
      )
      this.editingIndex = null;
  }

  cancelEditing() {
      this.editingIndex = null;
  }
}
