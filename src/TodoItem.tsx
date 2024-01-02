import "./styles.css"
import React from "react";

import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Box as MuiBox
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
	onDelete: (id: string) => void
};

function Component({
	value,
	onDelete
}: Properties) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<MuiBox>
			<Grid>
				<FormControlLabel
					control=
					{
						<Checkbox
							//onChange={ }
							name={value.title}
						/>
					}
					label={value.title}
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
