import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {ContactsItemComponent} from "../contacts-item/contacts-item.component";

@Component({
  selector: 'app-contacts-list',
  template: `
    <h1>{{title}}</h1>
    {{runChangeDetection}}
    <h2>Contacts List of {{ company }}</h2>
    <div style="display: flex; flex-direction: column; gap: 10px">
      <ng-content></ng-content>
      <app-contacts-item [name]="'Jack'"></app-contacts-item>
    </div>

  `,
})
export class ContactsListComponent implements OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked, OnDestroy {
  constructor() {
    console.log('IamCONSTRUCTOR')
  }

  @Input() title: string | undefined
  get runChangeDetection() {
    console.log('\x1B[31mChecking the ContactsListComponent');
    return true;
  }

  company: string = 'Google Inc.'

  @ViewChild(ContactsItemComponent)
  vwCh: ContactsItemComponent | undefined
  @ContentChild(ContactsItemComponent)
  cntCh: ContactsItemComponent | undefined

  ngOnChanges(obj: SimpleChanges) {
    console.log(
      '1. OnChanges вызываеться первым и повторно при изменении @Input параметров. \nполучает обьект SimpleChange', obj,
      '\nЕсли входные свойства отсутствуют, то метод не будет вызван',
      '\nМетод видит любые свойства компонента')
  }

  ngOnInit() {
    console.log('2. OnInit, вызываеться вторым и только 1 раз, после иницилизации внутрених свойств \n', this.company)
  }

  ngDoCheck() {
    console.log('3/all. DoCheck, вызываеться при любых изменениях, перерисовках, евента в дереве компонентов\n', this.title)
  }

  ngAfterContentInit() {
    console.log('AfterContentInit, вызываеться после подгрузки контента между тегами компонента получеными в <ng-content>', this.cntCh)
    // console.log('Иницилизация контента Списка')
  }

  ngAfterContentChecked() {
    console.log('Проверка контента Списка')
  }

  ngAfterViewInit() {
    console.log('Иницилизация вью Списка', this.vwCh)
    // console.log('Иницилизация вью Списка')
  }

  ngAfterViewChecked() {
    console.log('Проверка вью Списка')
  }

  ngOnDestroy() {
    console.log('уничтожаем компонент')
  }

}
