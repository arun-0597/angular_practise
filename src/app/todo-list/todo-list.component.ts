import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CustomserviceService } from '../customservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title = 'To Do LIst';
  background_image = 'pix/background_img.jpg';
  new_var = 'hello world';
  arun = 1;
  constructor(private CustomserviceService: CustomserviceService) {}

  @Input() bgimg: string = '';

  @Output() messageEvent = new EventEmitter<number>();

  status: any[] = this.CustomserviceService.status;
  todolistarray: any[] = this.CustomserviceService.todolistarray;
  todo_savethevalue(data1: any, data2: any) {
    this.CustomserviceService.savethevalue(data1, data2);
  }

  todo_deletetask(taskid: number) {
    this.CustomserviceService.deletetask(taskid);
    this.messageEvent.emit(taskid);
  }

}
