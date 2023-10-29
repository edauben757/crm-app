import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  public clientsDataGetClientByName!: Client[];

  constructor(
    private clientsDataService: ClientService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.clientsDataService.getGetClientByName().subscribe(data => this.clientsDataGetClientByName = data);
  }
}
