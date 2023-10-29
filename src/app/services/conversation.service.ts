import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conversation } from '../models/conversation';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConversationService {
  constructor(
    private http: HttpClient
  ) { }

  private apikey = environment.supabaseConfig.apikey;
  private auth = 'Bearer: ' + this.apikey;
  private baseUrl = environment.supabaseConfig.baseUrl + 'Conversations?';

  public getGetConversations(): Observable<Conversation[]> {
    const options = {
      headers: {
        Authorization: this.auth,
        apikey: this.apikey,
      },
    };
    return this.http.get<Conversation[]>(this.baseUrl + "select=*", options);
  }
}
