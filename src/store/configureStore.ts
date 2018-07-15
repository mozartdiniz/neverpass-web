import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import ui from './ui/ui.reducers';

const rootReducer = combineReducers({
  ui
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
