import React from "react";

import "./styles.css"

import {
	Button,
	Box as MuiBox, Stack, TextField
} from "@mui/material";

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
			<Stack>
				<TextField
					fullWidth
					id="outlined-basic"
					label="Item"
					variant="outlined" />
			</Stack>

			<Button
				variant="contained"
				fullWidth
			>Add
			</Button>


		</MuiBox>
	);
}

export type NewTodoFormState = State;
export type NewTodoFormAction = Action;
export type NewTodoFormContextValue = ContextValue;
export type NewTodoFormProperties = Properties;
export const NewTodoForm = Object.assign(Component, {
	initialState,
	reducer
});

export default NewTodoForm;
