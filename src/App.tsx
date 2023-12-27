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
	{ type: "ADD_TODO", payload: Todo[] }
	;

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "ADD_TODO": {
			return {
				...state,
				todos: action.payload
			};
		}
	}
}

interface ContextValue {
	readonly state: State;
	readonly dispatch?: (action: Action) => void;
}

type Properties = {
	onSubmit?: (todos: Todo[]) => void;
};

function Component({
	onSubmit
}: Properties) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	return (
		<MuiBox>
			<Typography variant="h4">Add Todo</Typography>
			<NewTodoForm onChange={(todo: Todo[]) => dispatch({ type: "ADD_TODO", payload: todo })} />
			<TodoList
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
