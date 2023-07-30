import { Component, ViewChild } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise';
  background_image = 'pix/background_img.jpg';

  @ViewChild(TodoListComponent) childcomponent: any = [];
  constructor() {}


  ngAfterViewInit(): void {
    console.log(this.childcomponent.title);
  }

  getEventTriggered($event: number) {
    console.log($event);
  }
}
