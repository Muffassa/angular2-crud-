import { Component, Output, Input, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnChanges {

  @Input() tableData;
  @Output() tableDataSaved = new EventEmitter();
  @Output() tableDataDeleted = new EventEmitter();
  @Output() tableDataUpdated = new EventEmitter();
  @Output() tableDataChanged = new EventEmitter();
  dataProps: any[] = [];
  dataPropsValues: any[] = [];
  newDataValues: any[] = [];
  isShownEditPopup: boolean = false;
  temp: any[] = [];

  constructor() {
   }

  ngOnChanges(changes: SimpleChanges) {
    if(this.tableData != undefined && this.dataProps.length === 0 && this.temp.length === 0) {
      this.temp = [...this.tableData];
      let dataProps = Object.keys(this.tableData[0]);
      // For delete id and created date and changed date from headers
      dataProps.shift();
      this.dataProps = dataProps;
    }
  }


  saveData(data){
    this.tableDataSaved.emit(data);
  }

  deleteData(id) {
    this.tableDataDeleted.emit(id);
  }

  updateData(data) {
    this.tableDataUpdated.emit(data);
    this.toggleEditPopup();
  }

  toggleEditPopup() {
    this.isShownEditPopup = !this.isShownEditPopup;
  }

  updateFilter(event, filter) {
      let val = event.target.value;

      // filter our data
      let temp = this.temp.filter(function(d) {
        return eval('d.'+ filter + '.indexOf(val) !== -1 || !val');
      });

      // update the rows
      this.tableDataChanged.emit(temp);
  }

}
