import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { GlobalStyle } from './styles/GlobalStyle.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
