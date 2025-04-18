import { Routes } from '@generouted/react-router';
import { createRoot } from 'react-dom/client';
import './index.css';

const rootEl = document.getElementById('root');

if (!rootEl) throw new Error('root is undefined');

createRoot(rootEl).render(<Routes />);
