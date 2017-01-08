import { Component, OnInit } from '@angular/core';
import { Client } from "./Client";
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getData()
                     .subscribe( clients => {
                       this.clients = clients;
                     } );
  }

}
