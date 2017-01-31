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
                        this.clients = []
                       for (let i = 0; i < clients.length; i++) {
                           this.clients[i] = new Client();
                           this.clients[i].id = clients[i].id;
                           this.clients[i].name = clients[i].name;
                           this.clients[i].surname = clients[i].surname;
                           this.clients[i].patronymic = clients[i].patronymic;
                           this.clients[i].address = clients[i].address;
                       }
                     } );
  }

  saveClient(data) {
    let client: Client = {
      name: data[0],
      surname: data[1],
      patronymic: data[2],
      address: data[3]
    }


    this.clientService.save(client)
      .subscribe(response => {
        this.clients.push(client);
      });
  }

  deleteClient(id) {
    this.clientService.delete(id)
      .subscribe(response => {
        for(let i = 0; i < this.clients.length; i++) {
          if (this.clients[i].id === id) {
            this.clients.splice(i, 1);
        }
      }
    });
  }

  updateClient(data) {
    let client: Client = {
      id: data[0],
      name: data[1],
      surname: data[2],
      patronymic: data[3],
      address: data[4]
    }

    this.clientService.update(client)
      .subscribe(response => {
        for(let i = 0; i < this.clients.length; i++) {
          if(client.id === this.clients[i].id) {
            this.clients[i].name = client.name;
            this.clients[i].surname = client.surname;
            this.clients[i].patronymic = client.patronymic;
            this.clients[i].address = client.address;
          }
        }
      })
  }

}
