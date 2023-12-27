import "./styles.css"
import React from "react";

import {
	Button,
	Checkbox,
	FormControlLabel,
	Grid,
	Box as MuiBox, Stack, Typography
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

};

function Component({

}: Properties) {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	return (
		<MuiBox>
			<Typography variant="h5">Todo List</Typography>
			<Grid >
				<Grid>
					<FormControlLabel
						control=
						{
							<Checkbox
							//checked={antoine}
							//onChange={handleChange}
							//name="antoine"
							/>
						}
						label="Item 1"

					/>
					<Button variant="outlined" color="error">Delete</Button>
				</Grid>
				<Grid>
					<FormControlLabel
						control=
						{
							<Checkbox
							//checked={antoine}
							//onChange={handleChange}
							//name="antoine"
							/>
						}
						label="Item 2"

					/>
					<Button variant="outlined" color="error">Delete</Button>
				</Grid>
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
