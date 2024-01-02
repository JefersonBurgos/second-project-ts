import React from "react";
import "./styles.css"
import { Button, Box as MuiBox, Stack, TextField } from "@mui/material";

interface Todo {
	id: string;
	title: string;
	completed: boolean;
}

interface State {
	todo: Todo;
}

const initialState: State = {
	todo: {
		id: "",
		title: "",
		completed: false
	}
};

type Action = { type: "add-todo", payload: Todo };

function reducer(state: State, action: Action): State {
	let newState;
	switch (action.type) {
		case "add-todo": {
			newState = {
				...state,
				todo: action.payload
			};
			break;
		}
		default:
			newState = state;
	}
	console.log(newState);
	return newState;
}

interface ContextValue {
	readonly state: State;
	readonly dispatch?: (action: Action) => void;
}

type Properties = {
	onChange?: (value: Todo) => void;
};

function Component({
	onChange
}: Properties) {
	const [state, dispatch] = React.useReducer(reducer, initialState);

	React.useEffect(() => {
		state.todo.title !== "" &&
			onChange?.(state.todo);
	}, [state.todo]);

	return (
		<MuiBox>
			<Stack
				component="form"
				spacing={2}
				onSubmit={(event) => {
					event.preventDefault();
					const title = (event.target as any).elements[0].value;
					dispatch({
						type: "add-todo",
						payload: {
							id: crypto.randomUUID(),
							title,
							completed: false,
						},
					});
				}}
			>
				<TextField
					fullWidth
					id="outlined-basic"
					label="Item"
					variant="outlined" />
				<Stack>
					<Button
						type="submit"
						variant="contained"
						fullWidth
					>Add
					</Button>
				</Stack>
			</Stack>
		</MuiBox >
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