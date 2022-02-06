import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../redux/reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { myWatcher} from './sagas/saga';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(myWatcher);
