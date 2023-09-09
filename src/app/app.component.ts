import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  page: number = 0;

  ngOnInit(): void {

  }
  title = 'Multi-Purpose Component';
  apiSample=[
    {
      "id": 1,
      "displayData": [
        {
          "id": "img",
          "displayName": "Product Image",
          "value": "default"
        },
        {
          "id": "id",
          "displayName": "id",
          "value": "1"
        },
        {
          "id": "name",
          "displayName": "Product Name",
          "value": "Product 001"
        }
      ]
    },
    {
      "id": 2,
      "displayData": [
        {
          "id": "img",
          "displayName": "Product Image",
          "value": "default"
        },
        {
          "id": "id",
          "displayName": "id",
          "value": "2"
        },
        {
          "id": "name",
          "displayName": "Product Name",
          "value": "Product 002"
        }
      ]
    },
  ]

 

}
