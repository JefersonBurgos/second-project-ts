import "./styles.css"
import React from "react";

import {
	Grid,
	List,
	ListItem,
	Box as MuiBox,
	Typography
} from "@mui/material";
import TodoItem from "./TodoItem";

interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

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
	todo: Todo[],
	onDelete: (id: string) => void,
	onChecked: (id: string) => void
};

function Component({
	todo,
	onDelete,
	onChecked
}: Properties) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<MuiBox>
			<Typography variant="h5">Todo List</Typography>
			<Grid >
				{todo.map((todo: Todo, index: number) => (
					<TodoItem onChecked={onChecked} key={index} value={todo} onDelete={onDelete} />
				))}
			</Grid>
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
