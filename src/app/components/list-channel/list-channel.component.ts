import { Component } from '@angular/core';
import { GetChannel } from '../../models/GetChannel.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-channel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-channel.component.html',
  styleUrl: './list-channel.component.css'
})
export class ListChannelComponent {

  channel : GetChannel[] = [
    {
      id: 0,
      name: "general",
      dateCreation: "2023-12-19T14:09:25.797Z"
    },
    {
      id: 1,
      name: "test",
      dateCreation: "2023-12-19T14:09:25.797Z"
    },
    {
      id: 2,
      name: "channel2",
      dateCreation: "2023-12-19T14:09:25.797Z"
    },
    {
      id: 3,
      name: "hello",
      dateCreation: "2023-12-19T14:09:25.797Z"
    },
    {
      id: 4,
      name: "prout",
      dateCreation: "2023-12-19T14:09:25.797Z"
    },
  ]

  
  constructor() { }

  evenement(channel : GetChannel) {
    console.log("événement click sur channel OK");
    console.log("avec l'id " + channel.id)
  }

}
