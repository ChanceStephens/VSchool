    const nfl = () => {

        const teams = [
            "Atlanta Falcons",
            "Arizona Cardinals",
            "Baltimore Ravens",
            "Buffalo Bills",
            "Carolina Panthers",
            "Chicago Bears",
            "Cincinnati Bengals",
            "Cleveland Browns",
            "Dallas Cowboys",
            "Denver Broncos",
            "Detroit Lions",
            "Green Bay Packers",
            "Houston Texans",
            "Indianapolis Colts",
            "Jacksonville Jaguars",
            "Kansas City Chiefs",
            "Las Vegas Raiders",
            "Los Angeles Chargers",
            "Los Angeles Rams",
            "Miami Dolphins",
            "Minnesota Vikings",
            "New England Patriots",
            "New Orleans Saints",
            "New York Giants",
            "New York Jets",
            "Philadelphia Eagles",
            "Pittsburgh Steelers",
            "San Francisco 49ers",
            "Seattle Seahawks",
            "Tampa Bay Buccaneers",
            "Tennessee Titans",
            "Washington Commanders"
        ]
        const teamElements = teams.map((team, index) => (
        <h1 id={team[index]}>{team}</h1>
        ))
        return teamElements
    }
    console.log(nfl())


//===============================================================================//
<select>
<option>-Select Team's Stadium-</option>
<option value="arizonacardinals">Arizona Cardinals</option>{/* STEP 12 */}
<option value="atlantafalcons">Atlanta Falcons</option>
<option value="arizonacardinals">Arizona Cardinals</option>
<option value="baltimoreravens">Baltimore Ravens</option>
<option value="buffalobills">Buffalo Bills</option>
<option value="carolinapanthers">Carolina Panthers</option>
<option value="chicagobears">Chicago Bears</option>
<option value="cincinnatibengals">Cincinnati Bengals</option>
<option value="clevelandbrowns">Cleveland Browns</option>
<option value="dallascowboys">Dallas Cowboys</option>
<option value="denverbroncos">Denver Broncos</option>
<option value="detroitlions">Detroit Lions</option>
<option value="greenbaypackers">Green Bay Packers</option>
<option value="houstonTexans">Houston Texans</option>
<option value="indianapoliscolts">Indianapolis Colts</option>
<option value="jacksonvillejaguars">Jacksonville Jaguars</option>
<option value="kansascitychiefs">Kansas City Chiefs</option>
<option value="lasvegasraiders">Las Vegas Raiders</option>
<option value="losangeleschargers">Los Angeles Chargers</option>
<option value="losangelesrams">Los Angeles Rams</option>
<option value="miamidolphins">Miami Dolphins</option>
<option value="minnesotavikings">Minnesota Vikings</option>
<option value="newenglandpatriots">New England Patriots</option>
<option value="neworleanssaints">New Orleans Saints</option>
<option value="newyorkgiants">New York Giants</option>
<option value="newyorkjets">New York Jets</option>
<option value="philadelphiaeagles">Philadelphia Eagles</option>
<option value="pittsburghsteelers">Pittsburgh Steelers</option>
<option value="sanfrancisco49ers">San Francisco 49ers</option>
<option value="seattleseahawks">Seattle Seahawks</option>
<option value="tampabaybuccaneers">Tampa Bay Buccaneers</option>
<option value="tennesseetitans">Tennessee Titans</option>
<option value="washingtoncommanders">Washington Commanders</option>
</select>




import React, { useState } from 'react';

function MyComponent() {
    const [franchise, setFranchise] = useState({
        abbreviation: "ARI",
        color: "a4113e",
        displayName: "Arizona Cardinals",
        alternateColor: "ffffff", // Initial value for alternateColor
        // Other properties...
    });

    // Setter function for updating alternate team color
    const setAlternateTeamColor = (newColor) => {
        // Create a new object with updated alternateColor
        const updatedFranchise = { ...franchise, alternateColor: newColor };
        // Update the franchise state with the new object
        setFranchise(updatedFranchise);
    };

    return (
        <div>
            {/* Render the franchise data */}
            <h1>{franchise.displayName}</h1>
            <p>Alternate Color: {franchise.alternateColor}</p>
            {/* Button to update alternate color */}
            <button onClick={() => setAlternateTeamColor("ff0000")}>Set Alternate Color to Red</button>
        </div>
    );
}

export default MyComponent;















//========================================CONTEXT CODE PRIOR TO SWITCHING CHAT GPTS SUGGESTION


useEffect(() => {
    const getTeamIdNumber = (teamName) => {                 //This function will iterate through the teamNameAndIds to retrieve the ID number
        for (let i = 0; i < teamNameAndIds.length; i++) {
            if (teamNameAndIds[i].name === teamName) {
                setTeamId(teamNameAndIds[i].id)             // Set the teamId to the number required to access the second data endpoint's info containing data needed to complete App
            } else {
                console.log("Error: Check Team Spelling")   // note to self to check if spelling of variable teamName is not correct.
            }
        }
    }
    getTeamIdNumber(teamName)                               // call the function inside the useEffect to run
}, [teamName, teamNameAndIds])                              // set the dependancies to run useEffect initially and then re-runs whenever either of them changes. This ensures that the effect always has access to the latest values of its dependencies.








import React, { createContext, useState, useEffect} from 'react'//STEP 1
import axios from 'axios'//STEP 2 In terminal: npm install axios

export const AppContext = createContext()                   //Step 3 This line of code is creating a new context in React using the createContext() function from the React library.
export const AppProvider = ({ children }) => {              //This code defines a React component named AppProvider using an arrow function syntax. The component takes a children prop, which represents the child components that will be wrapped by this provider component.

//======|Process of accessing the NFL Team's ID to use to call in seperate API to access Data needed for App|================================================================//
// teamNameAndIds will be passed to the components so they can use it to access their id number so that i can pull the data needed for thier page rendering  
const [teamNameAndIds, setTeamNameAndIds] = useState({})    // Setting state as an Object for the variable teamNameAndIds. This is retrieved through the function below 

/*  TEAM-NAME-AND-ID RETURNS:
0:{name: 'Arizona Cardinals', id: '22'}
1:{name: 'Atlanta Falcons', id: '1'}
2:{name: 'Baltimore Ravens', id: '33'}
3:{name: 'Buffalo Bills', id: '2'}
4:{name: 'Carolina Panthers', id: '29'}
5:{name: 'Chicago Bears', id: '3'}
6:{name: 'Cincinnati Bengals', id: '4'}
7:{name: 'Cleveland Browns', id: '5'}
8:{name: 'Dallas Cowboys', id: '6'}
9:{name: 'Denver Broncos', id: '7'}
10:{name: 'Detroit Lions', id: '8'}
11:{name: 'Green Bay Packers', id: '9'}
12:{name: 'Houston Texans', id: '34'}
13:{name: 'Indianapolis Colts', id: '11'}
14:{name: 'Jacksonville Jaguars', id: '30'}
15:{name: 'Kansas City Chiefs', id: '12'}
16:{name: 'Las Vegas Raiders', id: '13'}
17:{name: 'Los Angeles Chargers', id: '24'}
18:{name: 'Los Angeles Rams', id: '14'}
19:{name: 'Miami Dolphins', id: '15'}
20:{name: 'Minnesota Vikings', id: '16'}
21:{name: 'New England Patriots', id: '17'}
22:{name: 'New Orleans Saints', id: '18'}
23:{name: 'New York Giants', id: '19'}
24:{name: 'New York Jets', id: '20'}
25:{name: 'Philadelphia Eagles', id: '21'}
26:{name: 'Pittsburgh Steelers', id: '23'}
27:{name: 'San Francisco 49ers', id: '25'}
28:{name: 'Seattle Seahawks', id: '26'}
29:{name: 'Tampa Bay Buccaneers', id: '27'}
30:{name: 'Tennessee Titans', id: '10'}
31:{name: 'Washington Commanders', id: '28'}
*/
useEffect(() => {       //API Call to get the team ID
    const getTeamIds = () => {       
        // This api does not have the data needed except for the "id"'s. I need the id in order to access the data in the second API
            axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
            .then(response => {
                const arrayOfNflTeams = response.data.sports[0].leagues[0].teams// This returns an array of objects that includes "id" and "displayName"
                console.log(arrayOfNflTeams)
                const nameAndId = arrayOfNflTeams.map(valuePair => ({           // mapping the array of NFL teams to produce a key value pair of "ids" and "team names"
                    name: valuePair.team.displayName,
                    id: valuePair.team.id
                }))                                                             // Returns an object.  EXAMPLE:  0:{name: 'Arizona Cardinals', id: '22'}   
                console.log("Data retrieved successfully!", nameAndId)          
                    setTeamNameAndIds(nameAndId)                                // Sets the key:pair EXAMPLE: {name: 'Arizona Cardinals', id: '22'}   
            })
            .catch(error => {
                console.log("Error retrieving data!", error)                    // Logs any errors retrieving the data
            })
        }
            getTeamIds()
        }, [])
//===========================================================================================================================================================================//
useEffect(() => {
    const getTeamIdNumber = (teamName) => {
        const team = teamNameAndIds.find(item => item.name === teamName);
        if (team) {
            setTeamId(team.id);
        } else {
            console.log("Error: Team not found"); // Handle case when team name is not found
        }
    }
    getTeamIdNumber(teamName);
}, [teamName, teamNameAndIds]);








        useEffect(() => {
        if (teamId) {   // If teamId has any other value than false, 0, '', null, undefined, or NaN, it will be considered truthy, and the code block inside the if statement will execute.
        axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}`)
        .then(response => {
            console.log("Data retrieved Successfully", response.data.team)
            setTeamDetails(response.data.team)
        })
        .catch(error => {
            console.log("Error retrieving data!", error)
        })
    }
        }, [teamId])
        return (
            // This is the provider component created by the createContext() function earlier. It allows consuming components to subscribe to changes in the context value.
            <AppContext.Provider value={{             
                teamNameAndIds
            }}>
                {children}       {/* This is a special prop in React components that represents the child elements nested within the component. By rendering {children} within the provider, any components wrapped by <AppContext.Provider> will have access to the provided context value. */}
            </AppContext.Provider>
    )
}





//===============================ARIZONA CARDINALS CODE BEFORE CHAT GPTS SUGGESTION


import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../AppContext' // Import the context
import {useNavigate} from 'react-router-dom'; 
import axios from 'axios'

export default function ArizonaCardinals() {
//     const { teamNameAndIds } = useContext(AppContext)   // SEE README - VARIABLS - teamNameAndIds FOR REFERENCE
//     const [teamId, setTeamId] = useState('')// returns 22 for AZ// this number cross references the data in the second API I need in order to render the data I want
//     const [teamDetails, setTeamDetails] = useState({})
//     const [franchiseObject, setFranchiseObject] = useState({})
//     const [linksArray, setLinksArray] = useState([])
//     const [logosArray, setLogosArray] = useState([])
//     const [teamColor, setTeamColor] = useState('')
//     const [alternateTeamColor, setAlternateTeamColor] = useState('')


//     const teamName = 'Arizona Cardinals';                       //Will need to set teamName to NFL team's Location and Mascot as a string in each component.

//     useEffect(() => {
//         const getTeamIdNumber = (teamName) => {                 //This function will iterate through the teamNameAndIds to retrieve the ID number
//             for (let i = 0; i < teamNameAndIds.length; i++) {
//                 if (teamNameAndIds[i].name === teamName) {
//                     setTeamId(teamNameAndIds[i].id)             // Set the teamId to the number required to access the second data endpoint's info containing data needed to complete App
//                 } else {
//                     console.log("Error: Check Team Spelling")   // note to self to check if spelling of variable teamName is not correct.
//                 }
//             }
//         }
//         getTeamIdNumber(teamName)                               // call the function inside the useEffect to run
//     }, [teamName, teamNameAndIds])                              // set the dependancies to run useEffect initially and then re-runs whenever either of them changes. This ensures that the effect always has access to the latest values of its dependencies.

//         useEffect(() => {
//         if (teamId) {   // If teamId has any other value than false, 0, '', null, undefined, or NaN, it will be considered truthy, and the code block inside the if statement will execute.
//         axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}`)
//         .then(response => {
//             console.log("Data retrieved Successfully", response.data.team)
//             setTeamDetails(response.data.team)
//         })
//         .catch(error => {
//             console.log("Error retrieving data!", error)
//         })
//     }
//         }, [teamId])

        // console.log(links[5].href)
        // console.log(logos[0].href)
    // const teamAbbreviation = teamDetails.abbreviation           //  "ARI"
    // const teamAlternateColor = teamDetails.alternateColor       //  "ffffff"
    // const teamColor = teamDetails.color                         //  "a4113e"
    // const teamStateLocation = teamDetails.location              //  "Arizona"
    // const teamName = teamDetails.name                           //  "Cardinals"
    // const teamNickname = teamDetails.nickname                   //  "Cardinals"
    // const teamSlug = teamDetails.slug                           //  arizona-cardinals   // example: "arizona-cardinals"  use for HTML naming conventions such as className={teamSlug}
    // const teamVenue = teamDetails.franchise.venue               //  RETURNS: {address, fullName, images}
    // const teamVenueImageOne = teamDetails.venue.images[0]
    // const teamVenueImageTwo = teamDetails.venue.images[1].href
    // const teamEspnClubhouse = teamDetails.links[0].href
    // const teamEspnRoster = teamDetails.links[1].href
    // const teamEspnPlayStats = teamDetails.links[2].href
    // const teamEspnSchedule = teamDetails.links[3].href
    // const teamVividSeatsTickets = teamDetails.links[5].href
    // const teamEspnDraft = teamDetails.links[6].href
    // const teamEspnPlayerTransactions = teamDetails.links[7].href
    // const teamEspnPlayerInjuries = teamDetails.links[8].href
    // const teamEspnDepthChart = teamDetails.links[9].href
    // const teamLogo = teamDetails.logo[0].href
// console.log(teamVenueImageOne)








    
    return(
    <>


        </>

    )
}


        // <div 
        // className="arizonaCardinals"
        // style={{
        //     backgroundImage: `linear-Gradient(to bottom, #${alternateColor}, #${color})`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: `center`,
        //     width: '100%',
        //     height: "100vh",
        //     color:`#${alternateColor}`,
        //     WebkitTextStroke: `3px #${color}`, color: `#${alternateColor}`,
        // }}
        // >
            {/* <h1>{displayName}</h1> */}
            // <img src="https://a.espncdn.com/i/teamlogos/nfl/500/ari.png" />

        // </div>




        //===========Suggested Promise.All by Chat GPT to fix error.  Did not Work====================================
    // useEffect(() => {
    //     axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    //       .then(response => {
    //         const arrayOfNflTeams = response.data.sports[0].leagues[0].teams;
    //         const promises = arrayOfNflTeams.map(valuePair => (
    //           axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${valuePair.team.id}`)
    //         ));
      
    //         Promise.all(promises)
    //           .then(teamResponses => {
    //             const teamDetailsMap = {};
    //             teamResponses.forEach((teamResponse, index) => {
    //               const teamId = arrayOfNflTeams[index].team.id;
    //               teamDetailsMap[teamId] = teamResponse.data.team;
    //             });
    //             setTeamDetails(teamDetailsMap);
    //           })
    //           .catch(error => {
    //             console.log("Error retrieving team details!", error);
    //           });
      
    //         const nameAndId = arrayOfNflTeams.map(valuePair => ({
    //           name: valuePair.team.displayName,
    //           id: valuePair.team.id
    //         }));
    //         setTeamNameAndIds(nameAndId);
    //       })
    //       .catch(error => {
    //         console.log("Error retrieving team IDs!", error);
    //       });
    //   }, []);
      



    //=============My Original Code============================================================
    // useEffect(() => {
    //     // Fetch team IDs
    //     axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
    //         .then(response => {
    //             const arrayOfNflTeams = response.data.sports[0].leagues[0].teams;
    //             const nameAndId = arrayOfNflTeams.map(valuePair => ({
    //                 name: valuePair.team.displayName,
    //                 id: valuePair.team.id
    //             }));
    //             setTeamNameAndIds(nameAndId);

    //             // Fetch team details for each team
    //             nameAndId.forEach(team => {
    //                 axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${team.id}`)
    //                     .then(response => {
    //                         const teamDetail = response.data.team;
    //                         setTeamDetails(prevState => ({
    //                             ...prevState,
    //                             [team.id]: teamDetail // Store team details with team ID as key
    //                         }));
    //                     })
    //                     .catch(error => {
    //                         console.log("Error retrieving team details!", error);
    //                     });
    //             });
    //         })
    //         .catch(error => {
    //             console.log("Error retrieving team IDs!", error);
    //         });
    // }, []);







    //=============Cut out First Get Request and Hardcode teams Names and IDs==================
// useEffect(() => {
//     const nameAndId = {
//         'Arizona Cardinals': '22',
//         'Atlanta Falcons': '1',
//         'Baltimore Ravens': '33',
//         'Buffalo Bills': '2',
//         'Carolina Panthers': '29',
//         'Chicago Bears': '3',
//         'Cincinnati Bengals': '4',
//         'Cleveland Browns': '5',
//         'Dallas Cowboys': '6',
//         'Denver Broncos': '7',
//         'Detroit Lions': '8',
//         'Green Bay Packers': '9',
//         'Houston Texans': '34',
//         'Indianapolis Colts': '11',
//         'Jacksonville Jaguars': '30',
//         'Kansas City Chiefs': '12',
//         'Las Vegas Raiders': '13',
//         'Los Angeles Chargers': '24',
//         'Los Angeles Rams': '14',
//         'Miami Dolphins': '15',
//         'Minnesota Vikings': '16',
//         'New England Patriots': '17',
//         'New Orleans Saints': '18',
//         'New York Giants': '19',
//         'New York Jets': '20',
//         'Philadelphia Eagles': '21',
//         'Pittsburgh Steelers': '23',
//         'San Francisco 49ers': '25',
//         'Seattle Seahawks': '26',
//         'Tampa Bay Buccaneers': '27',
//         'Tennessee Titans': '10',
//         'Washington Commanders': '28'
//     };

//     Object.entries(nameAndId).forEach(([teamName, teamId]) => {   // LOOK INTO OBJECT CONSTRUCTOR
//         axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${teamId}`)
//             .then(response => {
//                 const teamDetail = response.data.team;
//                 setTeamDetails(prevState => ({
//                     ...prevState,
//                     [teamId]: teamDetail // Store team details with team ID as key
//                 }));
//             })
//             .catch(error => {
//                 console.log("Error retrieving team details!", error);
//             });
//     });
// }, []);