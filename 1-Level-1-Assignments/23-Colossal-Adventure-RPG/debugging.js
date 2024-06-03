const readline = require("readline-sync");

const name = "Chance";

class Food {
    constructor(type, healPoints) {
        this.type = type;
        this.healPoints = healPoints;
    }

    static droppedFood(player) {
        const chanceOfLoot = Math.ceil(Math.random() * 100) + 1;
        /*if (chanceOfLoot <= 6) {
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
        } else */ if (chanceOfLoot <= 99) {
            const selectedFruit = pickFruit();
            console.log(selectedFruit);
            console.log("selectedFruit");
            console.log(pickFruit());
            console.log("pickFruit()");
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
        
        } /*else if (chanceOfLoot <= 41) {
            console.log(`"Beans, beans, the musical fruit; the more you eat, the more you toot!"`);
            console.log(`You found a Can of Beans!`);
            player.food.push(beans)
        } else if (chanceOfLoot <= 50) {
            console.log(`"I'm on a roll; berry puns are my jam!"`);
            console.log(`You found Wild Berries!`);
            player.food.push(berry)
        }*/ else if (chanceOfLoot <= 100) {
            foundNothing();
        } 
    }

    // bearDrop(player) {
    //     console.log(`You made 7 bags of ${jerky.type} from ${bear.name}.`);
    //     player.food.push(...Array(7).fill(jerky)); /* <-------------------- '...' Spread Operator used to push each element to players food array*/
    // }

    // lionDrop(player) {
    //     console.log(`You made 4 bags of ${jerky.type} from ${lion.name}.`);
    //     player.food.push(...Array(4).fill(jerky));
    // }

    // wolfDrop(player) {
    //     console.log(`You made 2 bags of ${jerky.type} from ${wolf.name}.`);
    //     player.food.push(...Array(2).fill(jerky));
    // }

}

const berry = new Food('Wild Berries', 5);
const beans = new Food('Can of Beans', 8);
const fruit = new Food(["Apples", "Pears", "Cherries", "Plums", "Peaches"], 10);
const tuna = new Food('Can of Tuna', 15);
const jerky = new Food('Animal Jerky', 20);
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
            player.food.push(pickFruit())
}


class Player {
    constructor(name, health, unarmedAttack, weapon = [], food = []) {
        this.name = name;
        this.health = health;
        this.unarmedAttack = 10;
        this.weapons = weapon;
        this.food = food;
        this.currentWeapon = "Your Bare Hands";
    }

    printInventory() {//<========================CODE IS GOOD
        console.log(`Player's Name: ${name}`);
        console.log(`Player's Health: ${this.health }`);
        console.log(`Player's Attack when Unarmed: ${this.unarmedAttack }`);
        console.log(`Player's Weapons: ${this.weapons.map(weapon => weapon.type).join(', ')}`);
        console.log(`Player's Food: ${this.food.map(food => food.type).join(', ')}`);
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
    
   
}

    


const player = new Player(name, 100000, 10,);
Food.droppedFood(player);
console.log("Food.droppedFood(player)");