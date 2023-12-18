import React, { useReducer } from "react";

interface State {
	newItem: string;
}

const initialState: State = {
	newItem: "",
};

type Action =
	| { type: "SET_NEW_ITEM"; value: string }
	| { type: "SUBMIT"; onSubmit: (value: string) => void };

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "SET_NEW_ITEM":
			return {
				...state,
				newItem: action.value,
			};
		case "SUBMIT":
			action.onSubmit(state.newItem);
			return {
				...state,
				newItem: "",
			};
		default:
			return state;
	}
}

interface NewTodoFormProps {
	onSubmit: (value: string) => void;
}

export function NewTodoForm({ onSubmit }: NewTodoFormProps) {
	const [state, dispatch] = useReducer(reducer, initialState);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		dispatch({ type: "SET_NEW_ITEM", value: e.target.value });
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		if (state.newItem === "") return;
		dispatch({ type: "SUBMIT", onSubmit });
	}

	return (
		<form onSubmit={handleSubmit} className="new-item-form">
			<label htmlFor="item">New Item</label>
			<input
				value={state.newItem}
				onChange={handleChange}
				type="text"
				id="item"
			></input>
			<button className="btn">Add</button>
		</form>
	);
}
