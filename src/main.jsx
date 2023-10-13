import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <h2 className='text-4xl font-semibold text-center py-3 bg-green-300'>ToDo App</h2>
    <div className='md:grid grid-cols-2'>
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
      <App />
    </div>
  </React.StrictMode>,
)
