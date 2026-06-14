package com.taskmanager.task_manager_backend.service;

import com.taskmanager.task_manager_backend.entity.Task;
import com.taskmanager.task_manager_backend.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public List<Task> findAll() {
        return taskRepository.findAll();
    }

    public Task findById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public Task save(Task task) {
        return taskRepository.save(task);
    }

    public Task update(Long id, Task taskDetails) {
        Task task = taskRepository.findById(id).orElse(null);
        if (task == null) return null;

        task.setTitle(taskDetails.getTitle());
        task.setDescription(taskDetails.getDescription());
        task.setCompleted(taskDetails.isCompleted());

        return taskRepository.save(task);
    }

    public boolean delete(Long id) {
        if (!taskRepository.existsById(id)) return false;
        taskRepository.deleteById(id);
        return true;
    }
}
