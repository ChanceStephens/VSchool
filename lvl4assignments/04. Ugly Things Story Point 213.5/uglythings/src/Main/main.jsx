import React from 'react';
import { createRoot } from 'react-dom/client';
import { UglyThingsProvider } from '../Components/Context'; // Adjust the path as needed
import App from '../Components/App'; // Adjust the path as needed

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UglyThingsProvider>
            <App />
        </UglyThingsProvider>
    </React.StrictMode>
);
