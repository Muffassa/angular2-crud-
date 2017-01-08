import { Component, OnInit } from '@angular/core';
import { Worker } from './Worker';
import { WorkerService } from '../worker.service';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

  workers: Worker[];

  constructor(private workerService: WorkerService) {
   }

  ngOnInit() {
    this.workerService.getData()
                     .subscribe( workers => {
                       this.workers = workers;
                     } );
  }

  saveWorker(workerData) {
    let worker: Worker = {
      name: workerData[0],
      surname: workerData[1],
      patronymic: workerData[2]
    }


    this.workerService.save(worker)
      .subscribe(response => {
        this.workers.push(worker);
      });
  }

  deleteWorker(id) {
    this.workerService.delete(id)
      .subscribe(response => {
        for(let i = 0; i < this.workers.length; i++) {
          if (this.workers[i].id === id) {
            this.workers.splice(i, 1);
        }
      }
    });
  }

  updateWorker(data) {
    let worker: Worker = {
      id: data[0],
      name: data[1],
      surname: data[2],
      patronymic: data[3]
    }

    this.workerService.update(worker)
      .subscribe(response => {
        for(let i = 0; i < this.workers.length; i++) {
          if(worker.id === this.workers[i].id) {
            this.workers[i].name = worker.name;
            this.workers[i].surname = worker.surname;
            this.workers[i].patronymic = worker.patronymic;
          }
        }
      })
  }


}
