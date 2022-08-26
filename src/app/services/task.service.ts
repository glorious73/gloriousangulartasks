import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Task } from '../models/Task';
import { TASKS } from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.apiUrl}/tasks`);  
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/tasks/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
