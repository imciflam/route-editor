import { CREATE_MARKER, REMOVE_MARKER } from '../constants/actionTypes';

const markers = (state = [], action) => {
    switch (action.type) {
        case CREATE_MARKER:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    position: action.position
                }
            ];
        case REMOVE_MARKER: {
            let marker = state.find(marker => marker.id === action.id);
            let index = state.indexOf(marker);
            return [
                ...state.slice(0, index),
                ...state.slice(index + 1)
            ];
        }
        default:
            return state;
    }
};

export default markers;
