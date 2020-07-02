import { ADD_MARKER, REMOVE_MARKER, CHANGE_ORDER, CHANGE_POSITION } from '../actions/types';

const markers = (state = [], action) => {
    switch (action.type) {

        case ADD_MARKER:
            return [
                ...state,
                {
                    id: action.id,
                    name: action.name,
                    position: action.position
                }
            ];

        case REMOVE_MARKER: {
            const markerToRemove = state.find(marker => marker.id === action.id)
            const newArr = state.filter(element => element !== markerToRemove)
            return newArr;
        }

        case CHANGE_ORDER: {
            const markerToMove = state.find(marker => marker.id === action.markerId); // get a marker
            const afterIndex = state.indexOf(state.find(marker => marker.id === action.afterId));
            const markers = state.filter(marker => marker.id !== action.markerId);
            return [
                ...markers.slice(0, afterIndex),
                markerToMove,
                ...markers.slice(afterIndex)
            ];
        }

        case CHANGE_POSITION:
            return state.map((marker) => {
                if (marker.id === action.id) {
                    return {
                        ...marker, position: action.position
                    };
                }
                return marker
            })

        default:
            return state;
    }
};

export default markers;
