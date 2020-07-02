import { combineReducers } from 'redux';
import center from './center';
import dragged from './dragged';
import markers from './markers';

const app = combineReducers({
    markers,
    dragged,
    center
})

export default app;
