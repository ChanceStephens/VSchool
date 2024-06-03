import React from 'react'
import '../Styles/App.css'
import UglyForm from './UglyForm'
import UglyCardList from './UglyCardList'

export default function App() {
    return (
        <div className="App">
            <h1>The World's Ugliest Things</h1>
            <UglyForm />
            <UglyCardList />
        </div>
    );
}
