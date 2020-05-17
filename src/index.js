import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/integration/react';
import firebase from 'firebase/app';
import { firebaseConfig } from './_services';
import App from './App';
// import reducer from './reducers/reducer';
import rootReducer from './_store/reducers';
import 'babel-polyfill';

require('firebase/auth');
require('firebase/firestore');


// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
