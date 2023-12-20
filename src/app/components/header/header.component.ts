import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChannelService } from '../../services/channel.service';
import { FormsModule } from '@angular/forms';
import { GetMessagesInChannel } from '../../models/GetMessagesInChannel.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public searchMessage : string = "";
  searchResults: GetMessagesInChannel[] = [];

  constructor(public userService : UserService, public channelService : ChannelService, public messageService : MessageService){}


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

  scrollToMessage(messageId: string) {
    this.messageService.redirectMessage = true
    const element = document.getElementById(messageId);
    console.log(messageId)
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

}
