import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import {store} from './store/store'
//import persistor from './store/store'
//import { PersistGate } from 'redux-persist/integration/react'

// const App = () => {
//     return (
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <RootComponent />
//         </PersistGate>
//       </Provider>
//     );
//   };

ReactDOM.render(
    <Provider store={store}> <App /> </Provider>, document.getElementById('root'));

