import React from 'react';
import './index.css';
import Formulario from './Formulario';
import { createRoot } from 'react-dom/client';

function App() {
	return <React.StrictMode>
				<div className="contenedor">
					<Formulario />
				</div>
			</React.StrictMode>
  }
  
  const root = createRoot(document.getElementById('root'));
  root.render(<App />);
