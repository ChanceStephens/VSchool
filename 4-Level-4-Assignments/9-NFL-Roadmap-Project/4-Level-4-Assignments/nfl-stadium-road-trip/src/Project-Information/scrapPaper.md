Great, thanks for specifying! Here's a breakdown of the parts you're interested in and how to access them in your React app:

1. **Location:** `teamData.location`
2. **Team Name:** `teamData.name`
3. **Team Nickname:** `teamData.nickname`
4. **Abbreviation:** `teamData.abbreviation`
5. **Display Name:** `teamData.displayName`
6. **Primary Color:** `teamData.color`
7. **Alternate Color:** `teamData.alternateColor`
8. **Team Logo Href:** `teamData.logos[0].href` (assuming you want the first logo)
9. **Logo Width:** `teamData.logos[0].width`
10. **Logo Height:** `teamData.logos[0].height`
11. **Logo Alt Text:** `teamData.logos[0].alt`
12. **Roster Link Href:** `teamData.links.find(link => link.rel.includes('roster')).href`
13. **Schedule Link Href:** `teamData.links.find(link => link.rel.includes('schedule')).href`
14. **Tickets Link Href:** `teamData.links.find(link => link.rel.includes('tickets')).href`
15. **Venue ID:** `teamData.franchise.venue.id`
16. **Venue Name:** `teamData.franchise.venue.fullName`
17. **Venue City:** `teamData.franchise.venue.address.city`
18. **Venue State:** `teamData.franchise.venue.address.state`
19. **Venue Zip Code:** `teamData.franchise.venue.address.zipCode`
20. **Grass or Turf:** `teamData.franchise.venue.grass`
21. **Indoor Stadium:** `teamData.franchise.venue.indoor`
22. **Venue Image Href:** `teamData.franchise.venue.images[0].href` (assuming you want the first image)
23. **Image Width:** `teamData.franchise.venue.images[0].width`
24. **Image Height:** `teamData.franchise.venue.images[0].height`
25. **Image Alt Text:** `teamData.franchise.venue.images[0].alt`

You can use these references to access and display the specific parts of the data model you're interested in within your React components. Let me know if you need further clarification or assistance!



<!-- { API TO GET ID

    "id": "22",
    "uid": "s:20~l:28~t:22",
    "slug": "arizona-cardinals",
    "abbreviation": "ARI",
    "displayName": "Arizona Cardinals",
    "shortDisplayName": "Cardinals",
    "name": "Cardinals",
    "nickname": "Cardinals",
    "location": "Arizona",
    "color": "a4113e",
    "alternateColor": "ffffff",
    "isActive": true,
    "isAllStar": false,
    "logos": [
        {
            "href": "https://a.espncdn.com/i/teamlogos/nfl/500/ari.png",
            "alt": "",
            "rel": [
                "full",
                "default"
            ],
            "width": 500,
            "height": 500
        },
        {
            "href": "https://a.espncdn.com/i/teamlogos/nfl/500-dark/ari.png",
            "alt": "",
            "rel": [
                "full",
                "dark"
            ],
            "width": 500,
            "height": 500
        },
        {
            "href": "https://a.espncdn.com/i/teamlogos/nfl/500/scoreboard/ari.png",
            "alt": "",
            "rel": [
                "full",
                "scoreboard"
            ],
            "width": 500,
            "height": 500
        },
        {
            "href": "https://a.espncdn.com/i/teamlogos/nfl/500-dark/scoreboard/ari.png",
            "alt": "",
            "rel": [
                "full",
                "scoreboard",
                "dark"
            ],
            "width": 500,
            "height": 500
        }
    ],
    "links": [
        {
            "language": "en-US",
            "rel": [
                "clubhouse",
                "desktop",
                "team"
            ],
            "href": "https://www.espn.com/nfl/team/_/name/ari/arizona-cardinals",
            "text": "Clubhouse",
            "shortText": "Clubhouse",
            "isExternal": false,
            "isPremium": false,
            "isHidden": false
        },
        {
            "language": "en-US",
            "rel": [
                "roster",
                "desktop",
                "team"
            ],
            "href": "http://www.espn.com/nfl/team/roster/_/name/ari/arizona-cardinals",
            "text": "Roster",
            "shortText": "Roster",
            "isExternal": false,
            "isPremium": false,
            "isHidden": false
        },
        {
            "language": "en-US",
            "rel": [
                "stats",
                "desktop",
                "team"
            ],
            "href": "http://www.espn.com/nfl/team/stats/_/name/ari/arizona-cardinals",
            "text": "Statistics",
            "shortText": "Statistics",
            "isExternal": false,
            "isPremium": false,
            "isHidden": false
        },
        {
            "language": "en-US",
            "rel": [
                "schedule",
                "desktop",
                "team"
            ],
            "href": "https://www.espn.com/nfl/team/schedule/_/name/ari",
            "text": "Schedule",
            "shortText": "Schedule",
            "isExternal": false,
            "isPremium": false,
            "isHidden": false
        },
        {
            "language": "en-US",
            "rel": [
                "tickets",
                "desktop",
                "team"
            ],
            "href": "https://www.vividseats.com/arizona-cardinals-tickets--sports-nfl-football/performer/40?wsUser=717",
            "text": "Tickets",
            "shortText": "Tickets",
            "isExternal": true,
            "isPremium": false,
            "isHidden": false
        },
        {
            "language": "en-US",
            "rel": [
                "depthchart",
                "desktop",
                "team"
            ],
            "href": "https://www.espn.com/nfl/team/depth/_/name/ari",
            "text": "Depth Chart",
            "shortText": "Depth Chart",
            "isExternal": false,
            "isPremium": false,
            "isHidden": false
        }
    ]
} -->

franchise: 
abbreviation:"ARI"
color:"a4113e"
displayName:"Arizona Cardinals"
id:"22"
location:"Arizona"
name:"Cardinals"
nickname:"Cardinals"
slug:"arizona-cardinals"
<!-- VENUE -->
venue:
    <!-- VENUE ADDRESS -->
    address: 
        city:"Glendale"
        state:"AZ"
        zipCode:"85305"
        <!-- VENUE NAME -->
    fullName:"State Farm Stadium"
    grass:true
    id:"3970"
    <!-- VENUE IMAGES -->
    images: 
        0:
            alt:""
            height:1125
            href:"https://a.espncdn.com/i/venues/nfl/day/3970.jpg"
            rel:(2) ['full', 'day']
            width:2000
        1: 
            alt:""
            height:1125
            href:"https://a.espncdn.com/i/venues/nfl/day/interior/3970.jpg"
            rel:(3) ['full', 'day', 'interior']
            width:2000
links: 
<!-- ESPN TEAM PAGE -->
0:
{language: 'en-US', rel: Array(3), href: 'https://www.espn.com/nfl/team/_/name/ari/arizona-cardinals', text: 'Clubhouse', shortText: 'Clubhouse', …}
<!-- ESPN ROSTER PAGE -->
1: 
{language: 'en-US', rel: Array(3), href: 'http://www.espn.com/nfl/team/roster/_/name/ari/arizona-cardinals', text: 'Roster', shortText: 'Roster', …}
<!-- EPSN PLAYER STATS -->
2: 
{language: 'en-US', rel: Array(3), href: 'http://www.espn.com/nfl/team/stats/_/name/ari/arizona-cardinals', text: 'Statistics', shortText: 'Statistics', …}
<!-- ESPN TEAM SCHEDULE -->
3: 
{language: 'en-US', rel: Array(3), href: 'https://www.espn.com/nfl/team/schedule/_/name/ari', text: 'Schedule', shortText: 'Schedule', …}
<!-- VIVID SEATS PURCHASE TICKETS -->
5: 
{language: 'en-US', rel: Array(3), href: 'https://www.vividseats.com/arizona-cardinals-tickets--sports-nfl-football/performer/40?wsUser=717', text: 'Tickets', shortText: 'Tickets', …}
<!-- ESPN TEAM DRAFT -->
6: 
{language: 'en-US', rel: Array(3), href: 'https://www.espn.com/nfl/draft/teams/_/name/ari/arizona-cardinals', text: 'Draft Picks', shortText: 'Draft Picks', …}
<!-- ESPN TEAM TRANSACTIONS -->
7: 
{language: 'en-US', rel: Array(3), href: 'https://www.espn.com/nfl/team/transactions/_/name/ari', text: 'Transactions', shortText: 'Transactions', …}
<!-- ESPN TEAM PLAYER INJURIES -->
8: 
{language: 'en-US', rel: Array(3), href: 'https://www.espn.com/nfl/team/injuries/_/name/ari', text: 'Injuries', shortText: 'Injuries', …}
<!-- ESPN TEAM DEPTH CHART -->
9: 
{language: 'en-US', rel: Array(3), href: 'https://www.espn.com/nfl/team/depth/_/name/ari', text: 'Depth Chart', shortText: 'Depth Chart', …}
<!-- TEAM LOGO -->
logos:
0:
alt
: 
""
height
: 
500
href
: 
"https://a.espncdn.com/i/teamlogos/nfl/500/ari.png"
lastUpdated
: 
"2018-06-05T12:11Z"
rel
: 
(2) ['full', 'default']
width
: 
500


