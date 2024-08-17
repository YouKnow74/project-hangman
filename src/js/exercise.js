//setup global variables

//global array
let arrList = //[
//     "Apple", "Banana", "Orange", "Grape", "Strawberry", "Melon", "Kiwi", "Pineapple", "Blueberry", "Raspberry",
//     "Cat", "Dog", "Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Monkey", "Kangaroo", "Penguin",
//     "Computer", "Keyboard", "Mouse", "Monitor", "Laptop", "Tablet", "Smartphone", "Printer", "Router", "Server",
//     "Mountain", "Ocean", "River", "Forest", "Desert", "Canyon", "Valley", "Island", "Lake", "Waterfall",
//     "Sun", "Moon", "Star", "Planet", "Galaxy", "Universe", "Earth", "Mars", "Jupiter", "Saturn",
//     "Chair", "Table", "Sofa", "Bed", "Lamp", "Clock", "Book", "Pen", "Pencil", "Paper","School", "Teacher", "Student", "Classroom", "Learning", "Reading", "Writing", "Arithmetic", "Science", "History",
//     "Geography", "Art", "Music", "Dance", "Movie", "Theater", "Song", "Dance", "Painting", "Sculpture",
//     "Photograph", "Camera", "Travel", "Adventure", "Explore", "Map", "Compass", "Backpack", "Passport", "Vacation",
//     "Holiday", "Beach", "Forest", "Camping", "Hiking", "Cooking", "Recipe", "Restaurant", "Food", "Drink","guitar", "piano", "violin", "trumpet", "flute", "drum", "accordion", "cello", "harp", "saxophone",
//     "planet", "galaxy", "universe", "nebula", "asteroid", "comet", "satellite", "spaceship", "astronaut", "cosmos",
//     "garden", "flower", "tree", "butterfly", "dragonfly", "sunflower", "rose", "tulip", "daisy", "daffodil",
//     "library", "bookstore", "classroom", "university", "student", "teacher", "education", "knowledge", "learning", "wisdom",
//     "history", "geography", "science", "chemistry", "biology", "physics", "mathematics", "language", "literature", "philosophy",
//     "rainbow", "cloud", "rain", "thunder", "lightning", "storm", "snow", "ice", "wind", "weather",
//     "mountain", "valley", "canyon", "plateau", "peak", "ridge", "cliff", "cave", "volcano", "earthquake",
//     "medicine", "doctor", "hospital", "nurse", "patient", "pharmacy", "vaccine", "health", "wellness", "fitness",
//     "diamond", "emerald", "sapphire", "ruby", "amethyst", "topaz", "opal", "quartz", "jade", "pearl",
//     "dragon", "unicorn", "phoenix", "mermaid", "wizard", "witch", "wizardry", "magic", "enchant", "spell",
//     "carousel", "ferriswheel", "rollercoaster", "cottoncandy", "popcorn", "festival", "fireworks", "parade", "balloon", "masquerade",
//     "School", "Teacher", "Student", "Classroom", "Learning", "Reading", "Writing", "Arithmetic", "Science", "History",
//     "Geography", "Art", "Music", "Dance", "Movie", "Theater", "Song", "Dance", "Painting", "Sculpture",
//     "Photograph", "Camera", "Travel", "Adventure", "Explore", "Map", "Compass", "Backpack", "Passport", "Vacation",
//     "Holiday", "Beach", "Forest", "Camping", "Hiking", "Cooking", "Recipe", "Restaurant", "Food", "Drink"
//   ]; 
[
  "Satisfaction","Opportunity","Imagination","Celebration","Information","Determined","Curiosity","Remarkable","Experience","Necessity","Friendship","Capability",
"Resilience","Innovation","Adventure","Motivation","Generation","Creativity",
"Transformation",
"Consistent","Perspective","Happiness","Authenticity","Independence","Communication","Knowledgeable","Productive","Integrity","Comfortable","Spontaneous","Reflection","Consciousness","Opportunity","Encouragement","Exploration","Delicious","Satisfaction","Discipline","Inspiration","Motivation","Connection","Serendipity","Flexibility","Discipline","Perseverance","Stability","Confidence","Imagination","Friendship","Resilience","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement","Opportunity","Discipline","Satisfaction","Motivation","Inspiration","Exploration","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement","Opportunity","Discipline","Satisfaction","Motivation","Inspiration","Exploration","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement"
];

// Default score
let score=1;

//let arr=["one","two","three","four","helloworld"];
let arr = /*[
    "Apple", "Banana", "Orange", "Grape", "Strawberry", "Melon", "Kiwi", "Pineapple", "Blueberry", "Raspberry",
    "Cat", "Dog", "Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Monkey", "Kangaroo", "Penguin",
    "Computer", "Keyboard", "Mouse", "Monitor", "Laptop", "Tablet", "Smartphone", "Printer", "Router", "Server",
    "Mountain", "Ocean", "River", "Forest", "Desert", "Canyon", "Valley", "Island", "Lake", "Waterfall",
    "Sun", "Moon", "Star", "Planet", "Galaxy", "Universe", "Earth", "Mars", "Jupiter", "Saturn",
    "Chair", "Table", "Sofa", "Bed", "Lamp", "Clock", "Book", "Pen", "Pencil", "Paper","School", "Teacher", "Student", "Classroom", "Learning", "Reading", "Writing", "Arithmetic", "Science", "History",
    "Geography", "Art", "Music", "Dance", "Movie", "Theater", "Song", "Dance", "Painting", "Sculpture",
    "Photograph", "Camera", "Travel", "Adventure", "Explore", "Map", "Compass", "Backpack", "Passport", "Vacation",
    "Holiday", "Beach", "Forest", "Camping", "Hiking", "Cooking", "Recipe", "Restaurant", "Food", "Drink","guitar", "piano", "violin", "trumpet", "flute", "drum", "accordion", "cello", "harp", "saxophone",
    "planet", "galaxy", "universe", "nebula", "asteroid", "comet", "satellite", "spaceship", "astronaut", "cosmos",
    "garden", "flower", "tree", "butterfly", "dragonfly", "sunflower", "rose", "tulip", "daisy", "daffodil",
    "library", "bookstore", "classroom", "university", "student", "teacher", "education", "knowledge", "learning", "wisdom",
    "history", "geography", "science", "chemistry", "biology", "physics", "mathematics", "language", "literature", "philosophy",
    "rainbow", "cloud", "rain", "thunder", "lightning", "storm", "snow", "ice", "wind", "weather",
    "mountain", "valley", "canyon", "plateau", "peak", "ridge", "cliff", "cave", "volcano", "earthquake",
    "medicine", "doctor", "hospital", "nurse", "patient", "pharmacy", "vaccine", "health", "wellness", "fitness",
    "diamond", "emerald", "sapphire", "ruby", "amethyst", "topaz", "opal", "quartz", "jade", "pearl",
    "dragon", "unicorn", "phoenix", "mermaid", "wizard", "witch", "wizardry", "magic", "enchant", "spell",
    "carousel", "ferriswheel", "rollercoaster", "cottoncandy", "popcorn", "festival", "fireworks", "parade", "balloon", "masquerade",
    "School", "Teacher", "Student", "Classroom", "Learning", "Reading", "Writing", "Arithmetic", "Science", "History",
    "Geography", "Art", "Music", "Dance", "Movie", "Theater", "Song", "Dance", "Painting", "Sculpture",
    "Photograph", "Camera", "Travel", "Adventure", "Explore", "Map", "Compass", "Backpack", "Passport", "Vacation",
    "Holiday", "Beach", "Forest", "Camping", "Hiking", "Cooking", "Recipe", "Restaurant", "Food", "Drink"
  ];*/ [
  "Satisfaction","Opportunity","Imagination","Celebration","Information","Determined","Curiosity","Remarkable","Experience","Necessity","Friendship","Capability",
  "Resilience","Innovation","Adventure","Motivation","Generation","Creativity",
  "Transformation",
  "Consistent","Perspective","Happiness","Authenticity","Independence","Communication","Knowledgeable","Productive","Integrity","Comfortable","Spontaneous","Reflection","Consciousness","Opportunity","Encouragement","Exploration","Delicious","Satisfaction","Discipline","Inspiration","Motivation","Connection","Serendipity","Flexibility","Discipline","Perseverance","Stability","Confidence","Imagination","Friendship","Resilience","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement","Opportunity","Discipline","Satisfaction","Motivation","Inspiration","Exploration","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement","Opportunity","Discipline","Satisfaction","Motivation","Inspiration","Exploration","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement"
  ]
//let defArr=["one","two","three","four","helloworld"];

// random number to be taken from the array
let randInt;

// the word to be selected
let selector;
// an array for anchors
let code=[];
//image changer as images stages names are numbers
let imageCounter=0;
//default diffucility 
let diff ="easy";
//default player name
let playerName="Unknown";
// default player key for local storage
let playerno=localStorage.length;
//global variable to stop the timer
let timegoing;

// create a new game 
function newGame(){
   //console.log(localStorage.clear());
    //console.log(localStorage.getItem("test2"));

    //reset global variables
    //set a new timer for new game until the user starts to play
    seconds=240;  


            
    // remove the "name cannot be empty" if the user tried to start a game without entering his name
    document.querySelector(".par").style.display="none";
    //rebring the array
    arr=/*[
        "Apple", "Banana", "Orange", "Grape", "Strawberry", "Melon", "Kiwi", "Pineapple", "Blueberry", "Raspberry",
        "Cat", "Dog", "Elephant", "Lion", "Tiger", "Giraffe", "Zebra", "Monkey", "Kangaroo", "Penguin",
        "Computer", "Keyboard", "Mouse", "Monitor", "Laptop", "Tablet", "Smartphone", "Printer", "Router", "Server",
        "Mountain", "Ocean", "River", "Forest", "Desert", "Canyon", "Valley", "Island", "Lake", "Waterfall",
        "Sun", "Moon", "Star", "Planet", "Galaxy", "Universe", "Earth", "Mars", "Jupiter", "Saturn",
        "Chair", "Table", "Sofa", "Bed", "Lamp", "Clock", "Book", "Pen", "Pencil", "Paper","School", "Teacher", "Student", "Classroom", "Learning", "Reading", "Writing", "Arithmetic", "Science", "History",
        "Geography", "Art", "Music", "Dance", "Movie", "Theater", "Song", "Dance", "Painting", "Sculpture",
        "Photograph", "Camera", "Travel", "Adventure", "Explore", "Map", "Compass", "Backpack", "Passport", "Vacation",
        "Holiday", "Beach", "Forest", "Camping", "Hiking", "Cooking", "Recipe", "Restaurant", "Food", "Drink","guitar", "piano", "violin", "trumpet", "flute", "drum", "accordion", "cello", "harp", "saxophone",
        "planet", "galaxy", "universe", "nebula", "asteroid", "comet", "satellite", "spaceship", "astronaut", "cosmos",
        "garden", "flower", "tree", "butterfly", "dragonfly", "sunflower", "rose", "tulip", "daisy", "daffodil",
        "library", "bookstore", "classroom", "university", "student", "teacher", "education", "knowledge", "learning", "wisdom",
        "history", "geography", "science", "chemistry", "biology", "physics", "mathematics", "language", "literature", "philosophy",
        "rainbow", "cloud", "rain", "thunder", "lightning", "storm", "snow", "ice", "wind", "weather",
        "mountain", "valley", "canyon", "plateau", "peak", "ridge", "cliff", "cave", "volcano", "earthquake",
        "medicine", "doctor", "hospital", "nurse", "patient", "pharmacy", "vaccine", "health", "wellness", "fitness",
        "diamond", "emerald", "sapphire", "ruby", "amethyst", "topaz", "opal", "quartz", "jade", "pearl",
        "dragon", "unicorn", "phoenix", "mermaid", "wizard", "witch", "wizardry", "magic", "enchant", "spell",
        "carousel", "ferriswheel", "rollercoaster", "cottoncandy", "popcorn", "festival", "fireworks", "parade", "balloon", "masquerade",
        "School", "Teacher", "Student", "Classroom", "Learning", "Reading", "Writing", "Arithmetic", "Science", "History",
        "Geography", "Art", "Music", "Dance", "Movie", "Theater", "Song", "Dance", "Painting", "Sculpture",
        "Photograph", "Camera", "Travel", "Adventure", "Explore", "Map", "Compass", "Backpack", "Passport", "Vacation",
        "Holiday", "Beach", "Forest", "Camping", "Hiking", "Cooking", "Recipe", "Restaurant", "Food", "Drink"
      ];*/ [
  "Satisfaction","Opportunity","Imagination","Celebration","Information","Determined","Curiosity","Remarkable","Experience","Necessity","Friendship","Capability",
  "Resilience","Innovation","Adventure","Motivation","Generation","Creativity",
  "Transformation",
  "Consistent","Perspective","Happiness","Authenticity","Independence","Communication","Knowledgeable","Productive","Integrity","Comfortable","Spontaneous","Reflection","Consciousness","Opportunity","Encouragement","Exploration","Delicious","Satisfaction","Discipline","Inspiration","Motivation","Connection","Serendipity","Flexibility","Discipline","Perseverance","Stability","Confidence","Imagination","Friendship","Resilience","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement","Opportunity","Discipline","Satisfaction","Motivation","Inspiration","Exploration","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement","Opportunity","Discipline","Satisfaction","Motivation","Inspiration","Exploration","Authenticity","Capability","Transformation","Adventure","Happiness","Creativity","Innovation","Communication","Generation","Experience","Remarkable","Curiosity","Independence","Spontaneous","Productive","Knowledgeable","Consistent","Reflection","Comfortable","Integrity","Consciousness","Exploration","Delicious","Connection","Encouragement"
  ]
      //redfine variables
    randInt,selector;
    code=[];
    imageCounter=0;
    score=10;
    playerno=localStorage.length;

    //remove the image 
    
    document.querySelector(".image").innerHTML = "";
    //reset innerhtml
    document.querySelector(".lettersOfWord").innerHTML="";
    //select a word from array/dataset randomly
    randInt = Math.floor(Math.random()*arr.length);
    selector=arr[randInt].toLowerCase();
    
    // put the number of letter as an empty place
    for(let i=0;i<selector.length;i++){
        
        let ele = document.createElement('a');
        ele.classList.add("singleLetterPlace");
        code.push(ele);
        document.querySelector(".lettersOfWord").appendChild(ele);
    }
    
    //return all functionalities
    document.querySelector(".message").innerHTML= "";
    document.querySelector(".modal-header").classList.remove("modal-header-lost");

    //unselect each letter and put the click event again
    document.querySelectorAll('.all-letters a').forEach(function(square){
        square.classList.remove("incorrect");
        square.classList.remove("correct");
        square.classList.remove("nomoreClicks");
    });
    //pop up the start game modal
    document.querySelector(".modal1").style.display ="block";

    //closing the first modal after the user input name
    document.querySelector("#submit").addEventListener('click',function(){
        diff=document.querySelector("#difficulity").value;
        playerName = document.getElementById("playerName").value;

        
        //no empty string for name
        if(playerName==""){
        document.querySelector(".par").style.display="block";
        }
        else{
        console.log(playerName);
        document.querySelector(".modal1").style.display ="none";
        //clear the previous timer and adjust the timer based on diffiucility
        if(document.querySelector("#difficulity").value == "easy"){
            seconds= 240;
            clearInterval(timegoing);
        }
        else if(document.querySelector("#difficulity").value == "medium"){
            seconds = 45;
            clearInterval(timegoing);
        } 
        else{
            seconds=30;
            clearInterval(timegoing);
        }
        //start timer
        timegoing = setInterval(Timer,1000);
    }

        });
        
}
// handle selected letter
function selectLetter(e){
    //console.log(code);
    e.preventDefault();
    console.log(e);
    //get the data of letter clicked

    // let anchorId = this.id;
    // console.log(anchorId);
    
    //update the selected letter field and update hangman
    // if(selector.indexOf(anchorId)!=-1){
    //    document.querySelectorAll(".l_"+anchorId+"").innerText =anchorId;
   // let indexes=[];


   /*
    -change the image based on difficulity if the letter incorrect.
    -calculate score.
    -disable the selected letter.
   */ 

   if(selector.indexOf(this.id)==-1 && imageCounter < 12 && diff=="easy"){
    document.getElementById(this.id).classList.add("incorrect");
    imageCounter++;
    document.querySelector(".image").innerHTML = "<img src='img/"+imageCounter+".jpg' class='image-here'/>";
    score += 0.75*seconds;
    console.log(score);
   }
   if(selector.indexOf(this.id)==-1 && imageCounter < 12 && diff=="medium"){
    document.getElementById(this.id).classList.add("incorrect");
    imageCounter+=2;
    document.querySelector(".image").innerHTML = "<img src='img/"+imageCounter+".jpg' class='image-here'/>";
    score += 0.85*seconds;
    console.log(score);
   }
   if(selector.indexOf(this.id)==-1 && imageCounter < 12 && diff=="hard"){
    document.getElementById(this.id).classList.add("incorrect");
    imageCounter+=4;
    document.querySelector(".image").innerHTML = "<img src='img/"+imageCounter+".jpg' class='image-here'/>";
    score += 0.95*seconds;
    console.log(score);
   }




    // }
    /*
    -put the letter/letters in correct position.
    -calculate score.
    -disable the selected letter
    */

    if(selector.indexOf(this.id)!=-1){
        document.getElementById(this.id).classList.add("correct");
        console.log(this.id);
        
      for(let i=0;i<selector.length;i++){
      if(selector.charAt(i)==this.id){
      code[i].innerText=this.id;
      score += 1.5*seconds;
      console.log(score);
      }
    }}

    //check if the user won or lost after each letter selected
    const result =checkWinOrLose();

    //win case
    if(result=="won"){
        // document.querySelector(".message").innerHTML= "<h1 class='won'>You Won The Game!</h1>";

        // remove all clicks from all anchors
        document.querySelectorAll(".all-letters a").forEach(function(e){
            e.classList.add("nomoreClicks")
            });
         score *=2;
        //adjust and display modal of winner
        document.querySelector(".modal-header").innerHTML ="<span class='close'>&times;</span> <h2>Congratulations!</h2>";
        document.querySelector(".modal-body").innerHTML = "<h1 class='won'>You Won The Game!</h1>";
        document.querySelector("#myModal").style.display="block";
        document.querySelector(".close").addEventListener('click',function(){
            document.querySelector("#myModal").style.display="none";
        });
        //save player into leaderboard
        savePlayer(JSON.stringify(playerno),playerName,parseInt(score));
        // stop the timer if won
        seconds=-1;
        //clearInterval(timegoing);

        //leader();
    }

    //lose case
    else if(result=="lost"){

        
        // document.querySelector(".message").innerHTML= "<h1 class='lost'>You Lost The Game!</h1> <br /> <h2 class='textLost'>The correct word was "+selector+"</h2>"

        // remove all clicks from all anchors
        document.querySelectorAll(".all-letters a").forEach(function(e){
            e.classList.add("nomoreClicks")
            });
        // modal present for lost and display the correct answer
         document.querySelector(".modal-header").innerHTML ="<span class='close'>&times;</span> <h2>Oops! You did not get the word</h2>";
         document.querySelector(".modal-body").innerHTML = "<h1 class='lost'>You Lost</h1><br /> <h2 class='textLost'>The correct word was ("+selector+")</h2>";
         document.querySelector(".modal-header").classList.add("modal-header-lost");
         
         document.querySelector("#myModal").style.display="block";
         document.querySelector(".close").addEventListener('click',function(){
            document.querySelector("#myModal").style.display="none";
        });
        //save player into leaderboard
        savePlayer(JSON.stringify(playerno),playerName,parseInt(score));
        // stop the timer if lost
        seconds=-1;
        //clearInterval(timegoing);
        //leader();
    }
    //display diffrent messages based on lost by streak or time 
    // else if (result=="time finished"){
       
    // }

    //still playing case
}
//check win or lose or timer finished 
function checkWinOrLose(){
    console.log(code);
    //timer finished
    if(seconds<=0){
        // remove all clicks from all anchors
        document.querySelectorAll(".all-letters a").forEach(function(e){
            e.classList.add("nomoreClicks")
            });
        // modal present
         document.querySelector(".modal-header").innerHTML ="<span class='close'>&times;</span> <h2>Oops! Timer Ran Out</h2>";
         document.querySelector(".modal-body").innerHTML = "<h1 class='lost'>You Lost</h1><br /> <h2 class='textLost'>The correct word was ("+selector+")</h2>";
         document.querySelector(".modal-header").classList.add("modal-header-lost");
         
         document.querySelector("#myModal").style.display="block";
         document.querySelector(".close").addEventListener('click',function(){
            document.querySelector("#myModal").style.display="none";
        });
        //save player into leaderboard
        savePlayer(JSON.stringify(playerno),playerName,parseInt(score));
        //clearInterval(timegoing);
        //leader();
        return "time finished";
        }
        else{
        for(let i=0;i<code.length;i++){
        //check for hangman status
        if(imageCounter == 12){
            return "lost";
        }
        else if(code[i].innerHTML=="" && imageCounter < 12){
            return "still";
        }
        else{
            continue;
        }
    }
    return "won";
}
    //check for all letters are set

   
}

// function modalctrl(){

// }

// function to save player name and score into local storage 

function savePlayer(playersno,name,playerscore){
console.log(localStorage);
//get player info
let allPlayers = JSON.parse(localStorage.getItem(playersno))||[];
//increase the player counter and stringify
playersno = parseInt(playersno)+1;
playersno =JSON.stringify(playersno);
//new player assigning
let singlePlayer ={
    player:name,
    score:playerscore
};

allPlayers.push(singlePlayer);

localStorage.setItem(playersno,JSON.stringify(allPlayers));
console.log(singlePlayer);
}

//attach click events to each letter

document.querySelectorAll(".all-letters a").forEach(function(e){
e.addEventListener('click', selectLetter)
});

// attach click event for leaderboard ancor to show all players and scores
playersList="";
function leader(){
    console.log(localStorage);
    let newPar="";
// for(let p=0;p<localStorage.length;p++){
//     console.log(localStorage.key[JSON.stringify(p)]); 
//     let dataEntries = localStorage.getItem(""+p+"");
//     console.log(dataEntries);
//     let singleData = JSON.parse(dataEntries);
//     console.log(singleData);
//     let obj = singleData[p];
//     console.log(obj);
//     console.log(obj.player);
//     console.log(obj.score);
    // let num = JSON.stringify(p);
    // let fulldata = localStorage.getItem(num);
    // console.log(fulldata);
    // let data = JSON.parse(fulldata);
    // console.log(data);
    // let tempP = data.player;
    // let tempC = data.score;
//}

//show the leaderboard
for(let i=localStorage.length;i>0;i--){
    // get the data from last player to first
    console.log(localStorage.key[JSON.stringify(i)]); 
    let dataEntries = localStorage.getItem(""+i+"");
    console.log(dataEntries);
    // parse the data
    let singleData = JSON.parse(dataEntries);
    let j = i-1;
    console.log(singleData);
    //checking data
    let obj = singleData[j];
    console.log(obj);
    console.log(obj.player);
    console.log(obj.score);
    // combine all to add in html
    newPar +="<p class='playerList'>Player:"+obj.player+" Score:"+obj.score+"</p>";
    document.querySelector(".playersAndScore").innerHTML = newPar;
}
}

 // function to count and display timer
function Timer(){
    console.log(seconds);
    //display time
    document.querySelector("#timer").innerHTML = seconds;
    //check the timer if finished
    if(seconds ==0){
        clearInterval(timegoing);
        document.querySelector("#timer").textContent = 0;
        return checkWinOrLose();
    }
    else if(seconds==-1){
        clearInterval(timegoing);
    document.querySelector("#timer").textContent = 0;
    }
    else{
    seconds--;
    }
}



//add new game action

document.getElementById("NewGame").addEventListener('click',newGame);

// leaderboard click event
document.querySelector(".leaderboard").addEventListener('click',leader);

//start the new game 
newGame();


