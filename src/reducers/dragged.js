import { SET_DRAGGED_ITEM } from '../actions/types';

const dragged = (state = '', action) => {
    switch (action.type) {
        case SET_DRAGGED_ITEM:
            return action.dragged;
        default:
            return state;
    }
};

export default dragged;
