const oneStar = document.getElementById("starOne");
const twoStar = document.getElementById("starTwo");
const threeStar = document.getElementById("starThree");
const fourStar = document.getElementById("starFour");
const fiveStar = document.getElementById("starFive");

var eventStop = false;
var starRated = 0;


//change star to gold when hover
oneStar.addEventListener('mouseenter', function(){changeStarGold(oneStar.value)});
twoStar.addEventListener('mouseenter', function(){changeStarGold(twoStar.value)});
threeStar.addEventListener('mouseenter', function(){changeStarGold(threeStar.value)});
fourStar.addEventListener('mouseenter', function(){changeStarGold(fourStar.value)});
fiveStar.addEventListener('mouseenter', function(){changeStarGold(fiveStar.value)});

//change star to original color when stop hover
oneStar.addEventListener("mouseleave", function(){changeStarBlack(oneStar.value)});
twoStar.addEventListener("mouseleave", function(){changeStarBlack(twoStar.value)});
threeStar.addEventListener("mouseleave", function(){changeStarBlack(threeStar.value)});
fourStar.addEventListener("mouseleave", function(){changeStarBlack(fourStar.value)});
fiveStar.addEventListener("mouseleave", function(){changeStarBlack(fiveStar.value)});


//stop star to change color after submit review
function disableEvent (){
    eventStop = true; 
    document.getElementById("starGot").innerHTML = "you have rated this product with " + starRated + " star(s)";
    document.getElementById("undo").style.display = "flex";
}

//reset the setting
function reRating (){
    eventStop = false;
    changeStarBlack(5);
    document.getElementById("starGot").innerHTML = "";
    document.getElementById("undo").style.display = "none";
}

//decide how many star color to change to gold
function changeStarGold(numStar) {
    if (!eventStop){
        var check = parseInt(numStar);
        starRated = numStar
        while (check !== 0){
            if (check === 5){
                fiveStar.style.color = "#E8AD22";
            }
            else if (check === 4){
                fourStar.style.color = "#E8AD22";
            }
            else if (check === 3){
                threeStar.style.color = "#E8AD22";
            }
            else if (check === 2){
                twoStar.style.color = "#E8AD22";
            }
            else{
                oneStar.style.color = "#E8AD22";
            }
            check--;
        }
    }
}
//decide how many star color to change to black
function changeStarBlack(numStar) {
    if (!eventStop){
        var check = parseInt(numStar);
        while (check !== 0){
            if (check === 5){
                fiveStar.style.color = "black";
            }
            else if (check === 4){
                fourStar.style.color = "black";
            }
            else if (check === 3){
                threeStar.style.color = "black";
            }
            else if (check === 2){
                twoStar.style.color = "black";
            }
            else{
                oneStar.style.color = "black";
            }
            check--;
        }
    } 
}


