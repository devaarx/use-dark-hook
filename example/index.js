import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '../dist'
import App from './App'

ReactDOM.createRoot(document.getElementById('app')).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
