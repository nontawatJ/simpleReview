//get all elements and put them in array
const IDName = ["starOne","starTwo","starThree","starFour","starFive"];
var submitReview = false;

var elements = IDName.map(getElemByID);
function getElemByID(element){
    return document.getElementById(element);
}

//handle hover in effect
elements.forEach(hoverOver);
function hoverOver(element){
    element.addEventListener('mouseenter',function(){changeStarGold(element.value)});
}
function changeStarGold(numStar) {
    elements.forEach((element)=>{
        if (!submitReview){
            if (element.value <= numStar){
                element.style.color = "#E8AD22";
            }
        }
    })
}

//handle hover out effect
elements.forEach(hoverOut);
function hoverOut(element){
    element.addEventListener('mouseleave',function(){changeStarBlack(element.value)});
}
function changeStarBlack(numStar) {
    elements.forEach((element)=>{
        if (!submitReview){
            if (element.value <= numStar){
                element.style.color = "black"
            }
        }
    })
}

//handle submit review 
elements.forEach(starClick);
function starClick(element){
    element.addEventListener('click', function(){disableHoverEffect(element.value)});
}
function disableHoverEffect(numStar){
    changeStarGold(numStar);
    submitReview = true;
    document.getElementById("undo").style.display = "flex";
}

//reset the page
function reRating(){
    submitReview = false;
    changeStarBlack(5);
    document.getElementById("undo").style.display = "none";
}






// const oneStar = document.getElementById("starOne");
// const twoStar = document.getElementById("starTwo");
// const threeStar = document.getElementById("starThree");
// const fourStar = document.getElementById("starFour");
// const fiveStar = document.getElementById("starFive");

// var eventStop = false;
// var starRated = 0;


// //change star to gold when hover
// oneStar.addEventListener('mouseenter', function(){changeStarGold(oneStar.value)});
// twoStar.addEventListener('mouseenter', function(){changeStarGold(twoStar.value)});
// threeStar.addEventListener('mouseenter', function(){changeStarGold(threeStar.value)});
// fourStar.addEventListener('mouseenter', function(){changeStarGold(fourStar.value)});
// fiveStar.addEventListener('mouseenter', function(){changeStarGold(fiveStar.value)});

// //change star to original color when stop hover
// oneStar.addEventListener("mouseleave", function(){changeStarBlack(oneStar.value)});
// twoStar.addEventListener("mouseleave", function(){changeStarBlack(twoStar.value)});
// threeStar.addEventListener("mouseleave", function(){changeStarBlack(threeStar.value)});
// fourStar.addEventListener("mouseleave", function(){changeStarBlack(fourStar.value)});
// fiveStar.addEventListener("mouseleave", function(){changeStarBlack(fiveStar.value)});


// //stop star to change color after submit review
// function disableEvent (){
//     eventStop = true; 
//     document.getElementById("starGot").innerHTML = "you have rated this product with " + starRated + " star(s)";
//     document.getElementById("undo").style.display = "flex";
// }

// //reset the setting
// function reRating (){
//     eventStop = false;
//     changeStarBlack(5);
//     document.getElementById("starGot").innerHTML = "";
//     document.getElementById("undo").style.display = "none";
// }

// //decide how many star color to change to gold
// function changeStarGold(numStar) {
//     if (!eventStop){
//         var check = parseInt(numStar);
//         starRated = numStar
//         while (check !== 0){
//             if (check === 5){
//                 fiveStar.style.color = "#E8AD22";
//             }
//             else if (check === 4){
//                 fourStar.style.color = "#E8AD22";
//             }
//             else if (check === 3){
//                 threeStar.style.color = "#E8AD22";
//             }
//             else if (check === 2){
//                 twoStar.style.color = "#E8AD22";
//             }
//             else{
//                 oneStar.style.color = "#E8AD22";
//             }
//             check--;
//         }
//     }
// }
// //decide how many star color to change to black
// function changeStarBlack(numStar) {
//     if (!eventStop){
//         var check = parseInt(numStar);
//         while (check !== 0){
//             if (check === 5){
//                 fiveStar.style.color = "black";
//             }
//             else if (check === 4){
//                 fourStar.style.color = "black";
//             }
//             else if (check === 3){
//                 threeStar.style.color = "black";
//             }
//             else if (check === 2){
//                 twoStar.style.color = "black";
//             }
//             else{
//                 oneStar.style.color = "black";
//             }
//             check--;
//         }
//     } 
// }


