import { Component } from '@angular/core';

export interface Task {
  title: string;
  priority: string;
  completed: boolean;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  tasktitle = (index: number, task: Task) => index + task.title;
  

  name = '';
  tasks: Task[] = [
    { title: 'Task 1', priority: 'High', completed: false },
    { title: 'Task 2', priority: 'Medium', completed: true },
    { title: 'Task 3', priority: 'Low', completed: false }
  ];

  ngOnInit(): void {
  }

  add(task: Task): void {
    this.tasks.push(task);
  }

  reset(): void {
    this.tasks = [];
  }

}
