import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/interfaces/api.interface';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items: Item[] = [];

  constructor(private _apiService: ApiService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this._apiService.getItems().subscribe(data => {
      this.items = [];
      data.forEach((element:any) => {
        this.items.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
    });
  }

}
