/*|***DONE***| REQUIREMENT: You will have a parent component that will contain the four squares. 
This parent component's `state` will maintain a array of colors.*/

import React from 'react'
import './App.css'                                                /* COMPONENTS */
import Square from "./DJReactComponents/Square"                   //  
import Music from "./DJReactComponents/Music"                     //
import Gifs from './DJReactComponents/Gifs'                       //
import ColorsArray from './DJReactComponents/ColorsArray'         //
import SoundBoard from './DJReactComponents/SoundBoard'           //
import ButtonText from './DJReactComponents/ButtonText'           // 
//                                                                /* COMPONENTS */  
import purpleTaste from "./DJReactSounds/tastedPurple.mp3"        
import blue from "./DJReactSounds/codeblue.ogg"
import blueyDog from "./DJReactSounds/bluey.mp3"
import shock from "./DJReactSounds/shock.mp3"

export default function App() {
  // initializing the state of colors for use in the Square Component. Default is White
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])

  // variable set to map over the colors array and returns a JSX element ultimately becoming the "square" element rendered on the page
  const squareColors = colors.map((color, index) => (
    <Square key={index} color={color}/>
    ))

  // Imported audio sounds to play when function is called
  // new Audio(purpleTaste) creates a new instance of an audio 
  //    element with the audio file specified by purpleTaste as its source.
  //    this is repeated to make sure the sounds are able to be accessed and used.
    const tastedPurple = () => {
      const audio = new Audio(purpleTaste);
      audio.play();
    }
    const codeBlue = () => {
      const audio = new Audio(blue);
      audio.play();
    }
    const bluey = () => {
      const audio = new Audio(blueyDog);
      audio.play();
    }
    const electric = () => {
      const audio = new Audio(shock)
      audio.play()
    }

    //|***DONE***|  You will have one button that will change all four squares either black or white. White if the first one is not white. Black if the first square is white.
    // this function ultimately uses a ternary operator to determine whether to display a black or white backgroundColor.  Also adding the electric() function call causes the sound to play when the button is pressed.

    const smallTimeDj = () => {
      const firstSquareColor = colors[0]
      const newColors = colors.map(() => firstSquareColor === "white" ? "black" : "white")
      setColors(newColors)
      electric()
    }

    //|***DONE***|  Add a second button. The second will turn the top half (both squares) of the grid purple.
    // Inside this function, the setColors function Variable with a prevColors parameter takes the colors of the box array, makes a copy and sets that as newColors.  Then by providing the newColors with its index number, i can target that specific box thus returning the newColors.

    const partyDj = () => {
      tastedPurple()
      setColors(prevColors => {
        const newColors = [...prevColors];
        newColors[0] = "purple";
        newColors[1] = "purple";
        return newColors;
      });
    };

      //|***DONE***| Add two more buttons, for a total of four. These next two will change the colors of the bottom squares blue, but individually. One will be linked to the bottom left, and the other to the bottom right. This follows the basic same process as the previous function.

      const proDjLeft = () => {
        codeBlue()
        setColors(prevColors => {
          const newColors = [...prevColors]
      newColors[2] = "blue"
      return newColors
    })
    }
    const proDjRight = () => {
      bluey()
      setColors(prevColors => {
        const newColors = [...prevColors]
        newColors[3] = "blue"
        return newColors
      })
    }

// This function uses an array of colors created in the ColorsArray Component.  First we set the Component to a variable.  We can now create a function to setColors with the prevColor parameter and map over the colors while also generating a random index that applies to a color in the array.  Once again, returning newColors allow all the squares to render a random colored background.
    const flashy = () => {
      const colorList = ColorsArray() 
        setColors(prevColors => {
          const newColors = prevColors.map(() => {
            const randomIndex = Math.floor(Math.random() * colorList.length)
            return colorList[randomIndex]
          })
          return newColors;
      });
    }

  return (
    <>
      <div className='djBoxContainer'>
        <div className='leftSide'>
          <div className="gifs">            
            <Gifs />
          </div>
          <div className="gifs">
            <Gifs />
          </div>
        </div>
        <div className='djBox'>
          {squareColors}
        </div>
        <div className='rightSide'>
          <div className="gifs">
            <Gifs />
          </div>
          <div className="gifs">
            <Gifs />
          </div>
        </div>
      </div>
      <div className='buttonBox'>
        <button onClick={smallTimeDj}>Black / White</button>
        <button onClick={partyDj}>Grape Day!</button>
        <button onClick={proDjLeft}>I'm Blue</button>
        <button onClick={proDjRight}>Bluey!</button>
        <button onClick={flashy}>Lights!</button>
        <SoundBoard/>
        <ButtonText />
        <Music />
      </div>
    </>
  )
}


