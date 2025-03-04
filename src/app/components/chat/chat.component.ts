import { Component, Input } from '@angular/core';
import { MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { Chat } from 'src/app/models/chat';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [NgxSkeletonLoaderModule, MarkdownModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.sass',
  providers: [provideMarkdown()],
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
