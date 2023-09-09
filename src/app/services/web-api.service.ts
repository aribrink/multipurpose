import { Injectable } from '@angular/core';
import { IWebApiService } from './webapi.service.interface';
import { HttpClient } from "@angular/common/http";
import { of } from 'rxjs/internal/observable/of';
import { Observable } from 'rxjs';
import { DataItem } from '../models/data-item.model';


@Injectable({
  providedIn: 'root'
})

export class WebApiService implements IWebApiService {

  constructor(private httpClient: HttpClient) { }

  loadData(endpoint: string): Observable<DataItem[]> {
    switch (endpoint) {
      case "/products":
        return of(this.demoDataList);        
      case "/customer/001":
        return of(this.demoDataSingle);        
      default:
        return of([]);
    }

  }

  demoDataList = [
      {
        id: 1,
        displayData: [
          {
            id: "img",
            displayName: "Product Image",
            value: "default"
          },
          {
            id: "id",
            displayName: "id",
            value: "1"
          },
          {
            id: "name",
            displayName: "Product Name",
            value: "Product 001"
          }
        ]
      },
      {
        id: 2,
        displayData: [
          {
            id: "img",
            displayName: "Product Image",
            value: "default"
          },
          {
            id: "id",
            displayName: "id",
            value: "2"
          },
          {
            id: "name",
            displayName: "Product Name",
            value: "Product 002"
          }
        ]
      },
      {
        id: 3,
        displayData: [
          {
            id: "img",
            displayName: "Product Image",
            value: "default"
          },
          {
            id: "id",
            displayName: "id",
            value: "3"
          },
          {
            id: "name",
            displayName: "Product Name",
            value: "Product 003"
          }
        ]
      }
    ];

  demoDataSingle = [
    {
      id: 1,
      displayData: [
        {
          id: "id",
          displayName: "id",
          value: "1"
        },
        {
          id: "first",
          displayName: "First Name",
          value: "Aris"
        },
        {
          id: "last",
          displayName: "Last Name",
          value: "Brink"
        },
        {
          id: "street",
          displayName: "Street",
          value: "Sokratous"
        },
        {
          id: "streetnum",
          displayName: "Street num",
          value: "39"
        },
        {
          id: "city",
          displayName: "City",
          value: "Athens"
        },
        {
          id: "zip",
          displayName: "Zip",
          value: "152 32"
        }
      ]
    }]
}
