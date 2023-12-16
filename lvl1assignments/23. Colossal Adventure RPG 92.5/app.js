const readline = require("readline-sync");
/*==================================================================|PLAYERS NAME: Story Point 83|================================================*/     
const name = readline.question("Hey there! What is your name, survivor? ");
// const name = "Chance";

/*******************************************************************|PLAYER RESPONSES|**************************************************/
const response = [
    "Ummmmm...NOPE!",
    "Time to break my personal record for the fastest retreat in history!",
    "I'm out like the lights with a past-due light bill!",
    "My brave meter just hit zero, so I'll catch ya on the flip side!",
    "This looks like a job for Captain Nope, See Ya!",
    "If 'nope' were a currency, I'd be a millionaire right about now.",
    "I'm out like a candle in a hurricane!",
    "I'm out of here faster than a cat with its tail on fire!",
    "Time to pull a Houdini and disappear. Abracadabra, I'm gone!",
    "I've got a one-way ticket to Nopeville, and I'm boarding the first train outta here!",
    "If avoiding danger were an Olympic sport, I'd be a gold medalist!",
    "I'm leaving so fast, even Google Maps can't keep up.",
    "Time to break the land-speed record for running away. Usain Bolt, eat your heart out!",
    "My bravery just did a backflip and landed on 'nope.' Sayonara suckaaaah.",
    "I'm leaving faster than a crooked politician dodging indictment!",
    "I'll be gone so fast, even my shadow won't keep up!",
    "I'm out of here faster than a greased pig at the county fair!",
    "My escape will be more flawless than a cat dodging water!",
    "I'm gone faster than a coupon for free beer!",
    "I'm leaving quicker than a senior on the last day of school.",
    "My disappearing act will be as smooth as butter on a hot biscuit.",
    "Hmmmm.... How about NO!",
    "I'm outta here faster than a one-legged man in a butt-kicking contest!",
    "Yeah, I'm leaving faster than green grass through a goose!",
    "I'll be as fast as a fox in a henhouse running away from here!",
    "Yeah, I'm going to be like a bat outta hell getting away from here!",
    "I'm gone faster than a horse with its tail on fire!",
    "I'm outta here faster than Twinkies at a Weight Watchers meeting!",
    "I'm leaving here faster than a cheetah on caffeine!",
    "I'm gone faster than you can blow out the candle and jump into bed before it gets dark.",
    "Bye, Felicia!",
    "Knock, Knock... Who's there? Toodle... Toodle who? BYEEEEE!",
    "Knock, Knock... Who's there? Halo... Halo who? Halooo and goodbye!",
    "Run, Run, Run, as fast as you can... You can't catch me because I'm faster than the Gingerbread Man!",
    "To infinity and beyond!",
    "I feel the need... the need for speed!"
];  

function runResponse () {
    const randomNumber = Math.floor(Math.random() * response.length);
        console.log(response[randomNumber]);
}

const nothingResponses = [
        "Bummer, you didn't get anything",
        "Looky looky! Nothing...", 
        "If luck were air, I'd suffocate. I found nothing",
        "Whoa, I just got a whole lotta NOTHING!",
        "If nothing were gold... I'd be a millionaire",
        "Knock, knock... Who's there?.... NOTHING!",
        "You get NOTHING! YOU LOSE! GOOD DAY SIR!",
        "If nothing were fuel, I wouldn't have enough to start a flea's go-kart!",
        "Wow! A bunch of NOTHING!",
        "I've discovered the lost city of Nothing.",
        "I found nada, zilch, zero, and a touch of disappointment.",
        "It's official... I've become a professional at finding Nothing.",
        "Congratulations, you've witnessed a masterclass in finding absolutely nothing.",
        "Well, the good news is I found nothing. The bad news is, well, the same.",
        "I've reached the peak of my skills... zero loot mountain, here I am.",
        "If there were an award for finding nothing, I'd be the reigning champion.",
        "It's official... I've mastered the art of finding absolutely nothing.",
        "Hey! Check it out! I found nothing, nothing, and more nothing!"
];
      
function foundNothing() {
const randomNumber = Math.floor(Math.random() * nothingResponses.length);
console.log(nothingResponses[randomNumber]);
};


/*******************************************************************|WEAPON CLASS|**************************************************/
class Weapon {
    constructor(type, damage, condition) {
        this.type = type;
        this.damage = damage;
        this.condition = condition;
    }

    printStatus() {
        console.log(`Weapon: ${this.type}`);
        console.log(`Damage: ${this.damage}`);
        console.log(`Condition: ${this.condition}`);
    }

    weaponCondition() {
        this.condition -= 1;
        console.log(`Your ${this.type}'s condition is at ${this.condition}`);
        if (this.condition === 0) {
            console.log(`Your ${this.type} has broken, and you can no longer use it.`);            
            player.weapons = player.weapons.filter(weapon => weapon.condition > 0);
            console.log(`You discarded the broken ${this.type}s.`);
        }
    }

    static droppedWeapon(player) {
        const chanceOfLoot = Math.ceil(Math.random() * 100);
        console.log(chanceOfLoot);
        if (chanceOfLoot <= 3) {
            player.weapons.push(revolver);
            console.log(`"Say hello to my little friend!" You found a Smith & Wesson .357 Magnum Revolver!`);
        } else if (chanceOfLoot <= 7) {
            player.weapons.push(crossBow);
            console.log(`"Look out Norman Reedus!" You found a Hunting Crossbow!`);
        } else if (chanceOfLoot <= 12) {
            player.weapons.push(hatchet);
            console.log(`"Heeere's Johnny!" You found a Small Hatchet!`);
        } else if (chanceOfLoot <= 18) {
            player.weapons.push(bat);
            console.log(`""Lucille is thirsty."" You found a Baseball Bat!`);
        } else if (chanceOfLoot <= 25) {
            player.weapons.push(knife);
            console.log(`"That's not a knife... This is a knife." You found a Pocket Knife!`);
        } else if (chanceOfLoot <= 33) {
            player.weapons.push(brass);
            console.log(`"Welcome to Fight Club. The first rule of Fight Club is: You do not talk about Fight Club."You found Brass Knuckles!`);
        } else if (chanceOfLoot <= 100) {
            foundNothing();
        }
    }    
}

const brass = new Weapon('Brass Knuckles', 12, 40);
const knife = new Weapon('Pocket Knife', 15, 35);
const bat = new Weapon('Baseball Bat', 20, 30);
const hatchet = new Weapon('Small Hatchet', 25, 20);
const crossBow = new Weapon('Hunting Crossbow', 35, 12);
const revolver = new Weapon('Smith & Wesson .357 Magnum Revolver', 70, 8);

/*******************************************************************|FOOD CLASS|**************************************************/
class Food {
    constructor(type, healPoints) {
        this.type = type;
        this.healPoints = healPoints;
    }

    getFruitByIndex(index) {
        return this.type[index];
    }
    static droppedFood(player) {
        const chanceOfLoot = Math.ceil(Math.random() * 100);
        if (chanceOfLoot <= 6) {
            console.log(`"I gotta say, Twinkies are the best part of my day. They're like a little ray of sunshine."`);
            console.log(`"You found Twinkies!"`);
            player.food.push(twinkie)
        } else if (chanceOfLoot <= 11) {
            console.log(`"Spam, spam, spam, spam. Lovely spam! Wonderful spam!"`);
            console.log(`You found a Can of Spam!`);
            player.food.push(spam)
        } else if (chanceOfLoot <= 17) {
            console.log(`"I'm not a vegetarian because I love animals; I'm a vegetarian because I hate plants."`)
            console.log(`You found Animal Jerky!`);
            player.food.push(jerky)
        } else if (chanceOfLoot <= 24) {
            console.log(`"Nobody makes tuna casserole like my mom."`)
            console.log(`You found a Can of Tuna!`);
            player.food.push(tuna)
        } else if (chanceOfLoot <= 32) {
            const selectedFruit = pickFruit();
                if (selectedFruit === "Apples") {
                    console.log(`"Do you like apples? How do you like them apples?" You Found Apples!`);
                } else if (selectedFruit === "Pears") {
                    console.log(`"What does a pear feel in the apocalypse...? Des-pear! Ha! "You found Pears!`);
                } else if (selectedFruit === "Cherries") {
                    console.log(`"Why did the cherry turn red? It saw the salad dressing!" You found Cherries!`);
                } else if (selectedFruit === "Plums") {
                    console.log(`"Plums used to be expensive, but since the apocalypse, the prices have plum-metted." You found Plums!`);
                } else if (selectedFruit === "Peaches") {
                    console.log(`"Why did the peach buy deodorant? It wanted 'fresh pits'!" You found Peaches!`);
                }
            player.food.push(pickFruit())
        } else if (chanceOfLoot <= 41) {
            console.log(`"Beans, beans, the musical fruit; the more you eat, the more you toot!"`);
            console.log(`You found a Can of Beans!`);
            player.food.push(beans)
        } else if (chanceOfLoot <= 50) {
            console.log(`"I'm on a roll; berry puns are my jam!"`);
            console.log(`You found Wild Berries!`);
            player.food.push(berry)
        } else if (chanceOfLoot <= 100) {
            foundNothing();
        } 
    }

    bearDrop(player) {
        console.log(`You made 7 bags of ${jerky.type} from ${bear.name}.`);
        player.food.push(...Array(7).fill(jerky)); /* <-------------------- '...' Spread Operator used to push each element to players food array*/
    }

    lionDrop(player) {
        console.log(`You made 4 bags of ${jerky.type} from ${lion.name}.`);
        player.food.push(...Array(4).fill(jerky));
    }

    wolfDrop(player) {
        console.log(`You made 2 bags of ${jerky.type} from ${wolf.name}.`);
        player.food.push(...Array(2).fill(jerky));
    }

}

const berry = new Food('Wild Berries', 5);
const beans = new Food('Can of Beans', 8);
const apples = new Food(`Apples`, 10);
const pears = new Food("Pears", 10);
const cherries = new Food("Cherries", 10);
const plums = new Food("Plums", 10);
const peaches = new Food("Peaches", 10);
const fruit = [apples, pears, cherries, plums, peaches];
const tuna = new Food('Can of Tuna', 15);
const jerky = new Food('Animal Jerky', 20);
const spam = new Food('Can of Spam', 30);
const twinkie = new Food('Twinkies', 50);

function pickFruit() {
      const whichFruit = Math.floor(Math.random() * fruit.length);
      return fruit.type[whichFruit];
}

function fruitTreeAppears(player) {
    console.log(`You see a fruit tree up ahead and start running toward it.`);
    console.log(`"Finally! Something that I can bite and doesn't want to bite me back!`)
    let selectedFruit = Math.ceil(Math.random() * 100);
                if (selectedFruit < 20) {
                    console.log(`"Do you like apples? How do you like them apples?" You Found Apples!`);
                    player.food.push(apples);                 
                } else if (selectedFruit < 40) {
                    console.log(`"What does a pear feel in the apocalypse...? Des-pear! Ha! "You found Pears!`);
                    player.food.push(pears);                   
                } else if (selectedFruit < 60) {
                    console.log(`"Why did the cherry turn red? It saw the salad dressing!" You found Cherries!`);
                    player.food.push(cherries);            
                } else if (selectedFruit < 80) {
                    console.log(`"Plums used to be expensive, but since the apocalypse, the prices have plum-metted." You found Plums!`);
                    player.food.push(plums);                     
                } else if (selectedFruit < 100) {
                    console.log(`"Why did the peach buy deodorant? It wanted 'fresh pits'!" You found Peaches!`);
                    player.food.push(peaches);                      
                }
}
/*******************************************************************|THREAT CLASS|**************************************************/   
class Threat {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    
    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }

}

const walker = new Threat("A Walker Zombie", 20, 3, walkerAppears);
const runner = new Threat("A Runner Zombie", 25, 5, runnerAppears);
const bloater = new Threat("A Bloater Zombie", 30, 8, bloaterAppears);
const armored = new Threat("An Military Zombie", 35, 10, armoredAppears);
const small = new Threat("A Small Zombie Horde", 45, 15, smallAppears);
const average = new Threat("An Average Zombie Horde", 55, 20, averageAppears);
const large = new Threat("A Large Zombie Horde", 65, 25, largeAppears);
const bear = new Threat("A Bear", 35, 15, bearAppears);
const lion = new Threat("A Mountain Lion", 25, 10, lionAppears);
const wolf = new Threat("A Rabid Wolf", 20, 5, wolfAppears);
const animals = [bear, lion, wolf];
const survivor = new Threat("A Malevolent Survivor", 80, 10, survivorAppears);

function walkerAppears() {
    console.log(`${walker.name} stumbles into view. Be careful...`);    
    player.attack(walker);
}
function runnerAppears() {
    console.log(`${runner.name} emerges, moving with unexpected speed toward you...`);
    player.attack(runner);
}
function bloaterAppears() {
    console.log(`${bloater.name} inches closer, with its grotesque, swollen body suggesting a potential burst of guts and disease...`);
    player.attack(bloater);
}
function armoredAppears() {
    console.log(`${armored.name} marches toward you. Looks like he's protected by U.S. Army Grade Armor...`);
    player.attack(armored);
}
function smallAppears() {
    console.log(`The eerie sound of shuffling grows louder—oh no, it's ${small.name}!`);
    player.attack(small);
}
function averageAppears() {
    console.log(`The haunting echoes of shuffling footsteps intensify..., ${average.name} is approaching!`);
    player.attack(average);
}
function largeAppears() {
    console.log(`A chilling cacophony of relentless shuffling resonates in the air..., ${large.name} is on the horizon!`);
    player.attack(large);
}

function bearAppears() {//<========================Need to rewrite so that animimal food drop will be read
    console.log(`Rustling in the bushes reveals ${bear.name}`);
    player.attack(bear);
}
function lionAppears() {//<========================Need to rewrite so that animimal food drop will be read
    console.log(`A pair of piercing eyes stare back at you. It's ${lion.name}`);
    player.attack(lion);
}
function wolfAppears() {//<========================Need to rewrite so that animimal food drop will be read
    console.log(`${wolf.name} appears, eyeing you curiously.`);
    player.attack(wolf);
}
function survivorAppears() {
    console.log(`You see a shadowy figure... Is that a fellow survivor? IT IS!!!`);
    const engageSurvivor = readline.keyIn(`Do you want to approach them? [y] for yes, [n] for no.`,{hideEchoBack: true, mask: "", limit: ["y", "n"]});
    if (engageSurvivor === "y") {
        const chanceOfGood = Math.ceil(Math.random() * 100);
        if (chanceOfGood <= 70) {//<----Approximately 70% chance of Good Encounter
            console.log(`They are friendly! You ask if they can spare some supplies.`);
            const chanceOfLoot = Math.ceil(Math.random() * 100);
            if (chanceOfLoot < 70) { 
                Weapon.droppedWeapon(player);//<----Approximately 23% chance of weapon
                Food.droppedFood(player);//<----Approximately 35% chance of weapon
            }
        } else {
            readline.keyInPause(`This survivor looks sketchy...`);
            readline.keyIn(`He approaches you slowly with his arm behind his back..."Give me all of your weapons and food."`)           
            console.log(`WHOA! LOOKOUT!!! IT'S ${survivor.name} AND HE TRIED TO STAB YOU WITH A KNIFE TO STEAL YOUR FOOD!!!`);
            player.attack(survivor);
        }        
    }     
}
/*******************************************************************|LOCATION CLASS|*************************************************/
class Location {
    constructor(type) {
        this.type = type;
    }
}
const house = new Location('Abandoned House', houseAppears);
const store = new Location('Deserted Store', storeAppears);
const building = new Location('Decrepit Building', buildingAppears);

function houseAppears() {
    console.log(`Amid the desolation, you find an ${house.type}. Maybe there's something useful inside.`);
    const yesOrNo = readline.keyIn(` [y] for yes, [n] for no.`,{hideEchoBack: true, mask: "", limit: ["y", "n"]});
    if (yesOrNo === "y") {
        structureEncounter();     
    } else {
        runResponse();
    }
}
function storeAppears() {
    console.log(`A ${store.type} stands before you. Explore cautiously, who knows what you might find.`);
    let yesOrNo = readline.keyIn(` [y] for yes, [n] for no.`,{hideEchoBack: true, mask: "", limit: ["y", "n"]});
    if (yesOrNo === "y") {
        structureEncounter();
    } else {
        runResponse();
    }
}
function buildingAppears() {
    console.log(`A ${building.type} building looms ahead. Investigate, but stay alert for any surprises.`);
    let yesOrNo = readline.keyIn(` [y] for yes, [n] for no.`,{hideEchoBack: true, mask: "", limit: ["y", "n"]});
    if (yesOrNo === "y") {
       structureEncounter();
    } else {
        runResponse();        
    }
}
/*******************************************************************|PLAYER CLASS|**************************************************/
class Player {
    constructor(name, health, unarmedAttack, weapon = [], food = []) {
        this.name = name;
        this.health = health;
        this.unarmedAttack = 10;
        this.weapons = weapon;
        this.food = food;
        this.currentWeapon = "Your Bare Hands";
        this.chosenWeapon = null;
    }

    printInventory() {
        console.log(`Player's Name: ${name }`);
        console.log(`Player's Health: ${this.health }`);
        console.log(`Player's Attack when Unarmed: ${this.unarmedAttack }`);
        console.log(`Player's Weapons: ${this.weapons.map(weapon => weapon.type).join(', ')}`);
        console.log(`Player's Food: ${this.food.map(food => food.type).join(', ')}`);
    }

    
    chooseWeapon() {
        if (this.weapons.length === 0) {
            console.log('You have no weapons. You better cowboy up and use your fists!');
            this.currentWeapon = "Your Bare Hands";
            this.chosenWeapon = null;
        } else {
            const weaponOptions = this.weapons.map(weapon => weapon.type);
            const weaponIndex = readline.keyInSelect(weaponOptions, "Which weapon would you like to use?");
            if (weaponIndex !== -1) { 
                const chosenWeapon = this.weapons[weaponIndex];
                console.log(`You chose ${chosenWeapon.type}.`);
                console.log(chosenWeapon);
                this.unarmedAttack = chosenWeapon.damage;
                this.currentWeapon = chosenWeapon.type;
            }
        }
    }

    chooseFood() {
        if (this.food.length === 0) {
            console.log(`You have no food. You better find something to eat soon, or you'll starve!`)
        } else {
            const foodOptions = this.food.map(food => food.type);
            const foodIndex = readline.keyInSelect(foodOptions, "What would you like to eat?");
            if (foodIndex !== -1) {
                const chosenFood = this.food[foodIndex];
                console.log(`You chose ${chosenFood.type}`);
                this.eatFood(chosenFood);
            }
        }
    }

    eatFood(food) {
        console.log(`You ate ${food.type} and healed yourself by ${food.healPoints}.`);
        this.health += food.healPoints;
        // if (this.health > 100) {
        //     this.health = 100;
        // }
        this.food = this.food.filter(item => item !== food);
    }
    
    takeDamage(damage) {
        this.health -= damage;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    attack(threat) {
         const attackOrRun = readline.keyIn(`What would you like to do? Press [a] to Attack, [r] to Run Away`, {hideEchoBack: true, mask: "", limit:["a", "r"]});
            if (attackOrRun === "a") {
                if (!this.chosenWeapon) {
                    console.log(`You attack ${threat.name} with your bare hands...`); // Handle case when no weapon is chosen
                } else {
                    console.log(`You attack ${threat.name} with a ${this.chosenWeapon.type}...`); // Access this.chosenWeapon
                }
                   
            while (this.health > 0 && threat.health > 0) {
                let hitChance = Math.ceil(Math.random() * 100);
                if (hitChance <= 75) {
                    const damage = this.currentWeapon === "Your Bare Hands" ? 10 : this.currentWeapon.damage;
                    threat.takeDamage(damage);
                    console.log(`You dealt ${damage} damage! ${threat.name}'s health is now ${threat.health}`);
                } else {
                    console.log(`You missed!`);
                }
                if (threat.health <= 0) {
                    console.log(`You have killed the ${threat.name}!`);
                    readline.keyInPause(`"Lets see if there are any weapons..."`)
                    Weapon.droppedWeapon(player);
                    readline.keyInPause(`"Lets see if there is any food..."`)
                    Food.droppedFood(player);
                    travel();
                }
                if (threat.health > 0) {
                    console.log(`The ${threat.name} counterattacks...`);
                    let hitChance = Math.ceil(Math.random() * 100);
                    if (hitChance <= 75) {
                        const damage = threat.attack;
                        this.takeDamage(damage);
                        console.log(`${threat.name} dealt ${damage} damage! Your health is now ${this.health}`);
                    } else {
                        console.log(`The ${threat.name} missed!`);
                    }
                    if (this.health <= 0) {
                        console.log(`The ${threat.name} has killed you!`);
                        respawn();
                    }
                }
            }            
        } else {
            this.runAway(threat);            
        }
    }

        runAway(threat) {
            const randomNumber = Math.ceil(Math.random() * 100);
        
            if (randomNumber < 75) {//<----Approximately 75% of getting hit 1 time by Threat
                console.log(`You managed to run away, but not without consequences.`);
                const threatDamage = threat.attack;
                this.takeDamage(threatDamage);
                console.log(`The ${threat.name} managed to get a piece of you. Your health is now ${this.health}`);
            } else if (this.health <= 0) {
                console.log(`You have been killed by ${threat.name}`);
                respawn();
            } else {
                console.log(`Phew! You managed to get away without being injured`)
                travel();
            }
        }
}

const player = new Player(name, 100000, 10,);  /*<=============== CHANGE HEALTH AFTER DEBUGGING GAME!!!###################################################*/
/*******************************************************************|GAME LEVELS|**************************************************/   
const roadMap = ["Colorado", "Oklahoma", "Texas", "Louisiana", "Mississippi", "Alabama", "Georgia", "Florida", "Terminus"];
const statesTraveled = [];
/*******************************************************************|ENCOUNTER FUNCTION: COMPLETE|*******************************************************/                 

function encounters() {
    const randomNumber = Math.ceil(Math.random() * 100);
        console.log(randomNumber);
        if (randomNumber <= 7) {//<= 7)
            walkerAppears();
            } else if (randomNumber <= 12) {//<= 12
                runnerAppears();
            } else if (randomNumber <= 15) {//<= 15
                bloaterAppears();
            } else if (randomNumber <= 17) {//<= 17
                armoredAppears();
            } else if (randomNumber <= 19) {//<= 19
                smallAppears();
            } else if (randomNumber <= 21) {//<= 21
                averageAppears();
            } else if (randomNumber <= 22) {//<= 22
                largeAppears();
            } else if (randomNumber <= 26) {//<= 26
                survivorAppears();
            } else if (randomNumber <= 28) {//<= 28
                bearAppears();
            } else if (randomNumber <= 30) {//<= 30
                lionAppears();
            } else if (randomNumber <= 34) {//<= 34
                wolfAppears();
            } else if (randomNumber <= 38) {//<= 38
                houseAppears();
            } else if (randomNumber <= 41) {//<= 41
                storeAppears();
            } else if (randomNumber <= 44) {//<= 44
                buildingAppears();
            } else 
            if (randomNumber <= 50) {//<= 50
                fruitTreeAppears(player);
            } else if (randomNumber <= 97) {//<= 97
                console.log(`Nothing Happened`)
            } else if (randomNumber <=100) {//
                const madeIt = roadMap.shift();
            statesTraveled.push(madeIt);
            console.log(`You have reached ${madeIt}!`);
            console.log(`States to go: ${roadMap.join(', ')}`);
        };  if (roadMap.length === 0)
        playAgain();
}
/*******************************************************************|STRUCTURE ENCOUNTER FUNCTION|*******************************************************/
function structureEncounter() {
    const randomNumber = Math.ceil(Math.random() * 100);
        console.log(randomNumber);
        if (randomNumber <= 7) {//<========================fight loop doesnt seem to be initiated. 
            walkerAppears();
            } else if (randomNumber <= 12) {//<========================fight loop doesnt seem to be initiated.
                runnerAppears();
            } else if (randomNumber <= 15) {
                bloaterAppears();
            } else if (randomNumber <= 17) {
                armoredAppears();
            } else if (randomNumber <= 19) {
                smallAppears();
            } else if (randomNumber <= 21) {
                averageAppears();
            } else if (randomNumber <= 22) {
                largeAppears();
            } else if (randomNumber <= 26) {
                survivorAppears();
            } else if (randomNumber <= 28) {
                bearAppears();
            } else if (randomNumber <= 30) {
                lionAppears();
            } else if (randomNumber <= 34) {
                wolfAppears();
            } else {//<----Approximately 66% chance of empty Building
                readline.keyInPause("Looks like this place is empty... Let's see if there are any weapons.");
                Weapon.droppedWeapon(player);
                    readline.keyInPause(`"Lets see if there is any food..."`);
                Food.droppedFood(player);
            }
}
/*==================================================================|WALKING FUNCTION: Story Point 83|====================================================*/
  

function gameStart() {    //CODE IS GOOD
    console.log(`The year is 2023, and civilization as we know it no longer exists. A virus, now known as the "Necro Virus", has wiped out 80% of the human race.`);
    console.log(`It turns normal human beings into the undead! Your goal in this apocalyptic world is to reach "Terminus Destinatio" or "The Final Destination".`);
    console.log(`Terminus Destinatio is a sanctuary for remaining survivors in the United States, located in what used to be Florida, beyond a great wall which`);
    console.log(`stretching from the Gulf of Mexico to the Atlantic Ocean. Your only objective is survival, and that means making the journey to Terminus Destinatio.`);
    console.log(`Brace yourself for a journey through the remnants of civilization where the undead roam, survivors can't be trusted, threats lurk at every corner,`);
    readline.keyInPause(`resources are limited, and every decision means life or death.`);       
    readline.keyInPause(`Welcome to "The Dawn of Decay"!`);
        let start = readline.keyIn(`Are you ready to make the journey to "Terminus Destinatio", ${name}? [y] for yes, [n] for no.`,
        {hideEchoBack: true, mask: "", limit: ["y", "n"]});
        if (start === "y") {
        readline.keyInPause(`Good Luck ${name} and godspeed!`);
        travel();
        } else {
            readline.keyInPause(`Hope to see you soon! Goodbye ${name}!`);
            process.exit()
    } 
};

theEvent();              
function theEvent() {
    const whatHappened = readline.keyIn(`Do You want to know what happened here ${name}? [y] for yes, [n] for no`, {hideEchoBack: true, mask: "", limit: ["y", "n"]});
    if (whatHappened === "y") {
        readline.keyInPause(`Hey ${name}! "I AM LEGEND", or my friends call me Sergent Abraham. I'm part of a military outpost called the "ARMY OF DARKNESS" here in Utah.`);
const school = readline.keyIn(`Are you "HERE ALONE" and coming from the V School Campus? [y] for yes, [n] for no`, {hideEchoBack: true, mask: "", limit: ["y", "n"]});
        if (school === "y") {
            readline.keyInPause(`Cool! Well... not so much any more. Coding in this "DAY OF THE DEAD" has approached "EXTINCTION". You're extremely lucky to be alive.`);
            readline.keyInPause(`A "STATE OF EMERGENCY" has been called. There has been an outbreak of the Necro Virus that turns humans into "THE WALKING DEAD".`);
            readline.keyInPause(`I have been posted here as more of a "SCOUTS GUIDE TO THE ZOMBIE APOCALYPSE", and trust me, you should "FEAR THE WALKING DEAD".`);
            readline.keyInPause(`It all started on what is now known as the "NIGHT OF THE LIVING DEAD". A woman named "MAGGIE" buried her daughter in a "PET CEMETERY".`);
            readline.keyInPause(`She was too poor to afford anything else. She said her daughter had a case of "THE CRAZIES" and started attacking and biting people.`);
            readline.keyInPause(`The mother placed her in "QUARANTINE" by locking her in her room, but she was "DEAD BEFORE DAWN". Everyone that Maggie bit became a Zombie shortly after.`);
            readline.keyInPause(`Before you knew it, it was their neighbor's family in a battle of the "COCKNEYS VS ZOMBIES". After a "NIGHT OF THE LIVING DEAD" came the "DAWN OF THE DEAD".`);
            readline.keyInPause(`And it all became a "SURVIVAL OF THE DEAD" once people realized "THE DEAD DON'T DIE". People started to "EXIT HUMANITY" by taking their own lives.`);
            readline.keyInPause(`Starting in that small town, it became the "LAND OF THE DEAD". "28 DAYS LATER" all hell breaks loose, and it's the beginning of "WORLD WAR Z".`);
            readline.keyInPause(`Then "28 WEEKS LATER" the United States was a "ZOMBIELAND". So yeah, that's what you are dealing with.`);
            gameStart();
        } else {    
            readline.keyInPause(`Oh well, it doesn't matter anyway. Coding in this DAY OF THE DEAD has approached EXTINCTION. You're extremely lucky to be alive.`);
            readline.keyInPause(`A STATE OF EMERGENCY has been declared. There has been an outbreak of the Necro Virus that turns humans into THE WALKING DEAD.`);
            readline.keyInPause(`I have been posted here as more of a SCOUTS GUIDE TO THE ZOMBIE APOCALYPSE, and trust me, you should FEAR THE WALKING DEAD.`);
            readline.keyInPause(`It all started on what is now known as the NIGHT OF THE LIVING DEAD. A woman named MAGGIE buried her daughter in a PET CEMETERY.`);
            readline.keyInPause(`She was too poor to afford anything else. She said her daughter had a case of THE CRAZIES and started attacking and biting people.`);
            readline.keyInPause(`The mother placed her in QUARANTINE by locking her in her room, but she was DEAD BEFORE DAWN. Everyone that Maggie bit became a Zombie shortly after.`);
            readline.keyInPause(`Before you knew it, it was their neighbor's family in a battle now known as the COCKNEYS VS ZOMBIES. After a NIGHT OF THE LIVING DEAD came the DAWN OF THE DEAD.`);
            readline.keyInPause(`And it all became a SURVIVAL OF THE DEAD once people realized THE DEAD DON'T DIE. People started to EXIT HUMANITY by taking their own lives.`);
            readline.keyInPause(`Starting in that small town, it became the LAND OF THE DEAD. 28 DAYS LATER all hell breaks loose, and it's the beginning of WORLD WAR Z.`);
            readline.keyInPause(`Then 28 WEEKS LATER the United States was a ZOMBIELAND. So yeah, that's what you are dealing with. Good luck ${name}! You're going to need it!`);
            gameStart();
        }        
    } else {
        const youSure = readline.keyIn(`Are you sure? Its a cool story. It's like every movie about zombies you've ever seen..., 
        press [y] for Yes, I'm Good or [n] if you changed your mind`, {hideEchoBack: true, mask: "", limit: ["y", "n"]});
        if (youSure === "y") {
        gameStart();
        } else {
            theEvent();
        }
    };
};

travel();
function travel() {
    while (true) {
        let option = readline.keyIn(`What would you like to do ${name}? Press [t] travel, [e] to eat, [w] to select weapon [i] to see inventory, [q] to quit`, {hideEchoBack: true, mask: "", limit: ["t", "e","w", "i", "q"]});
     console.log(option);
        if (option.toLowerCase() === "t") {
            console.log("traveling");
            encounters();
        } else if (option.toLowerCase() === "e") {
            droppedFood(player);//<====================ReferenceError: droppedFood is not defined
        } else if (option.toLowerCase() === "w") {
            chooseWeapon(player);//<===================ReferenceError: chooseWeapon is not defined
        } else if (option.toLowerCase() === "i") {
            player.printInventory();
        } else if (option.toLowerCase() === "q") {
            quitGame();
        }
    }
}
/*******************************************************************|RESPAWN FUNCTION|*************************************************************/ 
function respawn() {
    let restart = readline.keyIn(`Do you want to attempt the journey to "Terminus Destinatio" again, ${name}? [y] for yes, [n] for no.`,
        {hideEchoBack: true, mask: "", limit: ["y", "n"]});
    if (restart === "y") {
    readline.keyInPause(`Good luck ${name}!`);
    } else {
        readline.keyInPause(`Hope to see you soon, ${name}! Goodbye!`);
        process.exit();
    };
};
/*******************************************************************|PLAY AGAIN FUNCTION|*************************************************************/    
function playAgain() {
    readline.keyInPause(`You start to approach a massive wall stretching from your left to your right for as long as the eye can see. As you approach you find yourself surrounded by soldiers...`);
    readline.keyInPause(`Halt! Place your hands over your head and do not move!`);
    readline.keyInPause(`You hear a solder speaking into a walkie-talkie "Command, we've got a survivor approaching the gates. Requesting authorization to engage in conversation."`);
    readline.keyInPause(`The voice over the radio replies back after a few seconds of silence. "Proceed with caution, Alpha Team. Verify their identity and intentions before granting access and processing."`);
    readline.keyInPause(`"Copy that, Command."  "You, state your name and purpose here!`);    
    readline.keyInPause(`My name is ${name}. I've been traveling for days and was told there's safety and supplies here.`);    
    readline.keyInPause(`Another soldier approaches while keeping his weapon aimed at you and says "Keep your hands visible, ${name}. What's your business here? Any bites or infections?`);    
    readline.keyInPause(`No bites and no infections. Just an exhausted survivor looking for refuge.`);
    readline.keyInPause(`The Team Leader approaches cautiously... "Keep your hands where we can see them. We'll need to search you for weapons and supplies.`);    
    readline.keyInPause(`"Sure, whatever it takes! I am just looking for a safe place to finally..." `);    
    readline.keyInPause(`The soldier conducting the search interupts you... "Clear! No weapons or immediate threats, Sir.`);    
    readline.keyInPause(`The Team Leader says to you "Alright, ${name}. You can enter and prepare for processing, but understand this is a secure zone with strictly enforced rules.`);
    readline.keyInPause(`Follow the rules, and there wont be any problems. If there is any funny business, we won't hesitate...`);
    readline.keyInPause(`You thank them and follow one of the soldiers to the gate. As the gate opens he says to you, `);    
    readline.keyInPause(`"Welcome to Terminus. Head to the registration point there, and they'll get you sorted out.`);    
    readline.keyInPause(`"Thank you, thank you! I can't tell you how relieved I am to have found this place.`);    
    readline.keyInPause(`You hear some chatter on the soldiers walkie-talkie. "Get back to your post soldier.  Looks like a large horde was following this guy!`);    
    readline.keyInPause(`"Roger that". The soldier turns to you and says "Good luck, ${name}, and welcome to your new home and the safest place you'll find in this world.`);
    let play = readline.keyIn(`Do you want to attempt the journey to "Terminus Destinatio" again, ${name}? [y] for yes, [n] for no.`,
    {hideEchoBack: true, mask: "", limit: ["y", "n"]});
    if (play === "y") {
        readline.keyInPause(`Good luck ${name}!`);
        } else {
            readline.keyInPause(`Hope to see you soon, ${name}! Goodbye!`);
            process.exit();
        };
}
/*******************************************************************|QUIT GAME FUNCTION|*************************************************************/
function quitGame() {
    let quit = readline.keyIn(`Are you sure you want to quit? [y] for yes, [n] for no.`,
    {hideEchoBack: true, mask: "", limit: ["y", "n"]});
        if (quit === "y") {
            readline.keyInPause(`Hope to see you soon! Goodbye ${name}!`);
            process.exit()
        } else {
            travel();
        }
};
/*==================================================================|WALKING FUNCTION: Story Point 83|====================================================*/
 

