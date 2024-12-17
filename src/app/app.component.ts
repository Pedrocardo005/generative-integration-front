import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ChatService } from './chat.service';
import { ChatComponent } from './components/chat/chat.component';
import { Chat } from './models/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    ChatComponent,
  ],
  providers: [ChatService],
})
export class AppComponent implements OnInit {
  title = 'generative-integration';
  chats: Chat[] = [];

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getAllChats().subscribe((chats) => (this.chats = chats));
  }

  sendQuestion(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.chatService.createChat(value).subscribe((chat) => {
      this.chats.push(chat);
    });
  }
}
