import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk';
import Reducer from '../reducer/reducer'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

 


// const persistedReducer = persistReducer(persistConfig,Reducer)

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const Enhancer = composeEnhancers(

    applyMiddleware(thunk)
);

const token = localStorage.getItem("token");
const role = localStorage.getItem("role");
const name =localStorage.getItem("name");
const data =localStorage.getItem("details");
const result=localStorage.getItem("result");
const pending=localStorage.getItem("Pending");


const INITIAL_STATE = {
    Token:"",
    Role:"",
    Name:"",
    Data:"",
    result:"",
    Pending:"",
  
}

if (token) {
    INITIAL_STATE.Token = token;
    INITIAL_STATE.Role = role;
    INITIAL_STATE.Name = name;
    INITIAL_STATE.Data=data;
    INITIAL_STATE.result=result;
    INITIAL_STATE.Pending=pending;

}

const persistConfig = {
    key: 'authType',
    storage: storage,
    whitelist: ['authType'] // which reducer want to store
  };
const pReducer = persistReducer(persistConfig, Reducer);
const middleware = applyMiddleware(thunk);
const store = createStore(pReducer,INITIAL_STATE, middleware);
const persistor = persistStore(store);
export { persistor, store };


// const Configstore=(INITIAL_STATE) => {
//     let store = createStore(persistedReducer,INITIAL_STATE,Enhancer)
//     let persistor = persistStore(store)
//     return { store, persistor}
//   }

// const store=Configstore(INITIAL_STATE);
// export default store;

//export default createStore(Reducer,INITIAL_STATE,Enhancer,);


