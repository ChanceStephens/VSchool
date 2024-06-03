import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [teamNameAndIds, setTeamNameAndIds] = useState([])    // Setting state as an Object for the variable teamNameAndIds. This is retrieved through the function below 
    const [teamDetails, setTeamDetails] = useState([]);

 useEffect(() => {
        // Fetch team IDs
        axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
            .then(response => {
                const arrayOfNflTeams = response.data.sports[0].leagues[0].teams;
                const nameAndId = arrayOfNflTeams.map(valuePair => ({
                    name: valuePair.team.displayName,
                    id: valuePair.team.id
                }));
                setTeamNameAndIds(nameAndId);

                // Fetch team details for each team
                nameAndId.forEach(team => {
                    axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${team.id}`)
                        .then(response => {
                            const teamDetail = response.data.team;
                            setTeamDetails(prevState => ({
                                ...prevState,
                                [team.id]: teamDetail // Store team details with team ID as key
                            }));
                        })
                        .catch(error => {
                            console.log("Error retrieving team details!", error);
                        });
                });
            })
            .catch(error => {
                console.log("Error retrieving team IDs!", error);
            });
    }, [teamDetails]);

//     useEffect(() => {
//         // Fetch team IDs
//         axios.get('http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams')
//             .then(response => {
//                 const arrayOfNflTeams = response.data.sports[0].leagues[0].teams;
//                 const nameAndId = arrayOfNflTeams.map(valuePair => ({
//                     name: valuePair.team.displayName,
//                     id: valuePair.team.id
//                 }));
//                 setTeamNameAndIds(nameAndId);
//                 console.log("test")

//             })
//             .catch(error => {
//                 console.log("Error retrieving team IDs!", error);
//             });
//         }, []);
//         // Fetch team details for each team
//   useEffect(()=> {
//     // console.log(teamNameAndIds)
//     teamNameAndIds.forEach(team => {
//         axios.get(`http://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${team.id}`)
//         // .then(res => console.log(res.data))
//             .then(response => {
//                 const teamDetail = response.data;
//                 // console.log("individualDetail ", teamDetail)
//                 setTeamDetails(prevState => {
//                     return [
//                         ...prevState,
//                          teamDetail // Store team details with team ID as key
//                     ]
//                 });
//             })
//             .catch(error => {
//                 console.log("Error retrieving team details!", error);
//             });
//         });
// }, [teamNameAndIds])      
//             console.log("teamDetails: ",teamDetails)
//             console.log("teamNameandIds: ",teamNameAndIds)
    return (
        <AppContext.Provider value={{ teamDetails }}>
            {children}
        </AppContext.Provider>
    );
};

