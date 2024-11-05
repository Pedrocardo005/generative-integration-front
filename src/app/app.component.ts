import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
})
export class AppComponent {
  title = 'generative-integration';
  chats: Chat[] = [
    {
      text_input: 'Entrada',
      gemini_output: 'Saída',
    },
    {
      text_input: 'Entrada',
      gemini_output: 'Saída',
    },
    {
      text_input: 'Entrada',
      gemini_output: 'Saída',
    },
    {
      text_input: 'Entrada',
      gemini_output: '',
    },
  ];
}
