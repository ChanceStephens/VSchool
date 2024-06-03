const express = require('express')
const teamsRouter = express.Router()
const { v4: uuidv4 } = require ('uuid')

//==============|NFL TEAM JSON OBJECT|================//
  const teams = [
    {
      _id: uuidv4(),
      "name": "Arizona Cardinals",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Black",
      "secondaryColor": "Red",
      "founded": 1898,
      "cityLocation": "Glendale, Arizona"
    },
    {
      _id: uuidv4(),
      "name": "Atlanta Falcons",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Red",
      "secondaryColor": "Black",
      "founded": 1965,
      "cityLocation": "Atlanta, Georgia"
    },
    {
      _id: uuidv4(),
      "name": "Baltimore Ravens",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Purple",
      "secondaryColor": "Black",
      "founded": 1996,
      "cityLocation": "Baltimore, Maryland"
    },
    {
      _id: uuidv4(),
      "name": "Buffalo Bills",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Royal Blue",
      "secondaryColor": "Red",
      "founded": 1960,
      "cityLocation": "Orchard Park, New York"
    },
    {
      _id: uuidv4(),
      "name": "Carolina Panthers",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Blue",
      "secondaryColor": "Black",
      "founded": 1995,
      "cityLocation": "Charlotte, North Carolina"
    },
    {
      _id: uuidv4(),
      "name": "Chicago Bears",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Navy Blue",
      "secondaryColor": "Orange",
      "founded": 1919,
      "cityLocation": "Chicago, Illinois"
    },
    {
      _id: uuidv4(),
      "name": "Cincinnati Bengals",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Orange",
      "secondaryColor": "Black",
      "founded": 1968,
      "cityLocation": "Cincinnati, Ohio"
    },
    {
      _id: uuidv4(),
      "name": "Cleveland Browns",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Orange",
      "secondaryColor": "Brown",
      "founded": 1946,
      "cityLocation": "Cleveland, Ohio"
    },
    {
      _id: uuidv4(),
      "name": "Dallas Cowboys",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Navy Blue",
      "secondaryColor": "Silver",
      "founded": 1960,
      "cityLocation": "Arlington, Texas"
    },
    {
      _id: uuidv4(),
      "name": "Denver Broncos",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Orange",
      "secondaryColor": "Navy Blue",
      "founded": 1960,
      "cityLocation": "Denver, Colorado"
    },
    {
      _id: uuidv4(),
      "name": "Detroit Lions",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Honolulu Blue",
      "secondaryColor": "Silver",
      "founded": 1930,
      "cityLocation": "Detroit, Michigan"
    },
    {
      _id: uuidv4(),
      "name": "Green Bay Packers",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Green",
      "secondaryColor": "Gold",
      "founded": 1919,
      "cityLocation": "Green Bay, Wisconsin"
    },
    {
      _id: uuidv4(),
      "name": "Houston Texans",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Deep Steel Blue",
      "secondaryColor": "Battle Red",
      "founded": 2002,
      "cityLocation": "Houston, Texas"
    },
    {
      _id: uuidv4(),
      "name": "Indianapolis Colts",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Royal Blue",
      "secondaryColor": "White",
      "founded": 1953,
      "cityLocation": "Indianapolis, Indiana"
    },
    {
      _id: uuidv4(),
      "name": "Jacksonville Jaguars",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Teal",
      "secondaryColor": "Gold",
      "founded": 1995,
      "cityLocation": "Jacksonville, Florida"
    },
    {
      _id: uuidv4(),
      "name": "Kansas City Chiefs",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Red",
      "secondaryColor": "Gold",
      "founded": 1960,
      "cityLocation": "Kansas City, Missouri"
    },
    {
      _id: uuidv4(),
      "name": "Las Vegas Raiders",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Black",
      "secondaryColor": "Silver",
      "founded": 1960,
      "cityLocation": "Las Vegas, Nevada"
    },
    {
      _id: uuidv4(),
      "name": "Los Angeles Chargers",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Powder Blue",
      "secondaryColor": "Gold",
      "founded": 1960,
      "cityLocation": "Los Angeles, California"
    },
    {
      _id: uuidv4(),
      "name": "Los Angeles Rams",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Royal Blue",
      "secondaryColor": "Yellow",
      "founded": 1936,
      "cityLocation": "Inglewood, California"
    },
    {
      _id: uuidv4(),
      "name": "Miami Dolphins",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Aqua",
      "secondaryColor": "Orange",
      "founded": 1966,
      "cityLocation": "Miami Gardens, Florida"
    },
    {
      _id: uuidv4(),
      "name": "Minnesota Vikings",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Purple",
      "secondaryColor": "Gold",
      "founded": 1961,
      "cityLocation": "Minneapolis, Minnesota"
    },
    {
      _id: uuidv4(),
      "name": "New England Patriots",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Navy Blue",
      "secondaryColor": "Red",
      "founded": 1959,
      "cityLocation": "Foxborough, Massachusetts"
    },
    {
      _id: uuidv4(),
      "name": "New Orleans Saints",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Black",
      "secondaryColor": "Gold",
      "founded": 1967,
      "cityLocation": "New Orleans, Louisiana"
    },
    {
      _id: uuidv4(),
      "name": "New York Giants",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Royal Blue",
      "secondaryColor": "Red",
      "founded": 1925,
      "cityLocation": "East Rutherford, New Jersey"
    },
    {
      _id: uuidv4(),
      "name": "New York Jets",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Green",
      "secondaryColor": "White",
      "founded": 1959,
      "cityLocation": "East Rutherford, New Jersey"
    },
    {
      _id: uuidv4(),
      "name": "Philadelphia Eagles",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Midnight Green",
      "secondaryColor": "Silver",
      "founded": 1933,
      "cityLocation": "Philadelphia, Pennsylvania"
    },
    {
      _id: uuidv4(),
      "name": "Pittsburgh Steelers",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Black",
      "secondaryColor": "Gold",
      "founded": 1933,
      "cityLocation": "Pittsburgh, Pennsylvania"
    },
    {
      _id: uuidv4(),
      "name": "San Francisco 49ers",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Scarlet",
      "secondaryColor": "Gold",
      "founded": 1946,
      "cityLocation": "Santa Clara, California"
    },
    {
      _id: uuidv4(),
      "name": "Seattle Seahawks",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Navy Blue",
      "secondaryColor": "Action Green",
      "founded": 1976,
      "cityLocation": "Seattle, Washington"
    },
    {
      _id: uuidv4(),
      "name": "Tampa Bay Buccaneers",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": true,
      "primaryColor": "Pewter",
      "secondaryColor": "Red",
      "founded": 1976,
      "cityLocation": "Tampa, Florida"
    },
    {
      _id: uuidv4(),
      "name": "Tennessee Titans",
      "wonSuperbowl": false,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Navy Blue",
      "secondaryColor": "Columbia Blue",
      "founded": 1960,
      "cityLocation": "Nashville, Tennessee"
    },
    {
      _id: uuidv4(),
      "name": "Washington Commanders",
      "wonSuperbowl": true,
      "hasWonMultipleSuperbowls": false,
      "primaryColor": "Burgundy",
      "secondaryColor": "Gold",
      "founded": 1932,
      "cityLocation": "Landover, Maryland"
    }
  ]



//=====||=====//
//=====|GET ALL|=====//
teamsRouter.get("/", (req, res) => {
    res.send(teams)
})
//=====|GET ONE|=====//
teamsRouter.get("/:teamId", (req, res) => {
    const teamId = req.params.teamId
    const foundTeam = teams.find(team => team._id === teamId)
    res.send(foundTeam)
})
//=====|GET BY WON SUPERBOWL|=====//
teamsRouter.get('/search/wonSuperbowl', (req, res) => {
    // const haveWon = req.query.name
    const filteredTeams = teams.filter(team => team.wonSuperbowl === true)
    res.send(filteredTeams)
})

//=====|GET TEAM WHO ONLY WON 1 SUPERBOWL|=====//
teamsRouter.get('/search/wonOnlyOnce', (req, res) => {
  const haveWonOneSuperbowl = teams.filter(team => team.wonSuperbowl === true && team.hasWonMultipleSuperbowls === false)

  res.send(haveWonOneSuperbowl)
})
module.exports = teamsRouter