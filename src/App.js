import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import Router from './pages';

const App = () => (
  <ToastProvider>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ToastProvider>

);

export default App;
