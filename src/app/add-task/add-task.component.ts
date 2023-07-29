import { Component } from '@angular/core';
import { CustomserviceService } from '../customservice.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private CustomserviceService: CustomserviceService) {}

  status: any[] = this.CustomserviceService.status;

  submit_task(taskname: string, compstatus: string) {
    this.CustomserviceService.addtask(taskname, compstatus);
  }
}
