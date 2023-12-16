
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
        const chanceOfLoot = Math.ceil(Math.random() * 100) + 1;
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
        } else if (chanceOfLoot <= 25) {
            player.weapons.push(knife);
            console.log(`"That's not a knife... This is a knife." You found a Pocket Knife!`);
        } else if (chanceOfLoot <= 33) {
            player.weapons.push(brass);
            console.log(`"Welcome to Fight Club. The first rule of Fight Club is: You do not talk about Fight Club."You found Brass Knuckles!`);
        } else if (chanceOfLoot <= 100) {
            console.log(foundNothing());
        }
    }    
}


const knife = new Weapon('Pocket Knife', 15, 35);
const hatchet = new Weapon('Small Hatchet', 25, 20);
const crossBow = new Weapon('Hunting Crossbow', 35, 12);
const revolver = new Weapon('Smith & Wesson .357 Magnum Revolver', 70, 8);

/*******************************************************************|FOOD CLASS|**************************************************/
class Food {
    constructor(type, healPoints) {
        this.type = type;
        this.healPoints = healPoints;
    }

    static droppedFood(player) {
        const chanceOfLoot = Math.ceil(Math.random() * 100) + 1;
        console.log(chanceOfLoot);
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


const fruit = new Food(["Apples", "Pears", "Cherries", "Plums", "Peaches"], 10);
const spam = new Food('Can of Spam', 30);
const twinkie = new Food('Twinkies', 50);

function pickFruit() {
      const whichFruit = Math.floor(Math.random() * fruit.type.length);
      return fruit.type[whichFruit];
}

function fruitTreeAppears() {
    console.log(`You see a fruit tree up ahead and start running toward it.`);
    console.log(`"Finally! Something that I can bite and doesn't want to bite me back!`)
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
            player.food.push(pickFruit());
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
    }

    chooseWeapon() {
        if (this.weapons.length === 0) {
            console.log('You have no weapons. You better cowboy up and use your fists!');
            this.currentWeapon = "Your Bare Hands";
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
            if (attackOrRun === "y") {
                console.log(`You attack ${threat.name} with a ${chosenWeapon.type}...`);   
            while (this.health > 0 && threat.health > 0) {
                let hitChance = Math.ceil(Math.random() * 100) + 1;
                if (hitChance <= 75) {
                    const damage = threat.attack;
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
                    let hitChance = Math.ceil(Math.random() * 100) + 1;
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
            const randomNumber = Math.ceil(Math.random() * 100) + 1;
        
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

const player = new Player(name, 100000, 10,);  /*<=============== CHANGE AFTER TESTING###################################################*/

/*******************************************************************|ENCOUNTER FUNCTION: COMPLETE|*******************************************************/                 

function encounters() {
    const randomNumber = Math.ceil(Math.random() * 100) + 1;
        console.log(randomNumber);




            } else if (randomNumber <= 19) {
                smallAppears();






            } else if (randomNumber <= 50) {
                fruitTreeAppears();


/*******************************************************************|STRUCTURE ENCOUNTER FUNCTION|*******************************************************/
function structureEncounter() {
    const randomNumber = Math.ceil(Math.random() * 100) + 1;
        console.log(randomNumber);
        if (randomNumber <= 7) {
            walkerAppears();
            } else if (randomNumber <= 12) {
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
                readline.keyInPause("Looks like this place is empty... Let's search for supplies.");
                Weapon.droppedWeapon(player);
                Food.droppedFood(player)
            }
}
/*==================================================================|WALKING FUNCTION: Story Point 83|====================================================*/

function travel() {
        } else if (option.toLowerCase() === "e") {
            droppedFood(player)
        } else if (option.toLowerCase() === "w") {
            chooseWeapon(player);
        }  




