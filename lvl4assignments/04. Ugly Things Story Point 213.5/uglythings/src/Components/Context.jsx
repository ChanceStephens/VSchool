// import React, {useState, useEffect, createContext} from 'react'
// import axios from 'axios'

// const UglyThingsContext = createContext()

// const UglyThingsProvider = ({children}) => {
//     const [uglyCards, setUglyCards] = useState([]); //State of the Array of Ugly Things
//     const [uglyCard, setUglyCard] = useState({      //State of the Ugly thing "Card"
//         title: '',
//         description: '',
//         imgUrl: ''
//     });

//     useEffect(() => {
//         getUglyThings();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setUglyCard(prevState => ({
//             ...prevState,
//             [name]: value
//         }));
//     };

//     const handleSubmit = () => {
//         const { title, description, imgUrl } = uglyCard;
//         const newUglyThing = {
//             title: title,
//             description: description,
//             imgUrl: imgUrl
//         };
//         axios.post('https://api.vschool.io/chancestephens/thing/', newUglyThing)
//             .then(response => {
//                 console.log('Post request successful:', response.data);
//                 // Optionally, you can reset the form fields after successful submission
//                 setUglyCard({
//                     title: '',
//                     description: '',
//                     imgUrl: ''
//                 });
//                 // Fetch the updated list of ugly things after submission
//                 getUglyThings();
//             })
//             .catch(error => {
//                 console.error('Error making post request:', error);
//             });
//     };
//     return(
//         <UglyThingsContext.Provider value={{ 
//             uglyCards, 
//             setUglyCards, 
//             uglyCard, 
//             setUglyCard, 
//             handleChange, 
//             handleSubmit 
//         }}>
//             {children}
//         </UglyThingsContext.Provider>
//     )
// }

// export {UglyThingsContext, UglyThingsProvider}
