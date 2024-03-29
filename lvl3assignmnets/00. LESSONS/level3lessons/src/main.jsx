import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import PassingStateAsProps from '../Lesson Notes/Passing state as props Story Point 230.5/passingStateAsProps.jsx'
// import SettingStateFromChildComponents from '../Lesson Notes/Setting state from child components Story Point 231/settingStateFromChildComponents'
import BoxesChallengePart1 from '../Lesson Notes/Boxes Challenge Part 1 Story Point 236/BoxesChallengePart1'
// import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*  */}                                          {/* To Copy and Paste */}

    {/*<App />*/}                                     {/* Meme Generator */}

    {/*<PassingStateAsProps />*/}                     {/* Story Point 230.5 */}

    {/*<SettingStateFromChildComponents/>*/}          {/* Story point 231 */}

    <BoxesChallengePart1 darkMode={false}/>           {/* Story point 236 */}
    {/* prop = darkMode (will pass to child component)
        false = initial prop value to be passed to child component*/}

  </React.StrictMode>,
)
