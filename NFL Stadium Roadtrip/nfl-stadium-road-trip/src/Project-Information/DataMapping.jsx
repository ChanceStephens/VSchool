import React from 'react';
import data from './dataModel.json';

export default function DataMapping() {
    // Destructure the necessary data from the imported JSON
    const {
        location,
        name,
        nickname,
        abbreviation,
        displayName,
        color,
        alternateColor,
        logos,
        links,
        franchise: { venue },
    } = data.team;

    // Find the specific links
    const rosterLink = links.find(link => link.rel.includes('roster'));
    const scheduleLink = links.find(link => link.rel.includes('schedule'));
    const ticketsLink = links.find(link => link.rel.includes('tickets'));

    // Render the component with the extracted data
    return (
        <div>
            <h1>{displayName}</h1>
            <p>Location: {location}</p>
            <p>Nickname: {nickname}</p>
            <p>Abbreviation: {abbreviation}</p>
            <p>Primary Color: {color}</p>
            <p>Alternate Color: {alternateColor}</p>
            <img src={logos[0].href} alt={logos[0].alt} width={logos[0].width} height={logos[0].height} />
            <p>Roster Link: <a href={rosterLink.href}>{rosterLink.text}</a></p>
            <p>Schedule Link: <a href={scheduleLink.href}>{scheduleLink.text}</a></p>
            <p>Tickets Link: <a href={ticketsLink.href}>{ticketsLink.text}</a></p>
            <p>Venue: {venue.fullName}</p>
            <p>City: {venue.address.city}</p>
            <p>State: {venue.address.state}</p>
            <p>Zip Code: {venue.address.zipCode}</p>
            <p>Grass or Turf: {venue.grass ? 'Grass' : 'Turf'}</p>
            <p>Indoor Stadium: {venue.indoor ? 'Yes' : 'No'}</p>
            <img src={venue.images[0].href} alt={venue.images[0].alt} width={venue.images[0].width} height={venue.images[0].height} />
        </div>
    );
}
