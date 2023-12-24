import "./styles.css"
import React from "react";

import {
	Box as MuiBox
} from "@mui/material";
import TodoItem from "./TodoItem";

interface State {

}

const initialState: State = {

};

type Action =
	{ type: "", payload: any }
	;

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "": {
			return {
				...state,

			};
		}
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
	return (
		<MuiBox>
			<TodoItem />
		</MuiBox>
	);
}

export type TodoListState = State;
export type TodoListAction = Action;
export type TodoListContextValue = ContextValue;
export type TodoListProperties = Properties;
export const TodoList = Object.assign(Component, {
	initialState,
	reducer
});

export default TodoList;
