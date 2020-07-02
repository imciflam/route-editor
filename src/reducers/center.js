import { CHANGE_CENTER } from '../actions/types';

const center = (state = {
    lat: 37.775,
    lng: -122.405
}, action) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case CHANGE_CENTER:
            return {
                ...state, lat: action.lat, lng: action.lng
            };
        default:
            return state;
    }
}

export default center;
