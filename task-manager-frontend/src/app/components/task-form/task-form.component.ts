import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit {
  task: Task = { title: '', description: '', completed: false };
  isEditMode = false;
  taskId: number | null = null;
  message = '';
  isError = false;
  isLoading = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.taskId = +id;
      this.taskService.getTask(this.taskId).subscribe({
        next: (data) => this.task = data,
        error: () => { this.message = 'Task not found.'; this.isError = true; }
      });
    }
  }

  onSubmit(): void {
    if (!this.task.title.trim()) {
      this.message = 'Title is required.';
      this.isError = true;
      return;
    }
    this.isLoading = true;
    this.message = '';
    if (this.isEditMode && this.taskId) {
      this.taskService.updateTask(this.taskId, this.task).subscribe({
        next: () => this.router.navigate(['/tasks']),
        error: () => { this.message = 'Failed to update task.'; this.isError = true; this.isLoading = false; }
      });
    } else {
      this.taskService.createTask(this.task).subscribe({
        next: () => this.router.navigate(['/tasks']),
        error: () => { this.message = 'Failed to create task.'; this.isError = true; this.isLoading = false; }
      });
    }
  }
}
