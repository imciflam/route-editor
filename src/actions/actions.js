import {
    ADD_MARKER,
    REMOVE_MARKER,
    CHANGE_ORDER,
    CHANGE_POSITION,
    SET_DRAGGED_ITEM
} from '../actions/types';

export const createMarker = (id, name, position) => ({
    type: ADD_MARKER,
    id, name, position
});

export const removeMarker = (id) => ({
    type: REMOVE_MARKER,
    id
});

export const changeOrder = (afterId, markerId) => ({
    type: CHANGE_ORDER,
    afterId, markerId
});

export const changePosition = (id, position) => ({
    type: CHANGE_POSITION,
    id, position
});

export const setdragged = (dragged) => ({
    type: SET_DRAGGED_ITEM,
    dragged
});
