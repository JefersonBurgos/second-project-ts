import React, { useEffect, useState } from "react";
//import { NewTodoForm } from "./newTodoForm";
import "./styles.css";
import { Box } from "@mui/material";
//import { TodoList } from "./todoList";

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
	| { type: "ADD_TODO", payload: Todo }
	| { type: "TOGGLE_TODO", payload: { id: string; completed: boolean } }
	| { type: "DELETE_TODO", payload: string };

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "ADD_TODO": {
			return {
				...state,
				todos: [...state.todos, action.payload],
			};
		}
		case "TOGGLE_TODO": {
			return {
				...state,
				todos: state.todos.map(todo =>
					todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo
				),
			};
		}
		case "DELETE_TODO": {
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.payload),
			};
		}
		default:
			return state;
	}
}

interface ContextValue {
	readonly state: State;
	readonly dispatch?: (action: Action) => void;
}

type Properties = {};

function App({ }: Properties) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	useEffect(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue != null) {
			//dispatch({ type: "INIT_TODOS", payload: JSON.parse(localValue) });
		}
	}, []);

	function addTodo(title: string) {
		dispatch({
			type: "ADD_TODO",
			payload: {
				id: crypto.randomUUID(),
				title,
				completed: false,
			},
		});
	}

	function toggleTodo(id: string, completed: boolean) {
		dispatch({ type: "TOGGLE_TODO", payload: { id, completed } });
	}

	function deleteTodo(id: string) {
		dispatch({ type: "DELETE_TODO", payload: id });
	}

	return (
		<Box>

		</Box>
		//<Context.Provider value={{ state, dispatch }}>
		//{/*<NewTodoForm onSubmit={addTodo} />
		//<h1 className="header">Todo List</h1>
		//<TodoList todos={state.todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />*/}
		//{/*</Context.Provider>*/}
	);
}

export type TemplateState = State;
export type TemplateAction = Action;
export type TemplateContextValue = ContextValue;
export type TemplateProperties = Properties;
export const Template = Object.assign(App, {
	initialState,
	reducer,
});

export default Template;