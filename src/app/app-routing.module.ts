import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  {
    component: AddTaskComponent,
    path: 'add-task'
  },
  {
    component: TodoListComponent,
    path: ''
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
