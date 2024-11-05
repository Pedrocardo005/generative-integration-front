import { Component, Input } from '@angular/core';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgxSkeletonLoaderModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.sass',
})
export class ChatComponent {
  @Input()
  chat: Chat;

  constructor() {
    this.chat = {
      text_input: '',
      gemini_output: '',
    };
  }
}
