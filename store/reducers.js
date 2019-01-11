import { SET_PLANETS } from './actionTypes';

const initialState = {
	planets: []
};


const reducers = (state = initialState, action) => {
	if (action.type === SET_PLANETS) {
		return {
			...state,
			articles: action.payload
		};
	}

	return state;
};

export default reducers;