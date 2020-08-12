  
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Glasses } from './glasses';
import { Comments } from './comments';
import { favorites } from './favorites';
import { Auth } from './auth';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            glasses: Glasses,
            comments: Comments,
            auth: Auth,
            favorites,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}