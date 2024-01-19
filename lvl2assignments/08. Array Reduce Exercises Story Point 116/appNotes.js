// 1) Turn an array of numbers into a total of all the numbers
function total(arr) {
    return arr.reduce(function(final, num) {
     final = final + num;
     return final;
    })
 }
 
 console.log(total([1,2,3])); // 6
 
 // ES6 version
 const totalES6 = arr => arr.reduce((final, num) => final + num, 0);
 console.log(totalES6([1,2,3])); // 6
 
 //==================================================================================================>
 
 // 2) Turn an array of numbers into a long string of all those numbers
 function stringConcat(arr) {
    return arr.reduce(function (final, num){
     return final.concat(num.toString())
    },'')
 }
 
 console.log(stringConcat([1,2,3])); // "123"
 
 // ES6 version
 const stringConcatES6 = arr => arr.reduce((final, num) => final + num.toString(), '');
 console.log(stringConcatES6([1,2,3])); // "123"
 
 //==================================================================================================>
 
 // 3) Turn an array of voter objects into a count of how many people voted
 function totalVotes(arr) {
    return arr.reduce(function (final, voter) {
     if(voter.voted) {
         final++
     }
     return final
    }, 0)
 }
 
 console.log(totalVotes(voters)); // 7
 
 // ES6 version
 const totalVotesES6 = arr => arr.reduce((final, voter) => (voter.voted ? final + 1 : final), 0);
 console.log(totalVotesES6(voters)); // 7
 
 //==================================================================================================>
 
 // 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
 function shoppingSpree(arr) {
    return arr.reduce(function (final, item) {
     final = final + item.price;
     return final
    }, 0)
 }
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 console.log(shoppingSpree(wishlist)); // 227005
 
 // ES6 version
 const shoppingSpreeES6 = arr => arr.reduce((final, item) => final + item.price, 0);
 console.log(shoppingSpreeES6(wishlist)); // 227005
 
 //==================================================================================================>
 
 // 5) Given an array of arrays, flatten them into a single array
 function flatten(arr) {
    return arr.reduce(function (final, array) {
     return final.concat(array)
    }, [])
 }
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 
 // ES6 version
 const flattenES6 = arr => arr.reduce((final, array) => final.concat(array), []);
 console.log(flattenES6(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 
 //==================================================================================================>
 
 // 6) Given an array of potential voters, return an object representing the results of the vote
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 
 function voterResults(arr) {
    return arr.reduce(function (final, voter){
     if (voter.age <= 25) {
         final.numYoungPeople++;
         if (voter.voted) {
             final.numYoungVotes++
         }
     } else if (voter.age <= 35) {
         final.numMidsPeople++;
         if (voter.voted) {
             final.numMidVotesPeople++
         } 
     } else if (voter.age <= 55) {
         final.numOldsPeople++;
         if (voter.voted) {
             final.numOldVotesPeople++
         } 
     }
     return final
 }, {      
     numYoungVotes: 0,
     numYoungPeople: 0,
     numMidVotesPeople: 0,
     numMidsPeople: 0,
     numOldVotesPeople: 0,
     numOldsPeople: 0})
 }
 
 console.log(voterResults(voters)); // Returned value shown below:
 /*
 { numYoungVotes: 1,
   numYoungPeople: 4,
   numMidVotesPeople: 3,
   numMidsPeople: 4,
   numOldVotesPeople: 3,
   numOldsPeople: 4
 }
 */
 
 // ES6 version
 const voterResultsES6 = arr => arr.reduce((final, voter) => {
     if (voter.age <= 25) {
         final.numYoungPeople++;
         if (voter.voted) {
             final.numYoungVotes++;
         }
     } else if (voter.age <= 35) {
         final.numMidsPeople++;
         if (voter.voted) {
             final.numMidVotesPeople++;
         } 
     } else if (voter.age <= 55) {
         final.numOldsPeople++;
         if (voter.voted) {
             final.numOldVotesPeople++;
         } 
     }
     return final;
 }, {      
     numYoungVotes: 0,
     numYoungPeople: 0,
     numMidVotesPeople: 0,
     numMidsPeople: 0,
     numOldVotesPeople: 0,
     numOldsPeople: 0});
 console.log(voterResultsES6(voters)); // Returned value shown below:
 
 //==================================================================================================>
 
 // Extra credit - Using AJAX to get Github repositories and count watchers
 // (Note: This part can't be executed here as it involves asynchronous operations, but you can try it in a browser's console)
 // Uncomment this part if you want to try it out.
 
 /*
 const username = '<YOUR GITHUB USERNAME HERE>';
 
 // Using fetch for simplicity, consider using Axios in a real project
 fetch(`https://api.github.com/users/${username}/repos`)
     .then(response => response.json())
     .then(repos => {
         const totalWatchers
*/