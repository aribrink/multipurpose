import { Component, Input, OnInit } from '@angular/core';
import { WebApiService } from '../services/web-api.service';
import { DataItem } from '../models/data-item.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss']
})

export class MultiComponent implements OnInit {
  @Input() backendRoute = '';
  @Input() headerTitle = '';
  @Input() displayType = '';
  @Input() hiddenFields: string[] = [];
  @Input() displayOption = '';
  @Input() actionEdit: Boolean = false;
  @Input() actionAdd: Boolean = false;
  @Input() hideDisabledActions: Boolean = true;

  componentData: DataItem[] = [];
  originalData: string = "";
  config: any;

  testIds: boolean = false;

  constructor(private webApiService: WebApiService) { }

  ngOnInit(): void {
    this.config = {
      backendRoute: this.backendRoute,
      headerTitle: this.headerTitle,
      displayType: this.displayType,
      displayOption: this.displayOption,
      hiddenFields: this.hiddenFields,
      actions: {
        hideDisabledActions: this.hideDisabledActions,
        add: this.actionAdd,
        edit: this.actionEdit
      }
    }
    this.loadData(this.backendRoute);
  }

  loadData(endpoint: string) {
    this.webApiService
      .loadData(endpoint)
      .subscribe((data) => {
        this.originalData = JSON.stringify(data);
        this.componentData = this.filterDisplayDataBy(data, this.hiddenFields);
      })
  }

  // **********************
  // Helper Methods
  // **********************
  filterDisplayDataBy(array1: DataItem[], array2: string[]) {

    // We filter out display items depending the components entityVisibleItems
    array1?.forEach((item: any) => { item.displayData = item.displayData!.filter((displayItem: any) => !array2.includes(displayItem.id)) });

    return array1;
  }

  toggle(item: string) {
    if (this.hiddenFields.includes(item)) {
      this.testIds = false;
      this.hiddenFields = this.hiddenFields.filter(e => e !== item);
    }
    else {
      this.testIds = true;
      this.hiddenFields.push(item);
    }

    this.config.hiddenFields = this.hiddenFields;
    let data = JSON.parse(this.originalData);
    this.componentData = this.filterDisplayDataBy(data, this.hiddenFields);

  }

}
