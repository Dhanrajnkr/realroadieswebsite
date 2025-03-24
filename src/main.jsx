import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import axios from 'axios'

// Configure API base URL
const apiBaseUrl = import.meta.env.PROD 
  ? 'https://dev-api.realroadies.com' 
  : 'http://localhost:3000' // or whatever your local API URL is

// Set default base URL for axios
axios.defaults.baseURL = apiBaseUrl;

// Optional: Add default headers for CORS if needed
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
