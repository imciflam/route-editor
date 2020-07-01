import {
    CREATE_MARKER,
    REMOVE_MARKER,
} from './types.js';

export const createMarker = (id, name, position) => ({
    type: CREATE_MARKER,
    id, name, position
});

export const removeMarker = (id) => ({
    type: REMOVE_MARKER,
    id: id
});
