import { SET_PLANETS } from './actionTypes';

export const setPlanets = (data) => {
	return {
		type: SET_PLANETS,
		payload: data
	};
};