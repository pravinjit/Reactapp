import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './store';
import Modal from 'react-modal';
import Home from './Home';

/* React Modal */
Modal.setAppElement("#root");

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Home />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
  );
