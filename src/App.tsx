import React from "react";
import "./styles.css"

import {
	Box as MuiBox, Typography
} from "@mui/material";
import NewTodoForm from "./NewTodoForm";
import TodoList from "./TodoList";

interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

interface State {
	todos: Todo[];
}

const initialState: State = {
	todos: [],
};

type Action =
	{ type: "ADD_TODOS", payload: Todo } |
	{ type: "DELETE_TODO", payload: Todo[] }
	;

function reducer(state: State, action: Action): State {
	let newState;
	switch (action.type) {
		case "ADD_TODOS": {
			newState = {
				...state,
				todos: [...state.todos, action.payload]
			};
			break;
		}

		case "DELETE_TODO": {
			newState = {
				...state,
				todos: action.payload
			};
			break;
		}
		default:
			newState = state;
	}
	console.log(newState);
	return newState;
}

interface ContextValue {
	readonly state: State;
	readonly dispatch?: (action: Action) => void;
}

type Properties = {

};

function Component({

}: Properties) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<MuiBox>
			<Typography variant="h4">Add Todo</Typography>
			<NewTodoForm
				onChange={(todo: Todo) => dispatch({ type: "ADD_TODOS", payload: todo })}
			/>
			<TodoList
				onDelete={(id: string) => dispatch({ type: "DELETE_TODO", payload: state.todos.filter(todo => todo.id != id) })}
				todo={state.todos}
			/>
		</MuiBox>
	);
}

export type AppState = State;
export type AppAction = Action;
export type AppContextValue = ContextValue;
export type AppProperties = Properties;
export const App = Object.assign(Component, {
	initialState,
	reducer
});

export default App;
