import React from 'react';
import '../Styles/App.css'; // Adjust the path as needed
import UglyForm from './UglyForm'; // Adjust the path as needed
import UglyCardList from './UglyCardList'; // Adjust the path as needed

export default function App() {
    return (
        <div className="App">
            <h1>Ugly Things</h1>
            <UglyForm />
            <UglyCardList />
        </div>
    );
}
