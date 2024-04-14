import React, {useState} from 'react'
import Body from './Body';
import Footer from './Footer';
import NavBar from './NavBar';
import { ThemeContextProvider } from './ThemeContext'
import '../CSS/App.css'

 function App(props) {



  return (
    <>
      <ThemeContextProvider>
        <NavBar/>
        <Body/>
        <Footer/>
      </ThemeContextProvider>
    </>
  )
}

export default App


