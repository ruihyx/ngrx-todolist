import { createAction, props } from "@ngrx/store";
import { Todo } from "../interfaces/todo";


export const loadTodoList = createAction("[todolist] todolist load")

export const loadTodosSuceess = createAction('[todolist] todolist loaded',props<{todos: Todo[]}>())

export const loadTodosFail = createAction('[todolist] todolist load failed',props<{err: string}>())

export const deleteTodo = createAction("[todolist] todolist delete", props<{ id: number }>())

export const deleteTodoSuccess = createAction("[todolist] todolist deleted", props<{ id: number }>())

export const deleteTodoFail = createAction('[todolist] todolist delete failed',props<{err: string}>())

export const addTodo = createAction("[todolist] todolist add",props<{todo: Todo}>())

export const addTodoSuceess = createAction('[todolist] todolist added',props<{todo: Todo}>())

export const addTodoFail = createAction('[todolist] todolist add failed',props<{err: string}>())




 


// export function deleteTodo(deleteTodo: any): import("@ngrx/store").ReducerTypes<import("../interfaces/todo").TodoState, readonly import("@ngrx/store").ActionCreator[]> {
//     throw new Error("Function not implemented.");
// }

