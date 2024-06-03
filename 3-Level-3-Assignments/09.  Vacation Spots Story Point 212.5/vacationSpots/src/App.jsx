import './App.css'; // Importing CSS file for styling
import Card from './Components/Card'; // Importing the Card component
import Places from './Components/Locations'; // Importing the list of places from Locations component

function App() {
    const location = Places.map(destination => { // Mapping over each destination in the Places array
        let cardStyle = {}; // Initializing an empty object for card styling
        // Setting card style based on the time of the year
        if (destination.timeToGo === "Spring") {
            cardStyle = {
                backgroundColor: "#FFA29D", // Background color for Spring
                border: "#58E859 solid 15px" // Border color for Spring
            };
        } else if (destination.timeToGo === "Summer") {
            cardStyle = {
                backgroundColor: "#F5FA55", // Background color for Summer
                border: "#0266E0 solid 15px" // Border color for Summer
            };
        } else if (destination.timeToGo === "Fall") {
            cardStyle = {
                backgroundColor: "#DDC695", // Background color for Fall
                border: "#7E0A23 solid 15px" // Border color for Fall
            };
        } else if (destination.timeToGo === "Winter") {
            cardStyle = {
                backgroundColor: "#C1F1FF", // Background color for Winter
                border: "#002E50 solid 15px" // Border color for Winter
            };
        }
        let pricey; // Variable to store the price range
        // Setting price range based on the price
        if (destination.price <= 500) {
            pricey = "$"; // Lower price range
        } else if (destination.price <= 1000) {
            pricey = "$$"; // Medium price range
        } else {
            pricey = "$$$"; // Higher price range
        }
        return (
            <Card
                key={destination.place} // Unique key for each card
                style={cardStyle} // Styling for the card
                place={destination.place} // Place name
                price={destination.price} // Price of the destination
                timeToGo={destination.timeToGo} // Time of the year to visit
                image={destination.image} // Image of the destination
                pricey={pricey} // Price range
            />
        );
    });

    return (
        <>
            {location} {/* Rendering the list of cards */}
        </>
    );
}

export default App; // Exporting the App component
