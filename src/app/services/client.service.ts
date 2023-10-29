import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  constructor(
    private http: HttpClient
  ) { }

  private apikey = environment.supabaseConfig.apikey;
  private auth = 'Bearer: ' + this.apikey;
  private baseUrl = environment.supabaseConfig.baseUrl + 'Clients?';

  public getGetAllClients(): Observable<Client[]> {
    const options = {
      headers: {
        Authorization: this.auth,
        apikey: this.apikey,
      },
    };
    return this.http.get<Client[]>( this.baseUrl + "select=*", options);
  }

  public getGetClientByName(): Observable<Client[]> {
    const options = {
      headers: {
        Authorization: this.auth,
        apikey: this.apikey,
      },
    };
    return this.http.get<Client[]>( this.baseUrl + "select=[clientName]", options);
  }
}
