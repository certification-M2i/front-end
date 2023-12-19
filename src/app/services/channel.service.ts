import { Injectable } from '@angular/core';
import { FetcherService } from './fetcher.service';
import { ChannelCreation } from '../models/ChannelCreation.model';
import { GetChannel } from '../models/GetChannel.model';
import { UpdateChannel } from '../models/UpdateChannel.model';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  constructor(private fetcher: FetcherService) { }

  channelList: GetChannel[] = [];

  getAllChannels() {
    this.fetcher.getChannels().subscribe((data) => {
      this.channelList = data;
    });
  }

  getChannel(id:number) {
    return this.fetcher.getChannelById(id);
  }

  getMessageInChannel(id:number) {
    return this.fetcher.getMessagesInChannel(id)
  }

  postChannel(channel: ChannelCreation) {
    return this.fetcher.postChannel(channel);
  }

  deleteChannel(id:number) {
    return this.fetcher.deleteChannel(id);
  }

  updateChannel(channel: UpdateChannel) {
    return this.fetcher.updateChannel(channel);
  }

  postUserInChannel(channel:ChannelCreation, user: User) {
    return this.fetcher.postUserInChannel(channel, user);
  }

  removeUserFromChannel(channel:ChannelCreation, user: User) {
    return this.fetcher.removeUserFromChannel(channel, user);
  }
}
