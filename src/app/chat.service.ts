import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Chat } from './models/chat';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url = 'http://localhost:8000/gemini/chat/';

  constructor(private http: HttpClient) {}

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }

  createChat(textInput: string): Observable<Chat> {
    return this.http
      .post<Chat>(this.url, { text: textInput })
      .pipe(catchError(this.handleError));
  }

  getAllChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(this.url).pipe(catchError(this.handleError));
  }
}
