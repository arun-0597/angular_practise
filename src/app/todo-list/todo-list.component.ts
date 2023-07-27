import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title = 'To Do LIst';
  background_image = 'pix/background_img.jpg';

  status: any[] = [
    {
      'string': 'Not Started',
      'value': 'notstarted'
    },
    {
      'string': 'In Progress',
      'value': 'inprogress'
    },
    {
      'string': 'Completed',
      'value': 'completed'
    }
  ];

  todolistarray: any[] = [
    {
      id: 1,
      tasks: 'complete project A',
      completion_status: 'notstarted'
    },
    {
      id: 2,
      tasks: 'complete project B',
      completion_status: 'inprogress'
    },
    {
      id: 3,
      tasks: 'complete project C',
      completion_status: 'notstarted'
    },
    {
      id: 4,
      tasks: 'complete project D',
      completion_status: 'completed'
    },
  ];

  savethevalue(e:any, project: number) {
    let index: number = project - 1;
    this.todolistarray[index].completion_status = e.target.value;
  }

  deletetask(taskid: number) {
    let index: number = taskid - 1;
    var hello = this.todolistarray.findIndex( (item) => item.id === taskid);
    this.todolistarray.splice(hello, 1);
  }
}
