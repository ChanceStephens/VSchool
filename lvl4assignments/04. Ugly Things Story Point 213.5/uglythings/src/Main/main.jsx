import React from 'react'
import { createRoot } from 'react-dom/client'
import { UglyThingsProvider } from '../Components/Context' 
import App from '../Components/App' 

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UglyThingsProvider>
            <App />
        </UglyThingsProvider>
    </React.StrictMode>
)
