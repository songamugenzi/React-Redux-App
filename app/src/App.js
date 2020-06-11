import React from 'react';
import './index.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { jokesReducer as reducer } from './reducers/jokesReducer';

import JokesGeneratorForm from './components/jokesGeneratorForm';
import JokesList from './components/JokesList';

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <p>
            Random Joke Generator 
            <span role='img' aria-label='laughing emoji'>😂</span>
          </p>
        </header>
        <JokesGeneratorForm />
        <JokesList />
      </div>
    </Provider>
  );
}

export default App;