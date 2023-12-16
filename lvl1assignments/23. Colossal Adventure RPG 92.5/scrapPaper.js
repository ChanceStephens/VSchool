// const readline = require("readline-sync");
/*==================================================================|PLAYERS NAME: Story Point 83|================================================*/     
// const name = readline.question("What is your name, survivor? ");
/*------------------------------------------------------------------|GAME START|------------------------------------------------------------------*/
// startGame();
// directions();
/*******************************************************************|WEAPON CONSTRUCTOR FUNCTION: COMPLETE|**************************************************/
// class Weapon { 
//     constructor(weapon, damage, status) {
//         this.weapon = weapon;
//         this.damage = damage;
//         this.status = status;
//     }
// }
// const knife = new Weapon('A Knife', 10, 50);
// const crowBar = new Weapon('A Crowbar', 15, 30);
// const hatchet = new Weapon('A Hatchet', 20, 25);
// const crossBow = new Weapon('A Cross Bow', 40, 8);
// const revolver = new Weapon('A Revolver', 75, 6);
/*******************************************************************|HEALTH CONSTRUCTOR FUNCTION: COMPLETE|**************************************************/
// class Health {
//     constructor(item, health){
//         this.item = item;
//         this.health = health;
//     }
// }
// const beans = new Health('A Can of Beans', 5)
// const fruit = new Health('A Can of Fruit', 6);
// const twinkies = new Health('Some Twinkies', 7)
// const soup = new Health('A Can of Soup', 8);
// const jerky = new Health('Some Beef Jerky', 9);
// const tuna = new Health('A Can of Tuna', 10);
// const animal = new Health('Cooked Meat', 15);    
// const medKit = new Health('Med Kit', 20);
/*******************************************************************|LOOT GENERATOR CONSTRUCTOR FUNCTION|**************************************************************/
// class LootGenerator {
//     constructor(weapons, healthItems) {
//         this.weapons = weapons;
//         this.healthItems = healthItems;
//     }
//     generateWeapon() {
//         const randomNumber = Math.floor(Math.random() * this.weapons.length);
//         return this.weapons[randomNumber];
//     }
//     generateHealthItem() {
//         const randomNumber = Math.floor(Math.random() * this.healthItems.length);
//         return this.healthItems[randomNumber];
//     }
// }
/*******************************************************************|ENCOUNTERS FUNCTION|*******************************************************************/
// function foundLoot() {
//     const lootGenerator = new LootGenerator(allWeapons, allHealing);

//     const weapon = lootGenerator.generateWeapon();
//     const healthItem = lootGenerator.generateHealthItem();

//     if (weapon) {
//         readline.keyInPause(`You Looted ${weapon.weapon}!`);
//         player.addToInventory(weapon);
//     } else {
//         readline.keyInPause('No weapons found...');
//     }

//     if (healthItem) {
//         readline.keyInPause(`You Looted ${healthItem.item}!`);
//         player.addToInventory(healthItem);
//     } else {
//         readline.keyInPause('No health items found...');
//     }
// }
/*******************************************************************|LOCATION CONTRUCTOR FUNCTION|*************************************************/
// class Location {
//     constructor(type) {
//         this.type = type;
//     }
//     loot() {
//         const lootOption = readline.keyInYNStrict(`Do you want to search for supplies at this ${this.type}?`);
//         if (lootOption) {
//             readline.keyInPause('Press any key to open the door...');
//             structureEncounter(); 
//             foundLoot();               
//         } else {
//             console.log(`You decide not to loot at this ${this.type}.`);
//             walking();
//         }
//     }    
// }
// const house = new Location('Abandoned House');
// const store = new Location('Abandoned Store');
// const building = new Location('Abandoned Building');

/*******************************************************************|HOUSE|*******************************************************/            
// function lootHouse() {
//     // console.log(`Amid the desolation, you find an abandoned house. Maybe there's something useful inside.`);
//     house.loot();
// };
/*******************************************************************|STORE|*******************************************************/
// function lootStore() {
//     // console.log(`A deserted store stands before you. Explore cautiously, who knows what you might find.`);
//     store.loot();
// };
/*******************************************************************|BUILDING|*******************************************************/
// function lootBuilding() {
//     // console.log(`An abandoned building looms ahead. Investigate, but stay alert for any surprises.`);
//     building.loot();
// };
/*******************************************************************|ROADMAP AND STATE TRAVELED GLOBAL VARIABLE|**************************************************/   
// const roadMap = ["Colorado", "Oklahoma", "Texas", "Louisiana", "Mississippi", "Alabama", "Georgia", "Florida", "Terminus"]
// const statesTraveled = []; 
/*******************************************************************|CONSTRUCTOR FUNCTION|**************************************************/   
/*******************************************************************|PLAYER CONSTRUCTOR FUNCTION|**************************************************/
// class Player {
//     constructor(name, health, attack) {
//       this.name = name;
//       this.health = health;
//       this.attack = attack;
//       this.weaponInventory = [];
//       this.recoveryInventory = [];
//     }
    // printInventory() {
    //     console.log(`${this.name}'s Inventory:`);
    //     console.log(`Health: ${this.health}`);
    //     console.log(`Weapons: ${this.weaponInventory.join(', ')}`);
    //     console.log(`Recovery Items: ${this.recoverInventory.join(', ')}`);
    // }
    
//     takeDamage(damage) {
//         this.health -= damage;
//         console.log(`${this.name} took ${damage} damage. Current health: ${this.health}`);
//     }

   
//     runAway(threat) {
//     console.log(`You managed to escape, but not without consequences.`);
    
//     const threatDamage = threat.attack; 
//         this.takeDamage(threatDamage);

//     console.log(`The ${threat.name} attacked you. Current health: ${this.health}`);
//   }

// }
// const player = new Player(name, 100, 10)
/*******************************************************************|THREAT CONSTRUCTOR FUNCTION|**************************************************/   
// class Threat {
//     constructor(name, health, attack) {
//     this.name = name;
//     this.health = health;
//     this.attack = attack;
// }
// takeDamage(damage) {
//     this.health -= damage;
//     if (this.health < 0) {
//         this.health = 0;
//         }
// }
// }
// const basicZombie = new Threat('Walker Zombie', 20, 2);
// const bigZombie = new Threat('Bloated Zombie', 30, 5);
// const armoredZombie = new Threat('Military Zombie', 35, 2);
// const smallHorde = new Threat('A Small Horde', 35, 6);
// const mediumHorde = new Threat('A Horde', 50, 10);
// const largeHorde = new Threat('A Massive Horde', 75, 18);
// const blackBear = new Threat('Bear', 75, 15);
// const mountainLion = new Threat('Mountain Lion', 50, 9);
// const alphaWolf = new Threat('Wolf', 30, 7);
// const evilSurvivor = new Threat('Survivor', 100, 5);
/*******************************************************************|ATTACK FUNCTION|*******************************************************/
// function battle(player, threat) {
      
//     while (player.health > 0 && threat.health > 0) {
//       const letsAttack = readline.keyIn(`Do you want to attack? "y" for yes, "n" for no.`,
//       {hideEchoBack: true, mask: "", limit: ["y", "n"]});
  
//       if (letsAttack) {
//         player.attackThreat(threat);
  
//         // Check if the threat is defeated
//         if (threat.health <= 0) {
//           console.log(`You have defeated the ${threat.name}!`);
//           break;
//         }
  
//         // Threat's turn if it's still alive
//         const threatDamage = threat.attack;
//         player.takeDamage(threatDamage);
  
//         // Check if the player is defeated
//         if (player.health <= 0) {
//           console.log(`The ${threat.name} has defeated you!`);
//           break;
//         }
//       } else {
//         player.runAway(threat);
//         break;
//       }
//     }
//   }
// function enemyAttack(enemy, player) {
//     console.log(`${enemy.name} counterattacks...`);
//     const hitChance = Math.random();
//     if (hitChance <= 0.75) {
//         const damage = enemy.attack;
//         player.takeDamage(damage);
//         console.log(`${enemy.name} dealt ${damage} damage! Your health is now ${player.health}`);
//     } else {
//         console.log(`${enemy.name} missed the counterattack!`);
//     }
//     if (player.health <= 0) {
//         console.log(`${enemy.name} has killed you!`);
//         respawn();
//     }
// }
/*******************************************************************|GAME START FUNCTION: COMPLETE|**********************************************************/
// function startGame() {
//     /*------------------------------------------------------------------|STORY|-----------------------------------------------------------------------*/
//     /*==================================================================|WELCOME MESSAGE: Story Point 82|=============================================*/  
//     console.log(`The year is 2023, and civilization as we know it no longer exists. A virus, now known as the "Necro Virus", has wiped out 80% of the human race.`);
//         console.log(`It turns normal human beings into the undead! Your goal in this apocalyptic world is to reach "Terminus Destinatio" or "The Final Destination".`);
//         console.log(`Terminus Destinatio is a sanctuary for remaining survivors in the United States, located in what used to be Florida, beyond a great wall`);
//         console.log(`stretching from the Gulf of Mexico to the Atlantic Ocean. Your only objective is survival, and that means making the journey to Terminus Destinatio.`);
//         console.log(`Brace yourself for a journey through the remnants of civilization where the undead roam, survivors can't be trusted, threats lurk at every corner,`);
//         readline.keyInPause(`resources are limited, and every decision means life or death.`);       
//         readline.keyInPause(`Welcome to "The Dawn of Decay"!`);
//             let start = readline.keyIn(`Are you ready to make the journey to "Terminus Destinatio", ${name}? [y] for yes, [n] for no.`,
//             {hideEchoBack: true, mask: "", limit: ["y", "n"]});
//             if (start === "y") {
//             readline.keyInPause(`Good Luck ${name} and godspeed!`);
//             } else {
//                 readline.keyInPause(`Hope to see you soon! Goodbye ${name}!`);
//                 process.exit()
//             } 
//     };
/*******************************************************************|RESPAWN FUNCTION: COMPLETE|*************************************************************/    
// function respawn() {
//     let restart = readline.keyIn(`Do you want to attempt the journey to "Terminus Destinatio" again, ${name}? [y] for yes, [n] for no.`,
//         {hideEchoBack: true, mask: "", limit: ["y", "n"]});
//     if (restart === "y") {
//     readline.keyInPause(`Good luck ${name}!`);
//     } else if (restart === "n") {
//         readline.keyInPause(`Hope to see you soon, ${name}! Goodbye!`);
//         process.exit();
//     } else {
//         console.log("That input is not valid. Please press [y] for yes and [n] for no...")
//     };
// };
/*******************************************************************|PLAY AGAIN FUNCTION: COMPLETE|*************************************************************/    
// function playAgain() {
//     readline.keyInPause(`You start to approach a massive wall stretching from your left to your right for as long as the eye can see. As you approach you find yourself surrounded by soldiers...`);
//     readline.keyInPause(`Halt! Place your hands over your head and do not move!`);
//     readline.keyInPause(`You hear a solder speaking into a walkie-talkie "Command, we've got a survivor approaching the gates. Requesting authorization to engage in conversation."`);
//     readline.keyInPause(`The voice over the radio replies back after a few seconds of silence. "Proceed with caution, Alpha Team. Verify their identity and intentions before granting access and processing."`);
//     readline.keyInPause(`"Copy that, Command."  "You, state your name and purpose here!`);    
//     readline.keyInPause(`My name is ${name}. I've been traveling for days and was told there's safety and supplies here.`);    
//     readline.keyInPause(`Another soldier approaches while keeping his weapon aimed at you and says "Keep your hands visible, ${name}. What's your business here? Any bites or infections?`);    
//     readline.keyInPause(`No bites and no infections. Just an exhausted survivor looking for refuge.`);
//     readline.keyInPause(`The Team Leader approaches cautiously... "Keep your hands where we can see them. We'll need to search you for weapons and supplies.`);    
//     readline.keyInPause(`"Sure, whatever it takes! I am just looking for a safe place to finally..." `);    
//     readline.keyInPause(`The soldier conducting the search interupts you... "Clear! No weapons or immediate threats, Sir.`);    
//     readline.keyInPause(`The Team Leader says to you "Alright, ${name}. You can enter and prepare for processing, but understand this is a secure zone with strictly enforced rules.`);
//     readline.keyInPause(`Follow the rules, and there wont be any problems. If there is any funny business, we won't hesitate...`);
//     readline.keyInPause(`You thank them and follow one of the soldiers to the gate. As the gate opens he says to you, `);    
//     readline.keyInPause(`"Welcome to Terminus. Head to the registration point there, and they'll get you sorted out.`);    
//     readline.keyInPause(`"Thank you, thank you! I can't tell you how relieved I am to have found this place.`);    
//     readline.keyInPause(`You hear some chatter on the soldiers walkie-talkie. "Get back to your post soldier.  Looks like a large horde was following this guy!`);    
//     readline.keyInPause(`"Roger that". The soldier turns to you and says "Good luck, ${name}, and welcome to your new home and the safest place you'll find in this world.`);
//     let play = readline.keyIn(`Do you want to attempt the journey to "Terminus Destinatio" again, ${name}? [y] for yes, [n] for no.`,
//     {hideEchoBack: true, mask: "", limit: ["y", "n"]});
//     if (play === "y") {
//         readline.keyInPause(`Good luck ${name}!`);
//         } else if (play === "n") {
//             readline.keyInPause(`Hope to see you soon, ${name}! Goodbye!`);
//             process.exit();
//         };
// }
/*******************************************************************|QUIT GAME FUNCTION: COMPLETE|*************************************************************/    
// function quitGame() {
//     let quit = readline.keyIn(`Are you sure you want to quit? [y] for yes, [n] for no.`,
//     {hideEchoBack: true, mask: "", limit: ["y", "n"]});
//         if (quit === "y") {
//             readline.keyInPause(`Hope to see you soon! Goodbye ${name}!`);
//             process.exit()
//         } else if (quit === "n") {
//             walking();
//         } else {
//             console.log("That input is not valid. Please press [y] for yes and [n] for no...")
//         }
// };
/*------------------------------------------------------------------|DIRECTIONS|------------------------------------------------------------------*/
/*******************************************************************|GAME DIRECTIONS FUNCTION: FUNCTION COMPLETE, TEXT NEEDS EDITING|*******************************************************************/ 
// function directions() {
//     let howToPlay = readline.keyInSelect(yesOrNo, `Do you need directions ${name}?`);
//     if (howToPlay === 0) {
//         readline.keyInPause(`To walk, press "w". There is a 25% Chance for a dangerous encounter every time you walk.`);
//         readline.keyInPause(`Dangerous encounters include, zombies ,survivors, zombie hordes, and wild animals.`);
//         readline.keyInPause(`You may attack or run away. To attack, press "a", a random amount of damage will be dealt.`);
//         readline.keyInPause(`To run away, press "r". If running away, there will be a 50% chance of escaping.`);
//         readline.keyInPause(`The attack will go on until you or the enemy passes out or dies.`);
//         readline.keyInPause(`Killing enemies can reward either HP, dropped items, or both!`);        
//         readline.keyInPause(`To see your status and items in your backpack, press "p".`);
//         readline.keyInPause(`All survivors are not dangerous and may offer help in the form of HP, supplies, or food.`);
//         readline.keyInPause(`There are several locations such as abandoned homes, stores, and buildings you may search for supplies and food.`);
//         readline.keyInPause(`Each location can always pose a risk for dangerous encounters, so beware!`);
//         readline.keyInPause(`Thats all there is to it! I hope to see you in Terminus Destinatio.`);        
//     } else {
//         readline.keyInPause(`Great! I hope to see you in Terminus Destinatio.`);
//     };
// };
/*------------------------------------------------------------------|GAME LOOP|------------------------------------------------------------------*/
/*==================================================================|WALKING: Story Point 83|====================================================*/
// walking();
// function walking() {
//     while (true) {
//         let option = readline.keyIn("What would you like to do? Press [w] to walk, [i] to see inventory, [q] to quit", {hideEchoBack: true, mask: "", limit: ["w", "i", "q"]});
//      console.log(option);
//         if (option.toLowerCase() === "w") {
//             console.log("walking...");
//             encounters();
//         } else if (option.toLowerCase() === "i") {
//             player.printInventory();
//         } else if (option.toLowerCase() === "q") {
//             quitGame();
//         }
//     }
// }        
/*******************************************************************|VANILLA ZOMBIE:BASIC ZOMBIE|*******************************************************/   
// function basicZombie() {
//     console.log(`A lone zombie stumbles into view. Be careful`);
//     let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);
//         if (letsAttack) {
//             while (player.health > 0 && basicZombie.health > 0) {
//                 player.attackEnemy(basicZombie);
//                 if (basicZombie.health > 0) {
//                     enemyAttack(basicZombie, player);
//                 }
//             }
//             if (player.health <= 0) {
//                 console.log(`${basicZombie.name} has killed you!`);
//             } else {
//                 console.log(`You have killed ${basicZombie.name}!`);
//             }
//         } else {
//             player.runAway(basicZombie, player);
//     }
// };
/*******************************************************************|BIG ZOMBIE: BLOATER ZOMBIE|*******************************************************/
// function bloater() {
//     console.log(`A lone zombie stumbles into view. Be careful`);
//     let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);
//         if (letsAttack) {
//             while (player.health > 0 && bigZombie.health > 0) {
//                 player.attackEnemy(bigZombie);
//                 if (bigZombie.health > 0) {
//                     enemyAttack(bigZombie, player);
//                 }
//             }

//             if (player.health <= 0) {
//                 console.log(`${bigZombie.name} has killed you!`);
//             } else {
//                 console.log(`You have killed ${bigZombie.name}!`);
//             }
//         } else {
//             player.runAway(bigZombie, player);
//     }
// };
/*******************************************************************|ARMORED ZOMBIE: MILITARY ZOMBIE|*******************************************************/
// function military() {
//     console.log(`A lone zombie stumbles into view. Be careful`);
//     let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);
//         if (letsAttack) {
//             while (player.health > 0 && armoredZombie.health > 0) {
//                 player.attackEnemy(armoredZombie);
//                 if (armoredZombie.health > 0) {
//                     enemyAttack(armoredZombie, player);
//                 }
//             }

//             if (player.health <= 0) {
//                 console.log(`${armoredZombie.name} has killed you!`);
//             } else {
//                 console.log(`You have killed ${armoredZombie.name}!`);
//             }
//         } else {
//             player.runAway(armoredZombie, player);
//     }
// };
/*******************************************************************|LITTLE/SMALL HORDE|*******************************************************/
// function littleHorde() {
//     console.log(`The eerie sound of shuffling grows louder—oh no, it's a zombie horde!`);
//     let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);

//         if (letsAttack) {
//             while (player.health > 0 && smallHorde.health > 0) {
//                 player.attackEnemy(smallHorde);
//                 if (smallHorde.health > 0) {
//                     enemyAttack(smallHorde, player);
//                 }
//             }

//             if (player.health <= 0) {
//                 console.log(`${smallHorde.name} has killed you!`);
//             } else {
//                 console.log(`You have killed ${smallHorde.name}!`);
//             }
//         } else {
//             player.runAway(smallHorde, player);
//     }
// };
/*******************************************************************|MEDIUM/AVERAGE HORDE|*******************************************************/
// function averageHorde() {
//     console.log(`The eerie sound of shuffling grows louder—oh no, it's a zombie horde!`);
//     let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);

//         if (letsAttack) {
//             while (player.health > 0 && mediumHorde.health > 0) {
//                 player.attackEnemy(mediumHorde);
//                 if (mediumHorde.health > 0) {
//                     enemyAttack(mediumHorde, player);
//                 }
//             }

//             if (player.health <= 0) {
//                 console.log(`${mediumHorde.name} has killed you!`);
//             } else {
//                 console.log(`You have killed ${mediumHorde.name}!`);
//             }
//         } else {
//             player.runAway(mediumHorde, player);
//     }
// };
/*******************************************************************|LARGE/HUGE HORDE|*******************************************************/
// function hugeHorde() {
//     console.log(`The eerie sound of shuffling grows louder—oh no, it's a zombie horde!`);
//     let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);

//         if (letsAttack) {
//             while (player.health > 0 && largeHorde.health > 0) {
//                 player.attackEnemy(largeHorde);
//                 if (largeHorde.health > 0) {
//                     enemyAttack(largeHorde, player);
//                 }
//             }

//             if (player.health <= 0) {
//                 console.log(`${largeHorde.name} has killed you!`);
//             } else {
//                 console.log(`You have killed ${largeHorde.name}!`);
//             }
//         } else {
//             player.runAway(largeHorde, player);
//     }
// };
/*******************************************************************|EVIL/KIND: SURVIVOR|*******************************************************/
// function survivor() {
//         console.log(`Look! A fellow survivor!`);
//         const engageSurvivor = readline.keyInYNStrict(`Do you want to approach the survivor? `);
//         if (engageSurvivor) {
//             const chanceOfGood = Math.ceil(Math.random() * 100) + 1;
//             if (chanceOfGood <= 70) {
//                 readline.keyInPause("Its a friendly survivor! You ask to see if they have any supplies they can spare.")
//                 foundLoot();
//             } else {
//                 console.log(`Oh no, this ${evilSurvivor} wants to kill me!`)
//                 let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);
//                 if (letsAttack) {
//                     while (player.health > 0 && evilSurvivor.health > 0) {
//                         player.attackEnemy(evilSurvivor);
//                         if (evilSurvivor.health > 0) {
//                             enemyAttack(evilSurvivor, player);
//                         }
//                     }
//                         if (player.health <= 0) {
//                             console.log(`${evilSurvivor.name} has killed you!`);
//                         } else {
//                             console.log(`You have killed ${evilSurvivor.name}!`);
//                         }
//                     } else {
//                         player.runAway(evilSurvivor, player);
//                 }
                
//             }
//         }
// };
/*******************************************************************|BEAR/BLACKBEAR|*******************************************************/
// function bear() {
//     console.log(`Rustling in the bushes reveals a bear!`);
//     let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);
//         if (letsAttack) {
//             while (player.health > 0 && blackBear.health > 0) {
//                 player.attackEnemy(blackBear);
//                 if (blackBear.health > 0) {
//                     enemyAttack(blackBear, player);
//                 }
//             }
//             if (player.health <= 0) {
//                 console.log(`${blackBear.name} has killed you!`);
//             } else {
//                 console.log(`You have killed ${blackBear.name}!`);
//             }
//         } else {
//             player.runAway(blackBear, player);
//     }
// };
/*******************************************************************|MTN LION/MOUNTAIN LION|*******************************************************/            
// function mtnLion() {
//     console.log(`A pair of piercing eyes stare back at you. It's a mountain lion!`);
//     let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);

//         if (letsAttack) {
//             while (player.health > 0 && mountainLion.health > 0) {
//                 player.attackEnemy(mountainLion);
//                 if (mountainLion.health > 0) {
//                     enemyAttack(mountainLion, player);
//                 }
//             }

//             if (player.health <= 0) {
//                 console.log(`${mountainLion.name} has killed you!`);
//             } else {
//                 console.log(`You have killed ${mountainLion.name}!`);
//             }
//         } else {
//             player.runAway(mountainLion, player);
//     }
// };
/*******************************************************************|WOLF/ALPHAWOLF|*******************************************************/            
    // function wolf() {
    //     console.log(`A wolf appears, eyeing you curiously.`);
//         let letsAttack = readline.keyInYN(`Do you want to attack? "y" for yes, "n" for no.`);

//             if (letsAttack) {
//                 while (player.health > 0 && alphaWolf.health > 0) {
//                     player.attackEnemy(alphaWolf);
//                     if (alphaWolf.health > 0) {
//                         enemyAttack(alphaWolf, player);
//                     }
//                 }

//                 if (player.health <= 0) {
//                     console.log(`${alphaWolf.name} has killed you!`);
//                 } else {
//                     console.log(`You have killed ${alphaWolf.name}!`);
//                 }
//             } else {
//                 player.runAway(alphaWolf, player);
//         }
// };
/*******************************************************************|ENCOUNTER FUNCTION: COMPLETE|*******************************************************/                 
// function encounters() {
//         const randomNumber = Math.ceil(Math.random() * 100) + 1;
//             console.log(randomNumber);
//             if (randomNumber <= 8) {
//                 vanillaZombie();
//                 } else if (randomNumber <= 13) {
//                     bloater();
//                 } else if (randomNumber <= 17) {
//                     military();
//                 } else if (randomNumber <= 20) {
//                     littleHorde();
//                 } else if (randomNumber <= 23) {
//                     averageHorde();
//                 } else if (randomNumber <= 25) {
//                     hugeHorde();
//                 } else if (randomNumber <= 30) {
//                     survivor();
//                 } else if (randomNumber <= 32) {
//                     bear();
//                 } else if (randomNumber <= 35) {
//                     mtnLion();
//                 } else if (randomNumber <= 38) {
//                     wolf();
//                 } else if (randomNumber <= 41) {
//                     lootHouse();
//                 } else if (randomNumber <= 44) {
//                     lootStore();
//                 } else if (randomNumber <= 45) {
//                     lootBuilding();
//                 } else if (randomNumber <= 97) {
//                     console.log(`Nothing Happened`)
//                 } else if (randomNumber <=100) {
//                     const madeIt = roadMap.shift();
//                 statesTraveled.push(madeIt);
//                 console.log(`You have reached ${madeIt}!`);
//                 console.log(`States to go: ${roadMap.join(', ')}`);
//             };  if (roadMap.length === 0)
//             playAgain();
// }    
/*******************************************************************|STRUCTURE ENCOUNTER FUNCTION|*******************************************************/
//     function structureEncounter() {
//         const randomNumber = Math.ceil(Math.random() * 100) + 1;
//             console.log(randomNumber);
//             if (randomNumber <= 7) {
//                 walkerAppears();
//                 } else if (randomNumber <= 12) {
//                     runnerAppears();
//                 } else if (randomNumber <= 15) {
//                     bloaterAppears();
//                 } else if (randomNumber <= 17) {
//                     armoredAppears();
//                 } else if (randomNumber <= 19) {
//                     smallAppears();
//                 } else if (randomNumber <= 21) {
//                     averageAppears();
//                 } else if (randomNumber <= 22) {
//                     largeAppears();
//                 } else if (randomNumber <= 26) {
//                     survivorAppears();
//                 } else if (randomNumber <= 28) {
//                     bearAppears();
//                 } else if (randomNumber <= 30) {
//                     lionAppears();
//                 } else if (randomNumber <= 34) {
//                     wolfAppears();
//                 } else {
//                     console.log("Looks like this place is empty... Let's search for supplies.")
//                 }
// }

