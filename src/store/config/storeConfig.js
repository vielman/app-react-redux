import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from "@redux-devtools/extension"
import { rootReducer } from "../reducers/rootReducer";
import { watcherSaga } from '../sagas/sagas';

export const createAppStore = () => {
    let store = createStore(rootReducer, composeWithDevTools());

    return store;
}

export const createAsyncStore = () => {

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware), 
            composeWithDevTools()
        )
        
      )

    //inicializar  el observador
    sagaMiddleware.run(watcherSaga)

    return store;
}