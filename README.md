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
#### in child.component.ts...
```javascript
import { Component..., Input } from '@angular/core';
...
export class ChildComponent {
  @Input() childItemList: Item[];
}
```
#### in parent.component.html...
```html
<app-item-list [childItemList]="itemList"></app-item-list>
```
