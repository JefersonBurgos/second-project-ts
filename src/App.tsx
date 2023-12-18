import React, { useReducer, useEffect } from "react";
import { NewTodoForm } from "./newTodoForm";
import "./styles.css";
import { TodoList } from "./todoList";

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
	| { type: "ADD_TODO"; title: string }
	| { type: "TOGGLE_TODO"; id: string; completed: boolean }
	| { type: "DELETE_TODO"; id: string }
	| { type: "LOAD_TODOS"; todos: Todo[] };

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "ADD_TODO":
			return {
				...state,
				todos: [
					...state.todos,
					{
						id: crypto.randomUUID(),
						title: action.title,
						completed: false,
					},
				],
			};
		case "TOGGLE_TODO":
			return {
				...state,
				todos: state.todos.map((todo) =>
					todo.id === action.id ? { ...todo, completed: action.completed } : todo
				),
			};
		case "DELETE_TODO":
			return {
				...state,
				todos: state.todos.filter((todo) => todo.id !== action.id),
			};
		case "LOAD_TODOS":
			return {
				...state,
				todos: action.todos,
			};
		default:
			return state;
	}
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

	useEffect(() => {
		const localValue = localStorage.getItem("ITEMS");
		if (localValue != null) {
			dispatch({ type: "LOAD_TODOS", todos: JSON.parse(localValue) });
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("ITEMS", JSON.stringify(state.todos));
	}, [state.todos]);

	function addTodo(title: string) {
		dispatch({ type: "ADD_TODO", title });
	}

	function toggleTodo(id: string, completed: boolean) {
		dispatch({ type: "TOGGLE_TODO", id, completed });
	}

	function deleteTodo(id: string) {
		dispatch({ type: "DELETE_TODO", id });
	}

	return (
		<>
			<NewTodoForm onSubmit={addTodo} />
			<h1 className="header">Todo List</h1>
			<TodoList todos={state.todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
		</>
	);
}
