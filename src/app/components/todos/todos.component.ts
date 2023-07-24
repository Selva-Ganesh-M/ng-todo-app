import { Component } from '@angular/core';
import { MCTodo } from 'src/app/models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos: MCTodo[] = [];
  constructor() {
    console.log('constructor ran');
  }

  ngOnInit(): void {
    console.log('ngOnInit ran');
    this.todos = [
      {
        completed: false,
        content: 'First Todo',
      },
      {
        completed: true,
        content: 'Second Todo',
      },
    ];
  }

  toggleDone(id: number): void {
    console.log(`${id} is toggled`);

    this.todos = this.todos.map((todo, index) => {
      if (id === index) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }
}
