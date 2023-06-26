import { createReducer, on } from "@ngrx/store";
import { TodoState } from "../interfaces/todo";
import * as TodoActions from"../ngrx/todo.actions"

const todoState: TodoState ={
    todolist:[],
    err:''
}

export const todoReducer = createReducer(todoState,
    on(TodoActions.loadTodosSuceess,(state,{todos}) => {
        return {
            ...state,
            todolist:todos
        }
    }),
    on(TodoActions.loadTodosFail,(state,{err})=>{
        return{
            ...state,
            err
        }
    } ),
    on(TodoActions.deleteTodoSuccess,(state,{id}) =>{
        return{
            ...state,
            todolist:state.todolist.filter((item) => item.id !== id)
        }
    }),
    on(TodoActions.deleteTodoFail,(state,{err})=>{
        return{
            ...state,
            err
        }
    }),
    on(TodoActions.addTodoSuceess,(state,{todo}) => {
        return {
            ...state,
            todolist:[...state.todolist, todo]
        }
    }),
    on(TodoActions.addTodoFail,(state,{err})=>{
        return{
            ...state,
            err
        }
    }),
 
    )
   
   