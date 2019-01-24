# Taproom
## Angular Instructions
### Start Angular Development Server
```console
$ ng serve
$ ng serve -o (opens browser on launch)
$ ng serve --port NUMBER (launches development server at localhost:NUMBER)
```
### Making a new project
``` console
$ npm install -g angular/cli@1.6.5
$ ng new PROJECT
```
### Add a model
```console
Add app/models
Add app/models/NAME.model.ts
Add class definition in NAME.model.ts
```
### Add a component
```console
$ ng g c COMPONENT-NAME
```
### Display a list of items
```html
<ul>
  <li *ngFor="let item of childItemList">{{item.property}}</li>
</ul>
```
### Adding child component input
#### in child.component.ts
```javascript
import { Component..., Input } from '@angular/core';
...
export class ChildComponent {
  @Input() childItemList: Item[];
}
```
#### in parent.component.html
```html
<app-item-list [childItemList]="itemList"></app-item-list>
```

### Adding child component output
#### in child.component.ts
```javascript
import { Component..., Output } from '@angular/core';
...
export class ChildComponent {
  @Output() childEditItem = new EventEmitter();

  editItem(item: Item) {
    this.childEditItem.emit(item);
  }
}
```
#### in child.component.html
```html
<element (click)="editItem(item)">TEXT</element>
```
#### in parent.component.html
```html
<app-item-list (childEditItem)="editItem($event)"></app-item-list>
```
#### in parent.component.ts
```javascript
export class ParentComponent {
  editItem(item) {
    item.doSomething();
  }
}
```
### Adding a form to a component
#### in child.component.html
```html
<div>
  <label>Property 0</label>
  <input #property0>
  <label>Property 1</label>
  <input #property1>
  <button (click)="submitForm(property0.value, propery1.value); property0=''; property1='';">Submit</button>
</div>
```
#### in child.component.ts
```javascript
export class ChildComponent {
  @Output() addItem = new EventEmitter();

  submitForm(property0: string, property1: string) {
    let item: Item = new Item(property0, property1);
    this.addItem.emit(item);
  }
}
```
#### in parent.component.html
```html
<app-new-item (addItem)="addItem($event)"></app-new-item>
````
#### in parent.component.ts
```javascript
export class ParentComponent {
  addItem(item) {
    this.itemList.push(item);
  }
}
```
