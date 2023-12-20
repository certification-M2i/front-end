import {Component} from '@angular/core';
import {AddMessageComponent} from "../add-message/add-message.component";
import {ListMessageComponent} from "../list-message/list-message.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-page-message',
  standalone: true,
  imports: [
    AddMessageComponent,
    ListMessageComponent,
  ],
  templateUrl: './page-message.component.html',
  styleUrl: './page-message.component.css'
})
export class PageMessageComponent {

}
