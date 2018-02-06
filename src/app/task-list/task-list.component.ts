import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import {assign} from 'rxjs/util/assign';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tasks = [];
  task: Task = {
    name: '',
    value: 0,
    date_launch: '2018-10-05'
  } ;
  add() {
    let task = Object.assign({}, this.task);
    this.tasks.push(task);
  }
}
