import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  editingTask: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void { this.loadTasks(); }

  loadTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => this.tasks = data,
      error: (err) => console.error(err)
    });
  }

  startEdit(task: Task): void { this.editingTask = { ...task }; }
  cancelEdit(): void { this.editingTask = null; }

  saveEdit(): void {
    if (!this.editingTask?.id) return;
    this.taskService.updateTask(this.editingTask.id, this.editingTask).subscribe({
      next: () => { this.editingTask = null; this.loadTasks(); },
      error: (err) => console.error(err)
    });
  }

  deleteTask(id: number): void {
    if (!confirm('Delete this task?')) return;
    this.taskService.deleteTask(id).subscribe({
      next: () => this.loadTasks(),
      error: (err) => console.error(err)
    });
  }
}
