import "./styles.css"
import React from "react";

import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Box as MuiBox,
	Typography
} from "@mui/material";

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
	value: Todo,
	onDelete: (id: string) => void,
	onChecked: (id: string) => void
};

function Component({
	value,
	onDelete,
	onChecked
}: Properties) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<MuiBox>
			<Grid>
				<FormControlLabel
					control=
					{
						<Checkbox
							checked={value.completed}
							onChange={() => onChecked(value.id)}
							name={value.title}
						/>
					}
					label={<Typography
						sx={value.completed ? { textDecoration: "line-through" } : {}}
					>
						{value.title}
					</Typography>}
				/>
				<Button
					variant="outlined"
					color="error"
					onClick={() => onDelete(value.id)}
				>
					Delete
				</Button>
			</Grid>
		</MuiBox>
	);
}

export type TodoItemState = State;
export type TodoItemAction = Action;
export type TodoItemContextValue = ContextValue;
export type TodoItemProperties = Properties;
export const TodoItem = Object.assign(Component, {
	initialState,
	reducer
});

export default TodoItem;
