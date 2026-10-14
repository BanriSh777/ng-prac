import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  constructor() {}

  tasktitle = (index: number, task: Task) => index + task.title;

  tasks: Task[] = [
    { title: 'Task 1', priority: 'High', completed: false },
    { title: 'Task 2', priority: 'Medium', completed: true },
    { title: 'Task 3', priority: 'Low', completed: false },
  ];

  ngOnInit(): void {}

  add(title: string, priority: string, completed: boolean): void {
    this.tasks.push({ title, priority, completed });
  }

  reset(): void {
    this.tasks = [];
  }

  onTaskCompleted(task: Task) {
    alert('Task completed!' + task.title);
  }
}
