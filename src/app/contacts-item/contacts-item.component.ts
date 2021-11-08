import {
  Component,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-contacts-item',
  template: `
    {{runChangeDetection}}
    <button (click)="addItems()">Add</button>
    <span *ngFor="let item of items">{{item}}</span>`,
})
export class ContactsItemComponent  {
  @Input() name: string | null = null

  public items: string[] = [];

  get runChangeDetection() {
    console.log(`\x1B[34mChecking the ContactsItemComponent ${this.name}`);
    return this.name;
  }

  constructor() {
  }

  addItems() {
    this.items.push(this.items.length.toString())
  }

}
