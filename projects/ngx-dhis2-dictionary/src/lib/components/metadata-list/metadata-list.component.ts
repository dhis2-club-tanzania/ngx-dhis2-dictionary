import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-metadata-list',
  templateUrl: './metadata-list.component.html',
  styleUrls: ['./metadata-list.component.css']
})
export class MetadataListComponent implements OnInit {

  @Input() metadataIdentifiers: any;
  @Output() selectedMetadataId = new EventEmitter<string>()
  activeMetadataType: string = 'indicator';
  constructor() {
  }

  ngOnInit() {
  }

  selectedMetadataIdentifier(e) {
    this.selectedMetadataId.emit(e)
  }

  getActiveMetadataType(type) {
    this.activeMetadataType = type;
  }
}
