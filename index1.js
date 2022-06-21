btnArr = new Array();
// For the audio clip 1
function soundclick(){
    var audio = new Audio();
    audio.src = "8d82b5_SMW_Dragon_Coin_Sound_Effect.mp3";
    audio.play();
 }
//  for the audio clip 2
 function soundAlert(){
    var audio = new Audio();
    audio.src = "single_beeping_sharp_huz.mp3";
    audio.play();
 }
//  When clicked, this is used to get the info about the id in which it is clicked
// (Button used instead of div because, when clicked, name of the parent div will also be included in the array)
function clicked(event){
    soundclick();
    let tile = event.target.getAttribute("id");
    btnArr.push(tile);
     ScoreAlert();
}
// Creating an array theButton which is used to listen to a click listener
for (let i = 0; i < 36; i++) {
    let theButton = document.querySelectorAll(".gitem")[i];
    theButton.addEventListener('click', clicked);
}
// Used to light up the cells
function Main(MainArray,i){
    setTimeout(() => {
         let ids = document.getElementById(MainArray[i]).classList.remove('animeg');
        let Newids =document.getElementById(MainArray[i]) ;
        setTimeout(() => {
            Newids.classList.add('animeg');
        }, 300);
        i++;
        if(MainArray.length>i){
            Main(MainArray,i)
        }

    }, 800);
}

// function Equal(a, b) {
//     if (a === b) return true;
//     if (a == null || b == null) return false;
//     if (a.length !== b.length) return false;
//     for (var i = 0; i < a.length; ++i) {
//       if (a[i] !== b[i]) return false;
//     }
//     return true;
//   }

let Points = 0;
function ScoreAlert(){
     const ans = btnArr.every(i =>{
        return MainArray.includes(parseInt(i))
    })
    
    if(!ans){
        soundAlert();
        setTimeout(() => {
            alert("Correct Tile missed, "+ Points + " point(s)");
        }, 600);
        
        }
    else{
      
      if(MainArray.length===btnArr.length){
          Points++;
         while(btnArr.length){
             btnArr.pop();
         }
         MainArrayChange();
      }
    }
      }
let MainArray =[];
function MainArrayChange(){
    
    let RandomNumber = Math.floor(Math.random()*36);
    let i=0;
    if (MainArray.includes(RandomNumber)) {
        MainArrayChange();
    }
    else{
        MainArray.push(RandomNumber);
        Main(MainArray,i);
    }
}

MainArrayChange();








