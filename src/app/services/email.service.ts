import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../models/email';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(
    private http: HttpClient
  ) { }

  private apikey = environment.supabaseConfig.apikey;
  private auth = 'Bearer: ' + this.apikey;
  private baseUrl = environment.supabaseConfig.baseUrl + 'Emails?';

  public getGetInboxEmails(): Observable<Email[]> {
    const options = {
      headers: {
        Authorization: this.auth,
        apikey: this.apikey,
      },
    };
    return this.http.get<Email[]>( this.baseUrl + "select=*&folder=eq.inbox", options);
  }

  public getGetSentEmails(): Observable<Email[]> {
    const options = {
      headers: {
        Authorization: this.auth,
        apikey: this.apikey,
      },
    };
    return this.http.get<Email[]>(this.baseUrl + "select=*&folder=eq.sent", options);
  }
}
