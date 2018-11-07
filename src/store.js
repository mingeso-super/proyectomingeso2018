import {createStore } from 'redux';


const reducer = (state, action) => {

	if( action.type === "ADD_INPUT_OUTPUT") {

		return {

			...state,
			parametros: state.parametros.concat(action.params)
	};
	}

	return state;
};

export default createStore(reducer, { parametros: [] } );