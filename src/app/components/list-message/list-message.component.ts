import {Component, OnInit, ViewChild, ElementRef, AfterViewChecked} from '@angular/core';
import {MessageService} from "../../services/message.service";
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
export class ListMessageComponent implements OnInit, AfterViewChecked  {

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(public channelService: ChannelService, public messageService: MessageService) {}
  
  ngAfterViewChecked(): void {
      this.scrollBottomPage();
  }

  ngOnInit(): void {
    console.log("init list message")
    console.log(this.channelService.getChannelId())
    this.channelService.getMessageInChannel(this.channelService.getChannelId())
  }

  private scrollBottomPage(): void {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
  }

}
