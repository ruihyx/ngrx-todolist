import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Todo } from 'src/app/interfaces/todo';
import * as TodoSelectors from '../../ngrx/todo.selectors'//import as a group
import * as TodoActions from '../../ngrx/todo.actions'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
form!: FormGroup;
todolist: Todo[] =[];
input!:string;

constructor(private fb: FormBuilder, private store: Store){}
ngOnInit(): void {
  this.form = this.fb.group({
    inputbox: [''],
  });

  this.store.select(TodoSelectors.getTodos).subscribe(todo =>{
    this.todolist = todo
  })
  
  this.store.dispatch(TodoActions.loadTodoList())
}

deleteTodo(id: number) {
  this.store.dispatch(TodoActions.deleteTodo({id}))
};


addTodo(){
  const newTodo: Todo = {
    userId: 1,
    id: this.todolist.length + 1,
    title: this.input,
    completed: false
  }
  
  this.store.dispatch(TodoActions.addTodo({todo: newTodo}))
  this.input = ''

}
}