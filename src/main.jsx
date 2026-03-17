import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Trial from './TRIAL.jsx'

// Add Font Awesome for icons (CDN method for simplicity in this snippet)
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
document.head.appendChild(link);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600&family=Playfair+Display:wght@400;600&display=swap';
document.head.appendChild(fontLink);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <h1>hello</h1> */}
  </React.StrictMode>,
)  




