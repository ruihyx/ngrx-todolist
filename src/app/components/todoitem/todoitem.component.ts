import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';

@Component({
  selector: 'app-todoitem',
  templateUrl: './todoitem.component.html',
  styleUrls: ['./todoitem.component.css']
})
export class TodoitemComponent {
  @Input('item') todo!: Todo;
  @Output() emitId = new EventEmitter();

  deleteTodo(){
    this.emitId.emit(this.todo.id)
  }

}
