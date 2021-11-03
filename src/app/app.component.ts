import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    {{runChangeDetection}}
    <button (click)="onChangeTitle()">Change title</button>
    <button (click)="onEmptyChange()">Click</button>
    <app-contacts-list [title]="title">
      <app-contacts-item [name]="'Peter'"></app-contacts-item>
    </app-contacts-list>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  get runChangeDetection() {
    console.log('\x1B[31mAppComponent');
    return true;
  }
  public title = 'Managers'

  onChangeTitle() {
    this.title = 'Customer'
  }

  onEmptyChange() {
    console.log('empty Click')
  }
}
