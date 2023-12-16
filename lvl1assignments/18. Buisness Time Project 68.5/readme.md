# Requirements

Create a website for your new business that is well-styled, responsive, and includes at least the following items:

- Inline/Block elements
- Divs & spans
- Images
- List (navigation bar can count as a "list")
- Headers/paragraphs
- Semantic HTML ([HTML 5 new tags](http://www.w3schools.com/html/html5_new_elements.asp))
- CSS Box model (margin, padding, border, width/height)
- Responsive (Media queries, Flexbox, CSS Grid, or any combination of the above)
- Multiple HTML pages, linked

==========================================================
-   If the file is in a subdirectory start with '../' 
    (two periods) in the quotations inside parynthesis.
    To link a parent directory or file use ../../ 
    (you can repeat this until you are in the directory
    of your choice)  
==========================================================
- Use this to set the background of the page to cover 
    the entire page once and not move as user scrolls.

body {
    background-image: url('../');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
==========================================================
-   A boiler plate for my website
-   Using the same technique to navigate directories
    place the destination file in the quotation marks.

<!DOCTYPE html>
<html>
<head>   
    <title>A Chance To Travel</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navBar">        
        <div class="navigation">Navigation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
        <div class="navDropContainer">
            <div class="navDrop">
                <div class="navDropContent">
                    <a href="../../AChanceToTravel.html">Home</a>
                    <a href="../blackPearl/BlackPearl.html">Caribbean Cruise On The Black Pearl</a>
                    <a href="../deathStar/DeathStar.html">Death Star Experience</a>
                    <a href="../hogwarts/Hogwarts.html">Hogwarts Getaway</a>
                    <a href="../neverland/Neverland.html">Neverland Adventure</a>
                    <a href="../pandora/Pandora.html">Pandora Expedition</a>
                    <a href="../tatooine/Tatooine.html">Tatooine Odyssey</a>
                    <a href="../theContinental/TheContinental.html">Continental Retreat</a>
                    <a href="../theMatrix/TheMatrix.html">Matrix Voyage</a>
                    <a href="../theOasis/TheOasis.html">Oasis Quest</a>
                    <a href="../wakanda/Wakanda.html">Wakanda Enclave</a>
                </div>
            </div>
        </div>
    </nav>
    <script src="app.js"></script>
</body>
</html>

==========================================================
-   My CSS Base Style
body {
    background-image: url('../blackPearl/blackPearl/captain-sparrows-black-pearl-pirate-ship-1280x720.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    font-family:cursive;
}

.navBar {
    position: fixed;
    top: 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding: 0 10px;
    font-size: 20px;
    background: linear-gradient(to right, rgba(97, 156, 158, .6), rgba(0, 0, 0, 0));
    width: 100%;
    z-index: 1000;
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: start;
    height: 40px;
    background-color: rgba(149, 196, 188, 0);
    border-width: inherit;
    font-size: 20px;
    font-weight: bold;
    
}

.navDropContainer {
    display: flex;
    position: absolute;
    top: 100%;
    left: 0;
    /* background-color: rgba(97, 156, 158, .5); */
    background: linear-gradient(to right, rgba(97, 156, 158, .6), rgba(0, 0, 0, 0));
    flex-direction: column;
}

.navDrop {
    display: inline-flex;
    
}

a {
    display: block;
    border-radius: 10px;
    margin: 3px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(0, 0, 0);
    padding: 4px;
    text-decoration: none;    
}
==========================================================
-   Media Query Sizes
@media screen(max-width: 430px) {

}
@media screen(max-width: 1024px) {

}
@media screen(max-width: 1920px) {

}
==========================================================
-   My JS Base Code


document.addEventListener(`DOMContentLoaded`, () => {
    const navDropButton = document.querySelector(`.navigation`);
    const navList = document.querySelector(`.navDropContent`); 
    const navLinks = document.querySelectorAll('.navDropContent a');

    navList.style.display = `none`;

    navDropButton.addEventListener(`mouseenter`, () => {
        navList.style.display = `block`; 
        navDropButton.style.backgroundColor = `rgb(25, 194, 186)`;
        navDropButton.style.borderRadius = '10px';
    });
    navDropButton.addEventListener(`mouseleave`, () => {
        navList.style.display = `none`;
        navDropButton.style.backgroundColor = ``;  
    });

    navList.addEventListener(`mouseenter`, () => {
        navList.style.display = `block`;
    });
    navList.addEventListener(`mouseleave`, () => {
        navList.style.display = `none`;
    });

    navLinks.forEach((link) => {
        link.addEventListener(`mouseenter`, () => {
            link.style.backgroundColor = `rgb(25, 194, 186)`;
        });
        link.addEventListener(`mouseleave`, () => {
            link.style.backgroundColor = ``;
        });
    })    
});
==========================================================
Set sail for the adventure of a lifetime and become a true pirate of the Caribbean on this one-of-a-kind cruise experience! Argh, matey! 🏴‍☠️
==========================================================

Presenting the "Star Wars: Death Star Experience"!

Description:
Prepare for an epic journey to a galaxy far, far away with our exclusive "Star Wars: Death Star Experience." You'll be transported to the iconic Death Star, where the Galactic Empire's most fearsome weapon becomes the ultimate destination for thrill-seekers and Star Wars enthusiasts.

:


















 🌌🚀
==========================================================
 🧙‍♂️🦉🏰
==========================================================
Welcome to the enchanting "Neverland Adventure"!

Description:
Embark on a journey to the whimsical world of Neverland, inspired by the classic tale of Peter Pan and Wendy. Leave the ordinary world behind and let your imagination take flight as you enter a realm where time stands still, and adventure knows no bounds.

Exciting Activities:

Fly with Peter Pan: Experience the thrill of flight as you soar above Neverland with Peter Pan and the Lost Boys. Use fairy dust to take to the skies.

Island Picnic: Join Peter Pan and his friends for a delightful picnic on the shores of Mermaid Lagoon. Enjoy magical feasts and listen to mermaid songs.

The Lost Boys' Treehouse: Visit the famous treehouse of the Lost Boys and hear stories of their daring escapades. Share tales of your own adventures with this lively group.

Fairy Forest: Explore the enchanting Fairy Forest, home to Tinker Bell and her fairy companions. Witness the magic of fireflies and the beauty of glowing flowers.

The Pirate Ship: Encounter Captain Hook and his mischievous crew on the Jolly Roger. Engage in epic pirate battles and explore the hidden treasures of the ship.

Swim with Mermaids: Dive into the crystal-clear waters of Mermaid Lagoon and interact with playful and mischievous mermaids. They might even teach you a mermaid song.

Crocodile Creek: Cross Crocodile Creek carefully, but beware of the lurking crocodile! Test your courage as you navigate this treacherous waterside.

Tiger Lily's Camp: Visit Tiger Lily's camp deep in the heart of the island. Learn about Native American traditions, explore the camp, and enjoy storytelling by the campfire.

The Lost Boys' Hideout: Explore the whimsical hideout of the Lost Boys and participate in playful games and adventures they've designed.

Neverland Evening: Conclude your day with a captivating evening under the stars, featuring a magical firefly display and a chance to make a wish upon a star.

Embrace the spirit of adventure and eternal youth in Neverland. Join us for the Neverland Adventure and let your dreams take flight! 🌟🧚‍♂️🦜
==========================================================
Step into the mesmerizing world of "Pandora Expedition" inspired by James Cameron's Avatar.

**Description:**
Prepare for an otherworldly journey to the stunning moon of Pandora, a land of bioluminescent forests, towering Hallelujah Mountains, and incredible biodiversity. Immerse yourself in this lush and vibrant ecosystem, unlike anything seen on Earth.

**Exciting Activities:**
1. **Hallelujah Mountain Hike:** Embark on a thrilling hike to the iconic floating Hallelujah Mountains. Witness the breathtaking beauty of Pandora from above.

2. **Bioluminescent Nightwalk:** Experience the ethereal glow of Pandora's bioluminescent flora and fauna as you take a captivating night walk through the enchanted forest.

3. **Avatar Interaction:** Interact with the Na'vi, Pandora's indigenous people. Learn about their culture, language, and way of life, and even partake in their unique rituals.

4. **Floating Mountains Flight:** Soar through the skies on a banshee, one of Pandora's native creatures, for a heart-pounding flight among the floating mountains.

5. **Zip Lining Over the Rainforest:** Get your adrenaline pumping as you zip line over the lush rainforest canopy, taking in the vibrant colors and exotic wildlife.

6. **Na'vi Village Exploration:** Visit a traditional Na'vi village and immerse yourself in their customs, from traditional dancing to archery and crafting.

7. **Aquatic Adventure:** Dive into the crystal-clear waters of Pandora to discover the diverse marine life, including fascinating aquatic creatures and vibrant coral reefs.

8. **Botanical Garden Tour:** Wander through the bioluminescent botanical gardens and learn about Pandora's unique plant species and their fascinating properties.

9. **Nighttime Drum Circle:** Join a traditional Na'vi drum circle under the glowing moonlight and experience the harmonious rhythms of Pandora.

10. **Avatar Rite of Passage:** Complete your journey with the Avatar Rite of Passage, a thrilling experience that connects you with Pandora's wonders.

Experience the magic of Pandora, a place where the natural world comes alive with unparalleled beauty. The Pandora Expedition awaits, offering a journey that is truly out of this world! 🌌🌿🌸
==========================================================
Welcome to the "Tatooine Odyssey" in a galaxy far, far away!

**Description:**
Prepare to journey to Tatooine, a remote desert planet in the outer rim territories, known for its twin suns and iconic sand dunes. This is the very same desert world where heroes and legends were born. As you step onto Tatooine's sandy terrain, you'll feel the presence of the Force and the promise of adventure.

**Exciting Activities:**
1. **Podracing:** Join the exhilarating sport of podracing, made famous by Anakin Skywalker. Zoom through the desert at breakneck speeds in your very own podracer.

2. **Mos Eisley Cantina:** Visit the infamous Mos Eisley Cantina and enjoy exotic beverages while meeting intriguing characters from across the galaxy. Be cautious; you never know who you might encounter.

3. **Jawa Encounter:** Interact with the curious and resourceful Jawas as they show you their scavenging skills. You can even trade some items to discover unique Tatooine treasures.

4. **Sand Dune Sledding:** Slide down the towering sand dunes of Tatooine for an adrenaline rush and breathtaking views of the desert landscape.

5. **Moisture Farm Visit:** Experience the life of a moisture farmer as you visit a functioning moisture farm. Learn about the importance of water on this arid world.

6. **Tusken Raider Encounter:** Encounter the mysterious Tusken Raiders in their desert domain. Learn about their culture and way of life, and gain a deeper understanding of this enigmatic group.

7. **Bantha Ride:** Explore the vast desert landscape on a Bantha, the native creature of Tatooine. Marvel at the unique flora and fauna.

8. **Sarlacc Pit Exploration:** Visit the site of the Sarlacc Pit, where you can learn about its unique ecosystem and the stories of those who've faced it.

9. **Lars Homestead Tour:** Visit the iconic Lars Homestead, where Luke Skywalker was raised. Learn about the Skywalker family's history and legacy.

10. **Stargazing at Binary Suns:** Conclude your Tatooine Odyssey with a mesmerizing evening of stargazing beneath Tatooine's binary suns, where the Force flows through every grain of sand.

Journey to Tatooine and embrace the spirit of adventure in this iconic Star Wars setting. The Tatooine Odyssey is your chance to step into the epic story of the galaxy's most legendary desert planet! 🌌🪐🌞
==========================================================
Welcome to "The Continental Retreat" – an exclusive sanctuary for the world's most sophisticated assassins!

**Description:**
Step into the world of high-stakes intrigue, thrilling action, and the hidden underworld of professional assassins. The Continental Retreat is a place where the elite gather to plan, relax, and strategize. Located in the heart of the city, this luxurious establishment caters to the world's most skilled contract killers.

**Exciting Activities:**
1. **Assassin's Gala:** Attend an exclusive gala attended by the world's top assassins. The evening is filled with intrigue, high-stakes deals, and concealed weaponry, all within the utmost elegance and sophistication.

2. **Weaponry Workshops:** Sharpen your skills with workshops dedicated to the art of weaponry. Learn the techniques and strategies employed by the most renowned assassins.

3. **Bulletproof Tailoring:** Get fitted for custom-tailored, bulletproof suits and eveningwear. You'll be both stylish and protected.

4. **Target Practice:** Visit the underground shooting range, where you can practice with an extensive collection of firearms under the guidance of experienced marksmen.

5. **Invisible Ink Messages:** Participate in a secret messaging workshop, where you'll learn to write and decode messages using invisible ink.

6. **Lobby Lounge Conversations:** Engage in intriguing conversations with fellow guests and discover the intricate stories and secrets that surround the world of assassins.

7. **The Secret Speakeasy:** Access the hidden speakeasy bar within the Continental. Enjoy rare, imported beverages and connect with like-minded individuals.

8. **Marked for Life Tattoo Parlor:** Get inked with the iconic "Blood Oath" marker tattoo, signifying your membership in this exclusive world.

9. **The Continental Network:** Learn about the vast network of the Continental, enabling you to access resources, support, and information from fellow members worldwide.

10. **Choreographed Combat:** Experience choreographed combat training, where you can learn the art of hand-to-hand combat in a safe and controlled environment.

The Continental Retreat offers an unparalleled glimpse into the secret world of professional assassins. Be prepared for an unforgettable adventure where every corner may hide a hidden assassin or a thrilling secret waiting to be revealed.
==========================================================
Welcome to "Matrix Voyage" – a mind-bending journey into the realm of reality and illusion.

**Description:**
Matrix Voyage is an extraordinary experience that blurs the lines between what's real and what's simulated. Step into a world where you can challenge the boundaries of your own reality, just like the iconic characters of "The Matrix."

**Exciting Activities:**
1. **Simulation Training:** Train in a state-of-the-art simulation chamber that allows you to bend the laws of physics and perform gravity-defying stunts, just like Neo.

2. **Hacker's Den:** Join a team of skilled hackers in a secret den where you can learn to code, crack codes, and navigate the digital world with unparalleled skills.

3. **Bullet-Dodging Workshops:** Practice the art of dodging bullets, just like the famous "bullet time" scenes from the movies.

4. **Martial Arts Mastery:** Train with experts in martial arts, learning the fighting styles that made the characters of "The Matrix" legendary.

5. **The Red Pill Challenge:** Embark on a journey to uncover the truth about reality. Will you take the red pill and see how deep the rabbit hole goes?

6. **Virtual Reality Adventures:** Dive into immersive virtual reality experiences that let you explore the Matrix universe and face formidable challenges.

7. **Matrix Philosophy Discussions:** Engage in thought-provoking discussions about the nature of reality, consciousness, and human existence.

8. **Agent Showdown:** Test your skills against "Agents" in simulated showdowns, reenacting iconic scenes from the movies.

9. **Kung Fu Cinema Night:** Enjoy movie nights featuring classic martial arts films and "The Matrix" trilogy.

10. **Oracle's Insights:** Visit the Oracle and receive personalized insights and predictions about your future.

Matrix Voyage is a journey that transcends the boundaries of the ordinary, offering you a glimpse into a world where nothing is as it seems. Challenge your perception of reality and awaken your inner hero in this mind-bending adventure.
==========================================================
Welcome to "Oasis Quest" – a thrilling adventure within the virtual world of the OASIS from "Ready Player One."

**Description:**
Oasis Quest is an immersive journey into the OASIS, a vast virtual universe filled with endless possibilities. Enter a world where you can be anyone, go anywhere, and do anything. It's a place of boundless adventure and untold treasures.

**Exciting Activities:**
1. **Avatar Creation:** Customize your own virtual avatar, choosing from countless options to create a unique digital persona.

2. **Hunt for Easter Eggs:** Embark on a quest to discover hidden Easter eggs and challenges scattered throughout the OASIS. Solve riddles, overcome obstacles, and claim your rewards.

3. **Battle in the Arena:** Test your combat skills in epic virtual battles. Challenge other players in thrilling arena fights, using an arsenal of futuristic weapons.

4. **Race in the DeLorean:** Hop into the iconic DeLorean time machine and race against other players in heart-pounding competitions that echo the movie's famous race.

5. **Visit the Oasis Cities:** Explore meticulously recreated OASIS cities, from the bustling Columbus to the neon-lit city of IOI. Dive into the unique culture and landscapes of each city.

6. **Oasis Nightlife:** Experience the OASIS's vibrant nightlife, with virtual dance clubs, live music, and social hubs where you can meet players from around the world.

7. **Virtual Art Galleries:** Explore virtual art galleries featuring creations from talented players. Dive into art exhibitions, showcasing stunning digital artwork.

8. **Hang Out at Aech's Garage:** Visit Aech's famous garage, a hub of virtual community and a place to discover rare treasures and relics.

9. **Ready Player One Challenges:** Face iconic challenges from the novel and the movie, including the recreation of key scenes and puzzles.

10. **Forge Alliances:** Form alliances with other players to tackle complex quests and uncover the secrets of the OASIS.

Oasis Quest is a journey into a world where the limits of reality no longer apply. It's a place where you can be a hero, a racer, an explorer, or anything you desire. Explore, battle, and discover the wonders of the OASIS, all from the comfort of your own virtual avatar.
==========================================================
Welcome to the "Wakanda Enclave" – an extraordinary adventure into the mysterious and technologically advanced nation of Wakanda as seen in "Black Panther."

**Description:**
Wakanda Enclave offers you a unique opportunity to explore the hidden kingdom of Wakanda, a land of innovation, tradition, and unmatched technological prowess. Discover the secrets of this fictional African utopia and partake in experiences that celebrate the culture and technology of Wakanda.

**Exciting Activities:**
1. **Wakandan Technology Showcase:** Witness cutting-edge Wakandan technology, including vibranium-powered inventions, holographic displays, and advanced weaponry.

2. **Vibranium Mining Expedition:** Embark on a thrilling expedition into the heart of Wakanda to witness the mining of the rare and powerful vibranium resource.

3. **Panther Training:** Train in the ways of the Dora Milaje and acquire combat skills from the legendary warriors of Wakanda.

4. **Traditional Dance and Music:** Immerse yourself in the vibrant culture of Wakanda with traditional dance and music performances that showcase the nation's rich heritage.

5. **Ceremonial Rituals:** Participate in Wakandan ceremonial rituals, learning about the spiritual practices and customs of this remarkable nation.

6. **Royal Archives Visit:** Explore the Royal Archives, a repository of knowledge and history, housing the wisdom and secrets of generations.

7. **Wakandan Cuisine:** Savor the flavors of Wakanda with a taste of its delicious cuisine, including traditional dishes with a modern twist.

8. **Panther Habit Experience:** Try on a replica of the Black Panther's iconic suit, complete with its vibranium capabilities.

9. **Marketplace Exploration:** Stroll through a bustling Wakandan marketplace filled with crafts, art, and unique products inspired by the nation's culture.

10. **Wakanda Outreach:** Learn about the nation's role in outreach and humanitarian efforts, embodying its principles of sharing knowledge and resources with the world.

Wakanda Enclave is a journey into a world of advanced technology, culture, and tradition, all inspired by the iconic nation of Wakanda. Immerse yourself in the splendor of this fictional African kingdom, and experience the legacy of the Black Panther.
==========================================================
**"A Chance To Travel" - Your Gateway to Extraordinary Adventures!**

Welcome to a world of limitless possibilities and unforgettable journeys. At "A Chance To Travel," we're not just a travel agency; we're your passport to the extraordinary. Imagine embarking on adventures beyond your wildest dreams, venturing into the realms of imagination and fiction.

**Our Offerings:**

🌴 **Pirates of the Caribbean Cruise:** Sail the high seas just like Captain Jack Sparrow. Experience the thrill of pirate life, indulge in tropical escapades, and seek hidden treasures while reliving the magic of the Caribbean.

🚀 **Star Wars: The Death Star Experience:** Have you ever dreamed of visiting a galaxy far, far away? Immerse yourself in the epic Star Wars universe with a tour of the infamous Death Star. Feel the Force and explore this iconic space station like never before.

🏰 **Hogwarts Getaway:** For all the aspiring witches and wizards, "A Chance To Travel" offers an enchanting journey to Hogwarts School of Witchcraft and Wizardry. Experience the magic of the wizarding world, attend classes, and enjoy Quidditch matches in a land of spells and enchantments.

🏝️ **Neverland Adventure:** Escape to the whimsical world of Peter Pan, where age is just a number and adventure knows no bounds. Explore the lush landscapes of Neverland, meet Tinker Bell, and let your imagination take flight.

🌿 **Pandora Expedition:** Journey to the mystical planet of Pandora, inspired by James Cameron's Avatar. Witness the beauty of bioluminescent forests, ride on majestic banshees, and connect with the Na'vi culture.

🌅 **Tatooine Odyssey:** Step foot on the desert planet Tatooine from the Star Wars saga. Roam the iconic dunes, visit moisture farms, and experience the desert planet's unique charm and mystique.

🏨 **The Continental Retreat:** Dive into the world of John Wick and experience the luxury and intrigue of The Continental. Stay in lavish hotels, mingle with the world's deadliest assassins, and embark on secret missions.

🌀 **Matrix Voyage:** Red pill or blue pill? Choose your path and enter the Matrix. Experience the mind-bending reality of the Matrix universe, where nothing is as it seems, and you can bend the rules of physics.

🕶️ **Oasis Quest:** Ready to embark on a virtual adventure? Step into the immersive world of the OASIS from Ready Player One. Solve puzzles, participate in epic quests, and explore a virtual reality like no other.

🌍 **Wakanda Enclave:** In the heart of Africa lies the technologically advanced nation of Wakanda. Join "A Chance To Travel" for a glimpse into this hidden paradise, explore the vibranium-rich landscapes, and immerse yourself in the Wakandan culture.

Each of our exclusive adventures is carefully curated to bring your favorite fictional worlds to life, ensuring an experience that is both thrilling and unique. So, why wait? With "A Chance To Travel," the extraordinary awaits, and the ordinary is left far behind. Book your passage to wonder and let your imagination run wild!
==========================================================

==========================================================

==========================================================

==========================================================
