//=================================|SETUP / INSTALL|============================//
//    1. Clear out App.css & index.css
//    2. Remove unnecessary code from App.jsx
//    3. Remove unnecessary code from imports main.jsx
//    4. Open Terminal for "Client Side" interactions
//    4. Install Axios
//      a. npm install axios

// Step 1: Import necessary modules from React
//    1. Import React and necessary hooks
import React, { useState, useEffect } from 'react'               
//    2. Import Axios for making HTTP requests
import axios from 'axios'               
//    3. Import CSS file for styling
import './App.css'
//    4. Import Movie component
import Movie from './components/Movie'
//    5. Import AddMovieForm component
import AddMovieForm from './components/AddMovieForm'

// Step 2: Define the main App component
function App() {
  // Step 3: Define state variables using useState hook
  //    1. Define state variable for movies
  const [movies, setMovies] = useState([])

  // Step 4: Define function to fetch movies from server
  //    1. Function to fetch movies from the server
  function getMovies() {
    axios.get("/api/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
  }

  // Step 5: Define function to add a new movie
  //    1. Function to add a new movie
  function addMovie(newMovie){
    axios.post("/api/movies", newMovie)
      .then(res => {
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log(err))
  }

  // Step 6: Define function to delete a movie
  //    1. Function to delete a movie
  function deleteMovie(movieId){
    axios.delete(`/api/movies/${movieId}`)
      .then(res => {
        setMovies(prevMovies => [...prevMovies.filter(movie => movie._id !== movieId)])
      })
      .catch(err => console.log(err))
  }

  // Step 7: Define function to edit a movie
  //    1. Function to edit a movie
  function editMovie(updates, movieId) {
    axios.put(`/api/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log(err))
  }

  // Step 8: Fetch movies when component mounts
  //    1. Fetch movies when the component mounts
  useEffect(() => {
    getMovies()
  }, [])

  // Step 9: Render the component
  //    1. Render the main component
  return (
    <div>
      <div className="movie-container">
        {/* 1. Render the AddMovieForm component */}
        <AddMovieForm 
          submit={addMovie}
          btnText="Add Movie"
        />
        {/* 2. Render each Movie component */}
        {movies.map(movie => 
          <Movie 
            {...movie} 
            key={movie.title}
            deleteMovie={deleteMovie}
            editMovie={editMovie}
          />
        )}
      </div>
    </div>
  )
}

export default App
