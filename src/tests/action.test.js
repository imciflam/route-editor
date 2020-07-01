import * as actions from '../actions/index';
import * as types from '../actions/types';

describe('Create marker action', () => {
    it('should create an action to create', () => {
        const id = Math.round(Math.random() * 100);
        const name = 'Kzn';
        const position = { lat: 55.78874, lang: 49.12214 };
        const expectedAction = {
            type: types.CREATE_MARKER,
            id: id,
            name: name,
            position: position
        };
        expect(actions.createMarker(id, name, position)).toEqual(expectedAction);
    });
});

describe('Remove marker action', () => {
    it('should create an action to remove a marker', () => {
        const id = Math.round(Math.random() * 100);
        const expectedAction = {
            type: types.REMOVE_MARKER,
            id: id
        };
        expect(actions.removeMarker(id)).toEqual(expectedAction);
    });
});
