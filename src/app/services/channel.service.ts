import {ElementRef, Injectable, ViewChild} from '@angular/core';
import { FetcherService } from './fetcher.service';
import { ChannelCreation } from '../models/ChannelCreation.model';
import { GetChannel } from '../models/GetChannel.model';
import { UpdateChannel } from '../models/UpdateChannel.model';
import { User } from '../models/User.model';
import { GetMessagesInChannel } from '../models/GetMessagesInChannel.model';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private channelId : number = 0;

  public messagesInChannel : GetMessagesInChannel[] = []

  constructor(private fetcher: FetcherService) { }

  channelList: GetChannel[] = [];



  setChannelId(id : number){
    this.channelId = id;
  }

  getChannelId(){
      return this.channelId;
  }

  getAllChannels(username : string) {
    this.fetcher.getChannels(username).subscribe((data) => {
      console.log(data)
      this.channelList = data;
      this.ordonnerParOrdreCroissant();
    });
  }

  getChannel(id:number) {
    return this.fetcher.getChannelById(id);
  }

  getMessageInChannel(id:number) {
    return this.fetcher.getMessagesInChannel(id).subscribe((data) => {
      console.log('Messages triés :', this.messagesInChannel);
      this.messagesInChannel = data.sort((a, b) => a.id - b.id);
    });
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



  searchInMessageChannel(search:string) : GetMessagesInChannel[] {
    return this.messagesInChannel.filter(message => 
      message.content.toLocaleLowerCase()
      .includes(search.toLocaleLowerCase()))
    }

  channelListFiltre: GetChannel[] = [];

  ordonnerParOrdreCroissant() {
    this.channelListFiltre = this.channelList.sort((a, b) => a.name.localeCompare(b.name));
  }
}

