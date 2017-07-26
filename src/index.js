import React from 'react';
import ReactDOM from 'react-dom';

// Import components
import App from './components/App/App';

// Import CSS
import './index.css';

// Import API
import { getUsers, setUsers } from './API/userAPI';
import { getRoom, setRoom } from './API/roomAPI';
import { setLoading } from './API/loadingAPI';

import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import { initStore } from './store/Store';

const store = initStore();

// Init Store
store.subscribe(() => {
  // This stuff happens everytime store is updated
  const state = store.getState();
  setUsers(state.user);
  setLoading(state.isStillLoading);
  setRoom(state.room);
})

// This dispatcher is for the flow of storing user login status.
// store.dispatch(getUser())

ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
