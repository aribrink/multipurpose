import { Component, Input, OnInit } from '@angular/core';
import { WebApiService } from '../services/web-api.service';
import { Customer } from '../models/customer.model';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.scss']
})
export class MultiComponent implements OnInit {
  @Input() backendRoute = '';
  @Input() headerTitle = '';
  @Input() displayType = '';
  // @Input() entityId = '';
  @Input() hiddenFields: string[] = [];
  @Input() displayOption = 'column-2';
  @Input() actionEdit: Boolean = false;
  @Input() actionAdd: Boolean = false;
  @Input() hideDisabledActions: Boolean = true;

  componentData: any[] | undefined;
  // itemsList: any[] | undefined;
  // itemDetails: any | undefined;

  config: any;

  constructor(private webApiService: WebApiService) { }

  ngOnInit(): void {
    // console.log(this.entityVisibleItems);
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
        this.componentData = this.filterDisplayDataBy(data, this.hiddenFields);
      })
  }

  // Helper Method to filter visible items
  filterDisplayDataBy(array1: any[], array2: string[]) {

    // We filter out display items depending the components entityVisibleItems
    array1?.forEach((item: any) => { item.displayData = item.displayData!.filter((displayItem: any) => !array2.includes(displayItem.id)) });

    return array1;
  }
}
