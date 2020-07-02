import { combineReducers } from 'redux';

import dragged from './dragged';
import markers from './markers';

const app = combineReducers({
    markers,
    dragged
})

export default app;
