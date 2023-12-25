import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  private showAddTask: boolean = false;
  // private showUpdateTask: boolean = false;
  private subject: Subject<boolean> = new Subject<boolean>();

  constructor() {}

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle(): Observable<boolean> {
    return this.subject.asObservable();
  }

  /* toggleUpdateTask(): void {
    this.showUpdateTask = !this.showUpdateTask;
    this.subject.next(this.showUpdateTask);
  } */

  /*   onToggleReminder(): Observable<boolean> {
    return this.subject.asObservable();
  } */
}
