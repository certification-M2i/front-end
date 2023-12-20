import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ListChannelComponent } from '../list-channel/list-channel.component';
import { AddChannelComponent } from '../add-channel/add-channel.component';
import { AuthentificationComponent } from '../authentification/authentification.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, ListChannelComponent, AddChannelComponent, AuthentificationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';

  constructor(public userService : UserService){

  }
}
