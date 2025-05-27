import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css'; // optional

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
console.log("main.jsx is running");
