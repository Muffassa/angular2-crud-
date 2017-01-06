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
  columns: any[] = [
    { name: 'Name' },
    { name: 'Surname' },
    { name: 'Patronymic' }
  ];
  isShownEditPopup: boolean;
  editableWorkerId: number;
  temp: any[];


  constructor(private workerService: WorkerService) {
   }

  ngOnInit() {
    this.workerService.getData()
                     .subscribe( workers => {
                       this.temp = [...workers];
                       this.workers = workers;
                     } );
  }

  saveWorker(name: String, surname: String, patronymic: String) {
    let worker: Worker = {
      name: name,
      surname: surname,
      patronymic: patronymic
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

  initEditableWorker(id) {
    this.editableWorkerId = id;
    this.toggleEditPopup();
  }

  toggleEditPopup() {
    this.isShownEditPopup = !this.isShownEditPopup;
  }

  updateWorker(name: string, surname: string, patronymic: string) {
    let worker: Worker = {
      id: this.editableWorkerId,
      name: name,
      surname: surname,
      patronymic: patronymic
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

    this.toggleEditPopup();
  }

  updateFilter(event, filter) {
      let val = event.target.value;

      // filter our data
      let temp = this.temp.filter(function(d) {
        return eval('d.'+ filter.toLowerCase() + '.indexOf(val) !== -1 || !val');
      });

      // update the rows
      this.workers = temp;
    }
}
