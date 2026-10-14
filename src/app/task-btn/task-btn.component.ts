import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-btn',
  templateUrl: './task-btn.component.html',
  styleUrls: ['./task-btn.component.scss'],
})
export class TaskBtnComponent implements OnInit {
  @Input() styles?: { [key: string]: string };
  @Input() label!: string;
  @Input() disabled = false;

  constructor() {}

  ngOnInit(): void {}
}
