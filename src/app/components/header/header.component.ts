import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChannelService } from '../../services/channel.service';
import { FormsModule } from '@angular/forms';
import { GetMessagesInChannel } from '../../models/GetMessagesInChannel.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public searchMessage : string = "";
  searchResults: GetMessagesInChannel[] = [];

  constructor(public userService : UserService, public channelService : ChannelService){}


  search(event: Event): void {
    const input = event.target as HTMLInputElement;
    if(input.value.length < 2){
      this.searchResults = [];
        return;
    }
    if (input) {
      this.searchResults = this.channelService.searchInMessageChannel(input.value);
    } else {
      this.searchResults = [];
    }
  }

}
