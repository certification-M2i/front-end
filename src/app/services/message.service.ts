import { Injectable } from '@angular/core';
import { FetcherService } from './fetcher.service';
import { MessageGet } from '../models/MessageGet.model';
import { MessagePost } from '../models/MessagePost.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public redirectMessage : boolean = false;

  constructor(private fetcher: FetcherService) {
    this.getAllMessages();
   }

  messageList: MessageGet[] = [];

  
  getAllMessages() {
    this.fetcher.getMessages().subscribe((data) => {
      this.messageList = data;
    });
  }

  getMessage(id:number) {
    return this.fetcher.getMessageById(id);
  }

  postMessage(message: MessagePost) {
    return this.fetcher.postMessage(message);
  }
}
