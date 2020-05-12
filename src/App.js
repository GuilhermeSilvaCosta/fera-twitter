import React from 'react';
import { Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import history from '@history'
import routes from './routes';
import Navigation from 'components/Navigation';
import TrendTopics from 'components/TrendTopics';

import { store, persistor } from './store';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <div className="app-container">
            <Navigation />
            <div className="pages">
              {renderRoutes(routes)}
            </div>
            <TrendTopics />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
