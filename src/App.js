import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { PersistGate } from 'redux-persist/integration/react';
import Router from './pages';
import { store, persistor } from './Redux/configReducer';

const App = () => (
  <Provider store={store}>
    <ToastProvider>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <Router />
        </PersistGate>
      </BrowserRouter>
    </ToastProvider>
  </Provider>
);

export default App;
