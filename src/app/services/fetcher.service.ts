import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageGet } from '../models/MessageGet.model';
import { MessagePost } from '../models/MessagePost.model';
import { User } from '../models/User.model';
import { GetChannel } from '../models/GetChannel.model';
import { GetMessagesInChannel } from '../models/GetMessagesInChannel.model';
import { ChannelCreation } from '../models/ChannelCreation.model';
import { UpdateChannel } from '../models/UpdateChannel.model';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  constructor(private http: HttpClient) { }

  //***** Message *****/
  getMessages() {
    return this.http.get<MessageGet[]>("http://localhost:8080/api/messages");
  }

  getMessageById(id: number) {
    return this.http.get<MessageGet>("http://localhost:8080/api/messages/" + id);
  }

  postMessage(message: MessagePost) {
    return this.http.post("http://localhost:8080/api/messages", message);
  }

  //***** User *****/
  getUsers() {
    return this.http.get<User[]>("http://localhost:8080/api/users");
  }

  getUserById(id: number) {
    return this.http.get<User>("http://localhost:8080/api/users/" + id);
  }

  postUser(user: User) {
    return this.http.post("http://localhost:8080/api/users", user);
  }

  deleteUser(id: number) {
    return this.http.delete("http://localhost:8080/api/users/" + id);
  }

  updateUser(user: User) {
    return this.http.put(`http://localhost:8080/api/users/${user.id}?username=${user.username}`, "")
  }

  //***** Channel *****/
  getChannels(username : string) {
    return this.http.get<GetChannel[]>(`http://localhost:8080/api/channels?username=${username}`);
  }

  getChannelById(id: number) {
    return this.http.get<GetChannel>("http://localhost:8080/api/channels/" + id);
  }

  getMessagesInChannel(id: number) {
    return this.http.get<GetMessagesInChannel[]>("http://localhost:8080/api/channels/" + id + "/messages");
  }

  postChannel(channel: ChannelCreation) {
    return this.http.post("http://localhost:8080/api/channels", channel);
  }

  postUserInChannel(channel:ChannelCreation, user: User) {
    return this.http.post("http://localhost:8080/api/channels/" + channel.id + "/users/" + user.id, channel);
  }

  updateChannel(channel: UpdateChannel) {
    return this.http.patch("http://localhost:8080/api/channels/" + channel.id, channel)
  }

  deleteChannel(id: number) {
    return this.http.delete("http://localhost:8080/api/channels/" + id);
  }

  removeUserFromChannel(channel:ChannelCreation, user: User) {
    return this.http.delete("http://localhost:8080/api/channels/" + channel.id + "/users/" + user.id)
  }
}



