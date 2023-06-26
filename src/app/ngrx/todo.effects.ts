import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import * as TodoActions from './todo.actions'
import { HttpClient } from "@angular/common/http";
import { catchError, exhaustMap, map, mergeMap, of } from "rxjs";
import { Todo } from "../interfaces/todo";

@Injectable()
export class TodoEffects {
    private url = 'https://jsonplaceholder.typicode.com/todos'

    loadTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.loadTodoList),
            mergeMap(_ => {
                return this.http.get<Todo[]>(this.url).pipe(
                    map(todos => {
                        return TodoActions.loadTodosSuceess({ todos })

                    }),
                    catchError(err => {
                        return of(TodoActions.loadTodosFail({ err }))
                    })

                )
            })
        )
    })

    deleteTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.deleteTodo),
            exhaustMap( (todo)=> {
                const id = todo.id
                return this.http.delete<Todo[]>(this.url + "/" + todo.id).pipe(
                    map(_ => {
                        return TodoActions.deleteTodoSuccess({id: +(id)})

                    }),
                    catchError(err => {
                        return of(TodoActions.deleteTodoFail({ err }))
                    })

                )
            })
        )
    })

    addTodos$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(TodoActions.addTodo),
            exhaustMap( (action)=> {
                const newTodo = action.todo
                return this.http.post<Todo>(this.url, newTodo).pipe(
                    map( todo=> {
                        return TodoActions.addTodoSuceess({todo})

                    }),
                    catchError(err => {
                        return of(TodoActions.addTodoFail({ err }))
                    })

                )
            })
        )
    })
    constructor(private actions$: Actions, private http: HttpClient) { }

}