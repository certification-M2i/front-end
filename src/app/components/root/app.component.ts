import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { ListChannelComponent } from '../list-channel/list-channel.component';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { UserService } from '../../services/user.service';
import {PageMessageComponent} from "../page-message/page-message.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, ListChannelComponent, AddChannelComponent, AuthentificationComponent, CommonModule, PageMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';

  constructor(public userService : UserService){

  }
}
