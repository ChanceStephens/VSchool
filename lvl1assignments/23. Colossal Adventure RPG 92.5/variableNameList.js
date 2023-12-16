/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*============================|GET PLAYER NAME GLOBAL VARIABLE|*/  
const name = readline.question("What is your name, survivor? ");
/*============================|COOL GREETING FUNCTION CALL|*/
theEvent()
/*============================|GAME START FUNCTION CALL|*/
gameStart()
/*============================|RUNAWAY RESPONSE GLOBAL ARRAY|*/
const response = []
/*============================|LOOT NOTHING RESPONSE GLOBAL FUNCTION|*/
function runResponse(){}
/*============================|LOOTED NOTHING RESPONSE GLOBAL ARRAY|*/
const lootNothing = []
/*============================|RUNAWAY RESPONSE GLOBAL FUNCTION|*/
function RunLootNothing() {}
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*============================|WEAPON CLASS|*/
class Weapon {;
constructor(type, damage, condition){}
/*============================|PRINT STATUS METHOD|*/
printStatus(){}
/*============================|WEAPON CONDITION METHOD|*/
weaponCondition(){}                     //<------------Weapon reduces by 1 each attack
/*============================|DROPPED WEAPON STATIC METHOD|*/
static droppedWeapon(player){}      }   //<------------Approximately 33% chance weapon drops.
/*============================|INSTANCIATED WEAPONS|*/
const brass = new Weapon('Brass Knuckles', 12, 40);
const knife = new Weapon('Pocket Knife', 15, 35);
const bat = new Weapon('Baseball Bat', 20, 30);
const hatchet = new Weapon('Small Hatchet', 25, 20);
const crossBow = new Weapon('Hunting Crossbow', 35, 12);
const revolver = new Weapon('Smith & Wesson .357 Magnum Revolver', 70, 8);
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*============================|FOOD CLASS|*/
class Food {
constructor(type, healPoints){}
/*============================|DROPPED FOOD STATIC METHOD|*/
static droppedFood(player) {}           //<------------Approximately 50% chance food drops.
/*============================|BEAR DROP FOOD METHOD|*/
bearDrop(player) {}                     //<------------Gives player 7 animal jerkys
/*============================|MOUNTAIN LION DROP FOOD METHOD|*/
lionDrop(player) {}                     //<------------Gives player 4 animal jerkys
/*============================|WOLF DROP FOOD METHOD|*/
wolfDrop(player) {}     }               //<------------Gives player 2 animal jerkys
/*============================|INSTANCIATED FOODS|*/
const berry = new Food('Wild Berries', 5);
const beans = new Food('Can of Beans', 8);
const fruit = new Food(["Apples", "Pears", "Strawberries", "Plums", "Peaches"], 10);
const tuna = new Food('Can of Tuna', 15);
const jerky = new Food('Animal Jerky', 20);
const spam = new Food('Can of Spam', 30);
const twinkie = new Food('Twinkies', 50);
/*============================|PICK FRUIT FUNCTION|*/
function pickFruit() {}                 //<-Picks random fruit from fruit instance array. 
function fruitTreeAppears(){}           //<------------6% chance encounter: 100% chance of fruit
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*============================|THREAT CLASS|*/
class Threat {
constructor(name, health, attack) {}
/*============================|TAKE DAMAGE METHOD|*/
takeDamage(damage) {}       }
/*============================|INSTANCIATED THREATS|*/
const walker = new Threat("A Walker Zombie", 20, 3, walkerAppears);
const runner = new Threat("A Runner Zombie", 25, 5, runnerAppears);
const bloater = new Threat("A Bloater Zombie", 30, 8, bloaterAppears);
const armored = new Threat("An Armored Zombie", 35, 10, armoredAppears);
const small = new Threat("A Small Zombie Horde", 45, 15, smallAppears);
const average = new Threat("An Average Sized Zombie Horde", 55, 20, averageAppears);
const large = new Threat("A Large Zombie Horde", 65, 25, largeAppears);
const bear = new Threat("A Bear", 35, 15, bearAppears);
const lion = new Threat("A Mountain Lion", 25, 10, lionAppears);
const wolf = new Threat("A Rabid Wolf", 20, 5, wolfAppears);
const survivor = new Threat("A Malevolent Survivor", 80, 10, survivorAppears);
/*============================|THREAT APPEARANCE LOGIC FUNTIONS|*/
function walkerAppears(){}
function runnerAppears() {}
function bloaterAppears(){}
function armoredAppears(){}
function smallAppears(){}
function averageAppears(){}
function largeAppears(){}
function survivorAppears(){}
function bearAppears(){}
function lionAppears(){}
function wolfAppears(){}
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*============================|LOCATION CLASS|*/
class Location {
constructor(type, appears, weaponLoot, foodLoot){}}
/*============================|INSTANCIATED LOCATIONS|*/
const house = new Location('Abandoned House', houseAppears);
const store = new Location('Deserted Store', storeAppears);
const building = new Location('Decrepit Building', buildingAppears);
/*============================|LOCATION APPEARANCE LOGIC FUNCTIONS|*/
function houseAppears(){}
function storeAppears(){}
function buildingAppears(){}
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*============================|PLAYER CLASS|*/
class Player {
constructor(name, health, unarmedAttack, weapon = [], food = []){}
/*============================|PRINT INVENTORY METHOD|*/
printInventory(){}//<========================CODE IS GOOD
/*============================|CHOOSE WEAPON METHOD|*/
chooseWeapon(){}
/*============================|CHOOSE FOOD METHOD|*/
chooseFood(){}
/*============================|EAT FOOD MEATHOD (HEAL PLAYER)|*/
eatFood(food){}
/*============================|TAKE DAMAGE METHOD|*/
takeDamage(damage){}
/*============================|ATTACK THREAT METHOD|*/
attack(threat){}
/*============================|RUNAWAY METHOD|*/
runAway(threat){}    }
/*============================|INSTANCIATED PLAYER|*/
const player = new Player(name, 1000, 10, [], []);
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
/*============================|ROAD MAP GLOBAL VARIABLE|*/
const roadMap = ["Colorado", "Oklahoma", "Texas", "Louisiana", "Mississippi", "Alabama", "Georgia", "Florida", "Terminus"]
/*============================|STATES TRAVELED GLOBAL VARIABLE ARRAY|*/
const statesTraveled = [];
/*============================|ENCOUNTER GLOBAL FUNCTION|*/
function encounters(){}
/*============================|STRUCTURE GLOBAL ENCOUNTER FUNCTION|*/
function structureEncounter(){}
/*============================|GAMESTART GLOBAL FUNCTION|*/
function gameStart(){}//<========================CODE IS GOOD
/*============================|DIRECTIONS GLOBAL FUNCTION|*/
function whatHappened(){}//<========================CODE IS GOOD
/*============================|RESPAWN GLOBAL FUNCTION|*/
function respawn(){}
/*============================|BEAT GAME, PLAY AGAIN GLOBAL FUNCTION|*/
function playAgain(){}
/*============================|QUITGAME GLOBAL FUNCTION|*/
function quitGame(){}//<========================CODE IS GOOD
/*============================|WALKING GLOBAL FUNCTION|*/
function walking(){}//<========================CODE IS GOOD
/*%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%*/
       









