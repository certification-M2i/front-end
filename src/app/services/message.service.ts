import { Injectable } from '@angular/core';
import { FetcherService } from './fetcher.service';
import { MessageGet } from '../models/MessageGet.model';
import { MessagePost } from '../models/MessagePost.model';
import { calculateMatchWeight } from '../utils/utils';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

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

  searchMessages(searchTerm : string) {
    this.getAllMessages();
    
    const searchTermLower = searchTerm.toLowerCase();
    const results = this.messageList.map(message => ({
        ...message,
        weight: calculateMatchWeight(searchTermLower, message.content.toLowerCase())
    }));

    return results
        .sort((a, b) => b.weight - a.weight)
        .filter(item => item.weight > 0);
  }
}
