import { Component } from '@angular/core';
import { CustomserviceService } from '../customservice.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title = 'To Do LIst';
  background_image = 'pix/background_img.jpg';
  constructor(private CustomserviceService: CustomserviceService) {}


  status: any[] = this.CustomserviceService.status;
  todolistarray: any[] = this.CustomserviceService.todolistarray;
  // console.log(this.CustomserviceService);
  todo_savethevalue(data1: any, data2: any) {
    this.CustomserviceService.savethevalue(data1, data2);
  }

  todo_deletetask(taskid: number) {
    this.CustomserviceService.deletetask(taskid);
  }

}
