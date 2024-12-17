import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  title = 'generative-integration';
  chats: Chat[] = [];

  inputDisabled = false;
  inputValue = '';

  constructor(public chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getAllChats().subscribe((chats) => {
      this.chats = chats;
      setTimeout(() => {
        this.scrollToBottom();
      }, 2000);
    });
  }

  sendQuestion() {
    const voidChat: Chat = {
      gemini_output: '',
      text_input: '',
    };

    this.chats.push(voidChat);
    this.inputDisabled = true;

    this.chatService.createChat(this.inputValue).subscribe({
      next: (chat) => {
        this.chats.pop();
        this.inputDisabled = false;
        this.inputValue = '';
        this.chats.push(chat);
      },
      error: () => {
        this.chats.pop();
        this.inputDisabled = false;
        this.inputValue = '';
      },
    });
  }

  scrollToBottom(): void {
    const element = this.scrollContainer.nativeElement;
    element.scrollTop = element.scrollHeight; // Move a rolagem para o fim
  }
}
