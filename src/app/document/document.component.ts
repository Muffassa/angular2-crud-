import { Component, OnInit } from '@angular/core';
import { Document } from './Document';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  documents: Document[];

  constructor(private documentService: DocumentService) { }

  ngOnInit() {
    this.documentService.getData()
                     .subscribe( documents => {
                       this.documents = [];
                       for(let i = 0; i < documents.length; i++) {
                         this.documents[i] = new Document();
                         this.documents[i].id = documents[i].id;
                         this.documents[i].type = documents[i].document_type;
                         this.documents[i].caseNumber = documents[i].case_number;
                         this.documents[i].folderNumber = documents[i].folder_number;
                         this.documents[i].workerId = documents[i].worker_id;
                         this.documents[i].clientId = documents[i].client_id;
                         this.documents[i].closeStatus = documents[i].close_status;
                         this.documents[i].deadline = new Date(documents[i].deadline);
                       }
                     } );
  }

}
