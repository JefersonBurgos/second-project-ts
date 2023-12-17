import "./styles.css"
import React from "react";

import {
	Box as MuiBox
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
			<h1>Hi whats up</h1>
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
