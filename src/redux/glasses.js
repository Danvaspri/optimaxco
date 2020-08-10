import * as ActionTypes from './ActionTypes';

export const Glasses = (state = { isLoading: true,
    errMess: null,
    glasses:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_GLASSES:
            return {...state, isLoading: false, errMess: null, glasses: action.payload};

        case ActionTypes.GLASSES_LOADING:
            return {...state, isLoading: true, errMess: null, glasses: []}

        case ActionTypes.GLASSES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};