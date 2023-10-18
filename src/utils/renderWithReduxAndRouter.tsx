import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { applyMiddleware, legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { GlobalState } from '../types';
import { rootReducers } from '../redux/reducers';

function renderWithRouterAndRedux(
  component: JSX.Element,
  route: string = '/',
  state: GlobalState | undefined = undefined,
  store = legacy_createStore(
    rootReducers,
    state,
    applyMiddleware(thunk),
  ),
) {
  window.history.pushState({}, 'Test page', route);

  return {
    ...render(
      <BrowserRouter>
        <Provider store={ store }>{component}</Provider>
      </BrowserRouter>,
    ),
    user: userEvent.setup(),
    store,
  };
}

export default renderWithRouterAndRedux;
