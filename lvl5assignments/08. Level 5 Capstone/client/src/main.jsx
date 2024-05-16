import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { VschoolTrackerProvider } from './AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <VschoolTrackerProvider>
      <App />
    </VschoolTrackerProvider>
  </React.StrictMode>
)
