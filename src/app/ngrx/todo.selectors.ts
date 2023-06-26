import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { Todo, TodoState } from "../interfaces/todo";

const selectorTodos = createFeatureSelector<TodoState>('todos')

export const getTodos = createSelector(
    selectorTodos,
    (todos: TodoState) : Todo[]=> todos.todolist


)