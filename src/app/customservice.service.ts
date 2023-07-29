import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomserviceService {

  constructor() { }

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

  initaialTotalValue = this.todolistarray.length;
  addtask(taskname:string, status: string) {
    this.initaialTotalValue++;
    var addval = {
      id: this.initaialTotalValue,
      tasks: taskname,
      completion_status: status
    };
    this.todolistarray.push(addval);
  }

  savethevalue(e:any, project: number) {
    var hello = this.todolistarray.findIndex( (item) => item.id === project);
    this.todolistarray[hello].completion_status = e.target.value;
  }

  deletetask(taskid: number) {
    var hello = this.todolistarray.findIndex( (item) => item.id === taskid);
    this.todolistarray.splice(hello, 1);
  }
}
