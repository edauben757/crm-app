import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/client';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {
  public value = '2';
  public clientsDataGetAllClients!: Client[];
  public value1 = '1';

  constructor(
    private clientService: ClientService,
  ) {}

  ngOnInit() {
    // depending on implementation, data subscriptions might need to be unsubbed later
    this.clientService.getGetAllClients().subscribe(data => this.clientsDataGetAllClients = data);
  }
}
