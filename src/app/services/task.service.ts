import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'
import { Task } from '../Task'
import { TASKS } from '../mock-tasks'


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  //call a method called getTasks
  // this makes it an observable
  getTasks(): Observable<Task[]> {
    const tasks = of(TASKS);
    return tasks
  }
}
