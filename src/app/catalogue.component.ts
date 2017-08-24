import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  @Input()
  itemList: string[] = [];

  @Output()
  onDeal: EventEmitter<string> = new EventEmitter<string>();

  index = 0;
  currentItem: string;

  constructor() { }

  ngOnInit() {
    console.log('itemList = ', this.itemList);
    this.currentItem = this.itemList[this.index];
  }

  deal(): void {
    console.log('firing event: ', this.currentItem);
    this.onDeal.emit(this.currentItem);
  }

  up(): void {
    this.index++;
    if (this.index < this.itemList.length) {
      this.currentItem = this.itemList[this.index];
    } else {
      this.index--;
    }
  }

  down(): void {
    this.index--;
    if (this.index >= 0) {
      this.currentItem = this.itemList[this.index];
    } else {
      this.index++;
    }
  }

}
