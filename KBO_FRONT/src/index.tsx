import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>
);
