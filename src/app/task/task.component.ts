import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Output() taskCompleted = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  markTaskComplete() {
    this.task.completed = !this.task.completed;
    if (this.task.completed) {
      this.taskCompleted.emit();
    }
  }
}
