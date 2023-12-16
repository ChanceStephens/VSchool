//################################################ **Game start:** ################################################ 

//*********************************************Tell the user their options:****************************************
//                                                                                                              //
//          1. Find the key, or                                                                                 //
//          2. Put hand in hole                                                                                 //
//          3. Open the door                                                                                    //
//                                                                                                              //    
// They can't open the door unless they find the key first.They die if they put their hand in the hole.         //
//*****************************************************************************************************************
const readline = require("readline-sync");
const yesOrNo = [`Yes`, `No`];
const startGame = () => {
    const start = readline.keyInSelect(yesOrNo, `Do you want to play?`);
    if (start === 0) {
        readline.keyInPause(`Welcome to the "Saw" Escape Room`);;
    } else {
        readline.keyInPause(`"Okay then. Have a great day! Goodbye!"`);
        process.exit();
    }          
readline.keyInPause(`After working on VSchool lessons all day, you decided it's time for a break.`);
readline.keyInPause(`What better way to get some fresh air than a stroll through the park?`);
readline.keyInPause(`You stop by the pond, close your eyes and feel the cool breeze in your hair and
    the warm sun on your face, but all of a sudden someone shouting breaks your moment of zen...`);
        console.log();
            const name = readline.question(`"HEY! Hey you over there! What is your name?" `);
            readline.keyInPause(`You respond, "Me?... Um, my name is ${name}."`);
            readline.keyInPause(`"Well hello ${name}, my name is John Kramer, it's nice to meet you!"`);
        console.log();
            const helpMe = readline.keyInYNStrict(`"Hey, listen, I hate to be a bother, 
    but do you mind helping me out ${name}? It will only take a second..."`)
            if (helpMe) {
                readline.keyInPause(`You respond "Sure! I'm always happy to lend a hand!"`);
                console.log();
                readline.keyInPause(`John responds enthusiastically "Thank you so much! My dog got off 
    his leash and I need help finding him and I think he went over that way"`);
                console.log();
                readline.keyInPause(`John points to a white van at the edge of the park.`)
                console.log();
            } else {
                readline.keyInPause(`You respond "Ummmm, I'm Sorry. My mama taught me to never talk to strangers."
    and you turn to walk away, hoping he finds someone else to bother.`)
                console.log();
            }
        readline.keyInPause(`When you turn around, you feel something hit you in the back of the head!
    You feel yourself falling, and everything goes dark.......`);
        readline.keyInPause(`You wake up to find yourself in a dark room with a sliver of light coming from a hole in the wall`);
        console.log();
        readline.keyInPause(`Looking around, you see a door, some trash, a toilet, a hole in the wall, a desk,
    a box, and a creepy clown doll on a tricycle.`)
        readline.keyInPause(`As you try to gather your thoughts and figure out what happened, you hear a deep, calm, menacing voice over an intercom.`)
        console.log();
        const goodNap = readline.keyInYNStrict(`Well, well, well... look who's awake. Did you have a nice nap ${name}?"`)
            if (goodNap) {
                readline.keyInPause(`"Well, thats good to hear ${name}, because you are going to need to be well rested for what is about to happen next.
    You're probably wondering 'What is going to happen to me?' or 'Why me?, right? 
    Of course you are! Let me explain. Too many times you have failed to post your daily stand up. This is unacceptable. I am going to give you a chance
    to make up for all the daily stand ups you've missed.  All you have to do is play a little game... so tell me ${name},`);
            } else {
                readline.keyInPause(`"Awwww, well thats too bad ${name}. You're going to need your rest for what is going to happen next.
    You're probably wondering 'What is going to happen to me?' or 'Why me?, right? 
    Of course you are! Let me explain. Too many times you have failed to post your daily stand up. This is unacceptable. I am going to give you a chance
    to make up for all the daily stand ups you've missed.  All you have to do is play a little game... so tell me ${name},`);
            }
const play = readline.keyInYN(`"Do you want to play a game?"`);
            if (play) {
                readline.keyInPause(`"That's gooooood. You're very Optimistic, because you are locked in this room and
    have exactly 1 hour to escape, or be locked in here forever!"`);
            } else {
                readline.keyInPause(`"Oh no?... well that's too bad, because you are locked in this
    room and have exactly 1 hour to escape, or be locked in here forever!"`);
            };
        readline.keyInPause(`"Let me explain the rules of the game. If you want to escape and live, you must find the key, 
    unlock the door, and escape."`);
        console.log();
        readline.keyInPause(`"Find the key and you are free to go and will not be bothered...
    but fail... and this room will become your tomb!"`);
        console.log();
        const ready = readline.keyInYNStrict(`So tell me ${name}, are you ready to play?`);     
            if (ready) {
                console.log(`"Thats the spirit!"`);
                readline.keyInPause(`"By the way... I forgot to mention..., there are several deadly traps in the room, and you will need your
    problem solving skills to escape. So put your little thinking cap on and get ready ${name}, your time starts now... good luck..."`);
            } else {
                console.log(`"HA! Too bad!"`);
                readline.keyInPause(`"By the way... I forgot to mention..., there are several deadly traps in the room, and you will need your
    problem solving skills to escape. So put your little thinking cap on and get ready ${name}, your time starts now... good luck..."`);
            };
const roomOjects = [`The Door`, `The Trash`, `The Toilet`, `The Hole in the Wall`, `The Desk`, `The Box`, `The Doll`];
        readline.keyInPause(`A bright red digital timer turns on and starts counting down from 60 minutes.`);
        readline.keyInPause(`Sitting in total disbelief, panic starts to set in on this very real situation.`);
        const choices = [`Scream for help`, `Use the toilet`, `Take a Nap`, `Look for the key`];
            let lookForKey = () => {
                let foundKey = () => {
                    readline.keyInPause(`You rush over to the door slinging the excrement off your arm...`);
                    console.log(`You exitedly insert the key and turn the handle. "CLICK". The door unlocks.`);
                    readline.keyInPause(`You swing the door open. You close your eyes, the fresh air hits your lungs and bright light warms your body`);
                    readline.keyInPause(`All of a sudden you hear an alarm... "BEEP...BEEP...BEEP...BEEP...`);
                    readline.keyInPause(`"You ask yourself, "Where is that sound coming from?"`);
                    readline.keyInPause(`You open your eyes, and take a look around and realize...`);
                    readline.keyInPause(`You are in your bedroom and your alarm clock is going off.`);
                    console.log(`"IT WAS JUST A DREAM!!! What a crazy dream that was. No more watching scary movies before bed"`);
                    readline.keyInPause(`"Well, I better get ready for my group stand up and Vschool. Oh, and I will never forget to 
    complete my daily stand up again!"`);
                    readline.keyInPause(`I hope you have enjoyed the "Saw Escape Room". You can press any key to exit.`);
                    process.exit();
                }
                while (true) {
                    const roomOjectsIndex = readline.keyInSelect(roomOjects, `"Where should I look?`);
                    const selection = roomOjects[roomOjectsIndex];
                        if (selection === `The Toilet`) {
                            readline.keyInPause(`"I can't believe I have to do this. I think I'm going to throw up"`);
                            readline.keyInPause(`You reach into the muck, down into the drain and you feel something...`);
                            readline.keyInPause(`"YES!! I found the key!!!"`);
                            foundKey();
                        } else if (selection === `The Door`) {
                            readline.keyInPause(`It's locked... Oh well, it was worth a try.`);
                        } else if (selection === `The Trash`) {
                            console.log(`"There is so much garbage! This is like trying to find a needle in a haystack...`);
                            readline.keyInPause(`or a key in a garbage pile..."`);
                            readline.keyInPause(`"Yeah, its not in the garbage."`);
                        } else if (selection === `The Hole in the Wall`) {
                            console.log(`"There's light coming through the hole. Wait! I see something!"`);
                            console.log();
                            console.log(`You reach in the hole and feel a pinch. Drawing your hand back and inspecting it,`);
                            readline.keyInPause(`you see a puncture from what looks like a needle...`);
                            console.log(`"What the hell! Wait... I don't... feel... so..."`);
                            readline.keyInPause(`You feel the poison flow through you and collapse. You have died!`);
                            startGame();
                        } else if (selection === `The Desk`) {
                            readline.keyInPause(`"The Desk! That's where I would hide a key.`);
                            readline.keyInPause(`"Damn, It's not in there!`);
                        } else if (selection === `The Box`) {
                            readline.keyInPause(`"Hmmm... This box says 'The key is not in here'. That seems suspicious..."`);
                            const openBox = readline.keyInYNStrict(`"Should I open it?`);
                                if (openBox) {
                                    readline.keyInPause(`You open the box and discover a device with a countdown timer`);
                                    readline.keyInPause(`10...9...8...7...6...5...4...3...2...1... KABOOOOM`);
                                    readline.keyInPause(`The device explodes. You have died!`);
                                    startGame();
                                } else {
                                    console.log(`"Yeah, that never seems to work out in the movies..."`);
                                    readline.keyInPause(`You decide not to open the box and look elsewhere.`);
                                }
                        } else if (selection === `The Doll`) {
                            readline.keyInPause(`"What a creepy doll! The key has got to be attached to the doll, right?"`);
                            readline.keyInPause(`You destroy the doll down to bits and pieces...`);
                            readline.keyInPause(`"Shoot! No key.  Where can that key be?"`);
                        }
                }                
            }
                while (true) {
                const choicesIndex = readline.keyInSelect(choices, `"What should I do?"`);                
                const selection = choices[choicesIndex];
                    if (selection === "Look for the key") {
                        console.log(`"I have to find this key so I can get out of here!"`);
                        lookForKey();
                    } else if (selection === "Scream for help") {
                        console.log(`"HEEEEELLP!! SOMEBODY HEEEEELP MEEEEE PLEEEEASE"`);
                        readline.keyInPause(`"It's no use... No one is going to hear me in here.""`);
                    } else if (selection === "Use the toilet") {
                        readline.keyInPause(`"Ewwww, the toilet looks backed up, but I need to go bad!`)
                        console.log(`"Ahhhh, I feel better. I really had to pee!"`);
                        readline.keyInPause(`"GROSS!!! It won't flush!`)

                    } else if (selection === "Take a Nap") {
                        readline.keyInPause(`You lay down, close your eyes, and take a nap`);
                        console.log(`You wake up and realize you overslept, and the timer reads "00:00".`);
                        readline.keyInPause(`You realize you are permanently locked in, and you will die here.`);
                    startGame();                        
                    }                   
            }            
};
startGame();
