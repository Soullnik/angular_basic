import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, DoCheck,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-contacts-item',
  template: `
    {{runChangeDetection}}
    <button (click)="addItems()">Add</button>
    <span *ngFor="let item of items">{{item}}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsItemComponent implements OnInit,AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, DoCheck {
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

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('Изменение в Айтем', this.name)
  }

  ngAfterContentInit() {
    console.log('Иницилизирую контент Айтема', this.name)
  }

  ngAfterContentChecked() {
    console.log('Чекаю контент Айтема', this.name)
  }

  ngAfterViewInit() {
    console.log('Инициализирую Вьюшку Айтема', this.name)
  }

  ngAfterViewChecked() {
    console.log('Чекаю Вьюшку Айтема', this.name)
  }

}
