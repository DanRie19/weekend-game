const readlineSync = require('readline-sync')  
const itemsListHome = ["Mask of Protection - Hand Gel of Cleansing - 6 Foot Protection Spell",
"Skittles - A loaf of bread - Raw Meat","Your stuffed animal - A rock - First edition Charizard card"]
const battleItems = ["Mask of Protection",  " Hand Gel of Cleansing", "6 Foot Protection Spell"]
const leoBattleAnswers = ["git push", "delete system32", "git status"]
const ErnieBattleAnswers = ["let","var","const"]
const ernieSecondBattle = ["cry", "give Ernie the Wise cookies", "run away"]
const ronaFightItem = [" Hand Gel of Cleansing"]
const merlinAnswer = ["Never Stop Learning", "Trust The Process","It Wont Be Easy But It Will Be Worth It","All Of The Above"]
//

console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("****************** The Wyncoder *******************")
console.log("************* & The Forgotten Library *************")
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("***************************************************")
console.log("")
console.log("")
console.log("Merlin begins speaking.....")
console.log("")
console.log("")
console.log("  Twas the year 2014 when Lady Johanna and Lord Juha,")
console.log("Forged the walls of the WynFortress, a safe haven")
console.log("for all the people across the land on their quest to")
console.log("learn the mythical arts of the code.")
console.log("")
console.log("  One foul March, the Villain Lord Rona enraged sending")
console.log("all of the WynFortress inhabitants to seek refuge in")
console.log("their homes.")
console.log("")
console.log("  Swiftly, Lady Johanna & Lord Juha called upon their most ")
console.log("talented practitioners and conjured the spell of remote!")
console.log("The practitioners of the arts were able to keep learning!")
console.log("")
console.log("   Yet the tale of the Forgotten The Library lives on.....")
console.log("Legends speak of one true enough to dwell within the library...")
console.log("")
console.log("...could it be?..")
var userName = readlineSync.question('May I have your name fair traveler? ')
console.log("")
console.log("")
console.log( userName + '!');
console.log("")
console.log("")
console.log("tales tell of a " + userName + "....")
console.log("")
console.log("*shuffles over to a pile of dust covered books and picks one*")
console.log("* out of the bunch, quickly ruffles through the pages*")
console.log("*opens eyes wide and looks over to you*")
console.log("")
console.log("")
console.log("YOU ARE THE WYNCODER!! YOU MUST START YOU QUEST AT ONCE!!")
console.log("")
console.log("")
console.log("Go to your dwelling and gather your supplies, I will compose a function of communication")
console.log("and communicate with your through out your journey!")
console.log("*you are home and must gather your necessities for the journey*")
console.log("")


// CHOSEN ITMES LIST//
let wrongList=true

while (wrongList){
let chosenItemsListHome = readlineSync.keyInSelect(itemsListHome, "Ah, "+ userName + " which items have you chosen?")
if (chosenItemsListHome == [0]){
    console.log("")
   console.log("     ***********************************")
    console.log("Great choice " + userName + " those items will surely help you against Lord Rona!")
       console.log("     ***********************************")

    wrongList=false

}else if (chosenItemsListHome == [1]) {
    console.log("")
   console.log("     ***********************************")
    console.log("Uhm..." + userName + " are....are you hungry? Tasty ...not helpful ...please choose again.")
   console.log("     ***********************************")


}else if ( chosenItemsListHome == [2]){
  console.log("")
     console.log("       ***********************************")
    console.log( userName + "! are you sleepy?! oooohhh can I have that card? ...please choose again*****")
       console.log("     ***********************************")

} else {console.log("")
     console.log("              ***********************************")
console.log("💀 💀 💀  You have failed your quest, Exit or choose again. 💀 💀 💀")
     console.log("              ***********************************")
}
}

//CONSOLE LOGS//
console.log("")
console.log("")
console.log("***Off we go to the mythical land of Wynwood!!***")
console.log(userName + " we will encounter various challenges along the way,")
console.log("trials and horrors put in the way by Lord Rona.")
console.log("but fear not brave "+userName+" your " + itemsListHome[0]  )
console.log("will help along the way.")
console.log("")
console.log("")
console.log("***************************************************")

console.log("   ***** YOU TAKE OFF ON YOUR JOURNEY *****")
console.log("***** YOU COME ACROSS A FORK IN THE ROAD *****")
console.log("***************************************************")
console.log("Hmm, I dont remember that being there *scratches head*")
console.log("One path will surely lead us to victory and the other")
console.log("to certain, death.....I KNOW!! LET'S FLIP A COIN! LOL")
console.log("")
console.log("If heads well go right, If tails well go left")
// HEADS OR TAILS//
headsOrTails = readlineSync.question('Was it Heads or Tails?', {
    trueValue: ['Head', 'Heads', 'head','heads','HEADS', 'HEAD'],
    falseValue: ['Tail', 'TAIL', 'tail', 'tails','Tails','TAILS']
  });if (headsOrTails === true) {
    console.log("***************")
    console.log("Ok, " + userName + " right it is!");
    console.log("***************")
  } else if (headsOrTails === false) {
      console.log("***************")
    console.log("Ok, " + userName + " left we go!");
    console.log("***************")

  } else {
    console.log( userName + ' What does "' + headsOrTails + '" mean? The communication function must be failing, lets just go left');
  }

// CONSOLE LOGS  // 

console.log("")
console.log("")
console.log("Ah fitz " + userName + " , We certainly went the wrong way *chuckles* good thing I am safely")
console.log(" at home communicating with you....I mean, don't worry we'll be fine...*murmurs*")
console.log("...even though this is the path of 'Leo the Swift' * cough cough*") 
console.log("")
console.log("")

scream = readlineSync.keyInYNStrict('"Scream at top of lungs to hurt Merlins ears?"');
if (scream === true){
  console.log("BY THE SCRIPTS OF JAVA WHAT WAS THAT!!!!")
  
}else console.log("")

console.log("*************************")
console.log("WHY ON EARTH WOULD YOU....Oh thats right *chuckles* fair enough..")
console.log("*************************")
console.log("*Suddenly strong burst of air hits you as you see a blur zoom by*")
console.log("*Merlin is heard from a distance* Well there goes " + userName + " showed a lot of promise...")
console.log("*************************")
console.log("*Leo the Swift appears before you* Hello, "+ userName + " Lord Rona said you would be coming")
console.log("*Leo the Swift conjurs his spell of Git speed*")
console.log("*Leo the Swift moves at an incredible speed and dust of Rona starts thickening the air!*")
console.log("*It is getting harder to breathe!!!*")
console.log("*************************")
console.log("QUICK " + userName + " USE ONE OF YOUR ITEMS!!!")
console.log("*************************")

let wrongItem=true

while (wrongItem){
let chosenBattleItems = readlineSync.keyInSelect(battleItems, "QUICKLY, "+ userName + " PICK AN ITEM!!")
if (chosenBattleItems == [0]){
    console.log("")
   console.log("     ***********************************")
    console.log("QUICKLY!! " + userName + " PUT IT ON!")
       console.log("     ***********************************")

    wrongItem=false

}else if (chosenBattleItems == [1]) {
    console.log("")
   console.log("     ***********************************")
    console.log(  userName + "!! GREAT YOU HAVE CLEAN HANDS BUT YOU CANT BREATHE!!! PICK AGAIN!!!")
   console.log("     ***********************************")


}else if ( chosenBattleItems == [2]){
  console.log("")
     console.log("       ***********************************")
    console.log( userName + "! NOW HE IS JUST CHOKING YOU FROM AFAR!! PICK AGAIN!!!")
       console.log("     ***********************************")

} else {console.log("")
     console.log("              ***********************************")
console.log("💀 💀 💀  You have failed your quest, Exit or choose again. 💀 💀 💀")
     console.log("              ***********************************")
}
}


console.log("*you put on your mask*")
console.log("*Leo the swift slowly tires from commanding his git spell at lightning speed*")
console.log("*The dust settles*")
console.log("* Leo the Swift Screams* NOT SO FAST!")
console.log("IF YOU WISH TO PASS ME YOU MUST ANSWER MY QUESTION!!")

let wrongAnswer=true

while (wrongAnswer){
let chosenLeoBattleAnswers = readlineSync.keyInSelect(leoBattleAnswers, "WHAT IS NEVER A WRONG ANSWER!?!?!")
if (chosenLeoBattleAnswers == [0]){
    console.log("")
   console.log("     ***********************************")
    console.log("NO!! " + userName + " HE IS REGAINING STRENGTH HURRY!! PICK AGAIN!!")
       console.log("     ***********************************")


}else if (chosenLeoBattleAnswers == [1]) {
    console.log("")
   console.log("     ***********************************")
    console.log("o_O REALLY?!?! PICK AGAIN!")
   console.log("     ***********************************")


}else if ( chosenLeoBattleAnswers == [2]){
  console.log("")
     console.log("       ***********************************")
    console.log( userName + " YOU HAVE NOT SEEN THE LAST OF ME! *vanishes in a blur🏃*")
       console.log("     ***********************************")
       wrongAnswer=false
} else {console.log("")
     console.log("              ***********************************")
console.log("💀 💀 💀  You have failed your quest, Exit or choose again. 💀 💀 💀")
     console.log("              ***********************************")
}
}
console.log("***********************************")
console.log("***********************************")

console.log("I knew you could do it kid!!")
console.log("No time to celebrate! " +userName+ " LETS MOVE!!")
console.log("*You traverse the empty trails of the forrest of Pal Metto")
console.log("***********************************")
console.log("***********************************")
console.log("*YOU FEEL A PAINFUL HIT TO THE HEAD!*")
console.log("WHAT IN THE CSS WAS THAT!")
console.log("***********************************")
console.log("***********************************")
console.log("*A CAT COMES FLYING TOWARDS YOUR FACE AS YOU SEE A SHADOWY FIGURE LAUNCHING CATS AT YOU!*")
console.log("***********************************")
console.log("*MORE AND MORE CATS LAND ON YOU!*")
console.log("QUICK " + userName +" REACH IN YOUR BAG AND FIND THE RIGHT ITEM!")
console.log("***********************************")

let wrongErnieItem=true

while (wrongErnieItem){
let chosenBattleItems = readlineSync.keyInSelect(battleItems, "HURRY, "+ userName + "! PICK AN ITEM!")
if (chosenBattleItems == [0]){
    console.log("")
   console.log("     ***********************************")
    console.log(userName + "! THEY THINK ITS A TOY AND CLAW AT YOUR FACE! PICK AGAIN!")
       console.log("     ***********************************")

    

}else if (chosenBattleItems == [1]) {
    console.log("")
   console.log("     ***********************************")
    console.log(  userName + "!! THEY LOVE THE SMELL AND CLAW AT YOUR HANDS!!! PICK AGAIN!!!")
   console.log("     ***********************************")


}else if ( chosenBattleItems == [2]){
  console.log("")
     console.log("       ***********************************")
    console.log( "THE CATS GO FLYING IN DIFFERENT DIRECTIONS!!!")
       console.log("     ***********************************")
       wrongErnieItem=false
} else {console.log("")
     console.log("              ***********************************")
console.log("💀 💀 💀  You have failed your quest, Exit or choose again. 💀 💀 💀")
     console.log("              ***********************************")
}
}

console.log("")
console.log("***********************************")
console.log("SWEET BABY NODE WHAT WAS THAT ABOUT!?!?!")
console.log("* The shadowing figure grows closer while laughing maniacally*")
console.log("*Merlin Gasps* by the scripts of code ...its Ernie the Wise...")
console.log("Nice knowing ya "+ userName + "...")
console.log("")
console.log("")

scream = readlineSync.keyInYNStrict('"Conjur git push to gut punch Merlin?"');
if (scream === true){
  console.log("*THUD* *GASPING FOR AIR* ...kid...im...106...take it out on Ernie the Wise ")
  
}else console.log("")

console.log("***********************************")
console.log("*Ernie the Wise speaks* HAHA! NOT SO FAST")
console.log(userName + "! HAVENT YOU HEARD? THERES DIFFERENT")
console.log("WAYS TO SKIN A CAT!")
console.log("ANSWER MY QUESTION AND YOU MAY PASS!")
let wrongErnieAnswer=true

while (wrongErnieAnswer){
let chosenErnieBattleAnswers = readlineSync.keyInSelect(ErnieBattleAnswers, "which class ....WILL HOIST!?!?!")
if (chosenErnieBattleAnswers == [0]){
    console.log("")
   console.log("     ***********************************")
    console.log("NO!! " + userName + " THINK HARDER!! PICK AGAIN!!")
       console.log("     ***********************************")


}else if (chosenErnieBattleAnswers == [2]) {
    console.log("")
   console.log("     ***********************************")
    console.log("THE CATS ARE REGROUPING!! PICK AGAIN!!!")
   console.log("     ***********************************")


}else if ( chosenErnieBattleAnswers == [1]){
  console.log("")
     console.log("       ***********************************")
    console.log( userName + " I AM STILL NOT SATISFIED😈 !!!!")
       console.log("     ***********************************")
       wrongErnieAnswer=false
} else {console.log("")
     console.log("              ***********************************")
console.log("💀 💀 💀  You have failed your quest, Exit or choose again. 💀 💀 💀")
     console.log("              ***********************************")
}
}



let wrongErnieAnswer2=true

while (wrongErnieAnswer2){
let chosenErnieBattleAnswers2 = readlineSync.keyInSelect(ernieSecondBattle, "which class ....WILL HOIST!?!?!")
if (chosenErnieBattleAnswers2 == [0]){
    console.log("")
   console.log("     ***********************************")
    console.log( + userName + " ....thats pretty pathetic...pick again...baby")
       console.log("     ***********************************")


}else if (chosenErnieBattleAnswers2 == [2]) {
    console.log("")
   console.log("     ***********************************")
    console.log(userName+ "THE PEOPLE OF THE WYNFORTRESS ARE DEPENDING ON YOU! PICK AGAIN!")
   console.log("     ***********************************")


}else if ( chosenErnieBattleAnswers2 == [1]){
  console.log("")
     console.log("       ***********************************")
    console.log( "*Ernie the Wise speaks* ...I guess you can pass...*takes cookies* ")
       console.log("     ***********************************")
       wrongErnieAnswer2=false
} else {console.log("")
     console.log("              ***********************************")
console.log("💀 💀 💀  You have failed your quest, Exit or choose again. 💀 💀 💀")
     console.log("              ***********************************")
}
}
console.log("***********************************")
console.log("")
console.log("Were almost there kid!!! Lets keep moving post haste!!!")
console.log("")
console.log("***********************************")
console.log("THERE IT IS "+userName+"THE WYNFORTRESS I CAN SEE IT!!!")
console.log("***********************************")
console.log("")
console.log("*The sky turns black and thunder rumbles...lightning strikes the ground before you..*")
console.log("*The light blinds you and as you can see again...before you stands LORD RONA!")
console.log("***********************************")
console.log("***********************************")
console.log("")
console.log("*Lord Rona Speaks* You, HAHAHA! you are the so called "+userName+" ? HAHAH!")
console.log("YOU DARE CHALLENGE ME!!!! HAHAHAH!!!!")
console.log("***********************************")

console.log("Wow kid, I never thought I would say this....I think you got this "+userName+"...")
console.log("")
console.log("*Merlin disconnects from communication function*")
console.log("")

console.log("")
let ronaFight=true

while (ronaFight){
let chosenRonaFightItem = readlineSync.keyInSelect(ronaFightItem, "I mean you see it coming right?")
if (chosenRonaFightItem == [0]){
    console.log("")
   console.log("     ***********************************")
    console.log(  userName + " squirts "+ronaFight+ " in Lord Ronas eye...")
       console.log("     ***********************************")
       ronaFight=false

}
 else  {console.log("")
     console.log("              ***********************************")
console.log("💀 💀 💀  You have failed your quest, Exit or choose again. 💀 💀 💀")
     console.log("              ***********************************")}}


     console.log("")
     console.log("")
     console.log("***********************************")
     console.log("*Lord Rona begins to disintegrate, slowly bubbling into the ground* ")
     console.log("YOU HAVE NOT SEEN THE END OF ME !!! " + userName+"!!")
     console.log("***********************************")
     console.log('PSA, Keep your hands clean kids...best defense against "Lord Rona"')
     console.log("")
     console.log("***********************************")
     console.log("*you approach the deserted land of Wynwood and reach the steps of the Wynfortress*")
     console.log("*you open the door and walk in, some lingering welcoming faces greet you.*")
     console.log("***********************************")
     console.log("")
     console.log("")
     console.log("*Merlin comes from a back room carrying two dusted books*")
     console.log("I knew you had it in ya kid *chuckle* but before I just give you this " + userName)
     console.log("one more trial to make sure you are The Wyncoder...")
     console.log("***********************************")
     console.log("***********************************")
     let wrongErnieAnswer2=true

     while (finalMerlin){
     let chosenfinalMerlin = readlineSync.keyInSelect(merlinAnswer, "Which answer is correct "+userName+" ?")
     if (chosenfinalMerlin == [0]){
         console.log("")
        console.log("     ***********************************")
         console.log( + userName + " Yes, Go on")
            console.log("     ***********************************")
     
     
     }else if (chosenfinalMerlin == [1]) {
         console.log("")
        console.log("     ***********************************")
         console.log(userName+ "True, but not quite, Go on.")
        console.log("     ***********************************")
     
     
     }else if ( chosenfinalMerlin == [2]){
       console.log("")
          console.log("       ***********************************")
         console.log( "You got this " +userName+ " Go on")
            console.log("     ***********************************")
            wrongErnieAnswer2=false
     }
     else if ( chosenfinalMerlin == [3]){
        console.log("")
           console.log("       ***********************************")
          console.log( "Here you go " +userName+" ....")
             console.log("     ***********************************")
             wrongErnieAnswer2=false
      } else {console.log("")
          console.log("              ***********************************")
     console.log("💀 💀 💀  You are not the Wyncoder, Exit or choose again. 💀 💀 💀")
          console.log("              ***********************************")
     }
     }

     console.log("***********************************")

     console.log("You look at the dust covered books....")
     console.log("a Dictionary & a Thesaurus?....")
     console.log("DUDE!!! WHAT?!?!")
     console.log("***********************************")

     console.log("*Merlin chuckles softly* " +userName+ " There is no mythical book that will help you")
     console.log(" become the best practitioner of the code, Only the values which you just answered me ")
     console.log("")
     console.log("*You Scream* MERLIN THEN WHY MAKE ME FIGHT MY WAY HERE!")
     console.log("")
     console.log("*Merlin responds with a grin* " +userName+" because the desination is the journey!!")
     console.log(" * You stay at The Wynfortress practicing your code with the Wynfam in hopes of one")
     console.log("day being The Wyncoder....")
