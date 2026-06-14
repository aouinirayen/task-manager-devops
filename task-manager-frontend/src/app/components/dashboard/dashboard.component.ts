import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];

  get total()     { return this.tasks.length; }
  get completed() { return this.tasks.filter(t => t.completed).length; }
  get pending()   { return this.tasks.filter(t => !t.completed).length; }
  get rate()      { return this.total > 0 ? Math.round((this.completed / this.total) * 100) : 0; }

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error(err)
    });
  }
}
