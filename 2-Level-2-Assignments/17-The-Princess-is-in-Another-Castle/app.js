/*==================================|The Princess is in Another Castle|==============================================*/
//                                  |           Requirements:         | 
/*
- Create a class for a player that has the following properties:
- `name` of type `String`
- `totalCoins` of type `Number`
- `status` of type `String` (options are `Powered Up`, `Big`,`Small`, and `Dead`)


- `hasStar` of type `Boolean` (Is a star active?)
- `setName` of type `function` - Has a parameter called `namePicked` where you pass in "Mario" or "Luigi". Sets `name` to "Mario" or "Luigi".
- `gotHit` of type `function` - this is called whenever the player is hit by an enemy. `gotHit()` will set the `status` property accordingly. (Statuses go from "Powered Up" to "Big" to "Small" to "Dead".)
- `gotPowerup` of type `function` - called when a powerup is received and sets the status accordingly. (Statuses go from "Small" to "Big" to "Powered Up". If you are Powered Up and it hits this function, you get a star)
- `addCoin` of `function` - adds a coin to totalCoins
- `print` of type `function` - prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
    - Name: Luigi,
    - Status: Small, etc, etc

Use that class to create the object.

Create a [random range function](http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range) that  either 0, 1, or 2.

If the value is 0 call the `gotHit()` function on the object. If the value is 1 call the `gotPowerup()` function on the object. If the value is 2 call the `addCoin()` function

Then call the print method on the object.

Now put the random range function inside a `setInterval` function that ends after the player is dead
*/




class Player {
        constructor(name, totalCoins, currentStatus, hasStar) {
        this.name = name;   
        this.totalCoins = totalCoins;   
        this.currentStatus = currentStatus; 
        this.hasStar = hasStar; 
    }
    setName(namePicked) {
        if (namePicked === "Mario" || namePicked === "Luigi") {
            this.name = namePicked;
        }
    }
    gotHit(){
        if (this.hasStar === true) {
            this.currentStatus = "Powered Up";
            this.hasStar = false,
            console.log("YOU GOT HIT. YOU ARE NOW POWERED UP")
        } else if (this.currentStatus === "Powered Up") {
            this.currentStatus = "Big",
            console.log("YOU GOT HIT. YOU ARE NOW BIG")
            } else if (this.currentStatus === "Big") {
            this.currentStatus = "Small",
            console.log("YOU GOT HIT. YOU ARE NOW BIG")
            } else if (this.currentStatus === "Small") {
                console.log("SORRY! YOU DIED! BETTER LUCK NEXT TIME"),
            this.currentStatus = "Dead"
            

        }
    }
    gotPowerup(){
        if (this.currentStatus === "Small") {
            this.currentStatus = "Big";
            console.log("THAT'S A TASTY MUSHROOM")
        } else if (this.currentStatus === "Big") {
            this.currentStatus = "Powered Up";
            console.log("HERE COMES THE FIREBALL")
            } else if (this.currentStatus === "Powered Up") {
            this.hasStar = true;
            console.log("IT'S A ME, MARIO")
            } 
        }

    addCoin() {
        this.totalCoins += 1;
        console.log('YAHOOOOOO')

    }
    print() {
        console.log([
            `Name: ${this.name}`,
            `Total Coins: ${this.totalCoins}`,
            `Status: ${this.currentStatus}`,
            `Invincible: ${this.hasStar}`,
        ])
    }
}
const player1 = new Player("Mario", 0, "Big", false);
const player2 = new Player("Luigi", 0, "Small", false);



const gameInterval = setInterval(function gameAction() {
    const action = Math.floor(Math.random() * 3);
    if (action === 0) {
        player1.gotHit();
        player1.print();
        if (player1.currentStatus === "Dead")
        clearInterval(gameInterval);
    } else if (action === 1) {
        player1.gotPowerup();
        player1.print();
    } else {
        player1.addCoin();
        player1.print();
    }
    console.log(action)
}, 1000)



