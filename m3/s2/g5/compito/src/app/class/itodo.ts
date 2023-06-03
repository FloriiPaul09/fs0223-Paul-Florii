import { Todo } from '../interfaces/todo';

export class Itodo implements Todo{
  id: number;
  title: string;
  completed: boolean;

  constructor(id: number, title: string, completed: boolean){
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}
