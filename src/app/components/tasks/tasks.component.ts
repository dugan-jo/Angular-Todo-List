import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../Task' // The interface (typescript)


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  
  tasks: Task[] = [];

  // the : define taskService as TaskService
  constructor(private taskService: TaskService) { }
  // void means the function does not return anything.  
  // ngOnInit(): void {
  // }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
}
