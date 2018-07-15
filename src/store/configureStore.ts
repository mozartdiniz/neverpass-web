import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import ui from './ui/ui.reducers';
import password from './passwords/passwords.reducers';

const rootReducer = combineReducers({
  ui,
  password
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
