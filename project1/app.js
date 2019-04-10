var box1 = document.querySelector('.box-1');
var box2 = document.querySelector('.box-2');
var box3 = document.querySelector('.box-3');
var box4 = document.querySelector('.box-4');
var box5 = document.querySelector('.box-5');
var box6 = document.querySelector('.box-6');
var box7 = document.querySelector('.box-7');
var box8 = document.querySelector('.box-8');
var box9 = document.querySelector('.box-9');

var setGameMessage = document.querySelector('p');
//var startGameBtn = document.querySelector('.start-game-btn');

var boxItems = document.querySelectorAll('.box');

var currentMark = 'X';
var nextMark = 'O';

var isWin = false;
var clickCounter = 0;


var judgeWin = function() {
    //win in first column   
    if((box1.value == box2.value) && (box2.value == box3.value) && (box1.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
    }
    //win in second column
    if((box4.value == box5.value) && (box5.value == box6.value) && (box4.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
    }
    //win in third column
    if((box7.value == box8.value) && (box8.value == box9.value) && (box7.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
    }
    //win in first row
    if((box1.value == box4.value) && (box4.value == box7.value) && (box1.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
    }
    //win in second row
    if((box2.value == box5.value) && (box5.value == box8.value) && (box2.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
    }
    //win in third row
    if((box3.value == box6.value) && (box6.value == box9.value) && (box3.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
    }
    //win in box 1, 5, 9
    if((box1.value == box5.value) && (box5.value == box9.value) && (box1.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
    }
    //win in box 3, 5, 7
    if((box3.value == box5.value) && (box5.value == box7.value) && (box3.value != null)) {
        console.log(`${currentMark} win`);
        isWin = true;
    }
    
}

var handleClickBox = function(event) {
    if(nextMark == 'O') {
        if(!(event.target.classList.contains('clicked'))) {
            event.target.classList.add('clicked');
            if(!(event.target.classList.contains('x-clicked'))) { //prevent clicking an already clicked button
                event.target.classList.add('x-clicked');   //handle current mark
                event.target.value = 'X';
                currentMark = 'X';
                nextMark = 'X';
            }
        }
    } else {
        if(!(event.target.classList.contains('clicked'))) {
            event.target.classList.add('clicked');
            if((!event.target.classList.contains('o-clicked'))) {
                event.target.classList.add('o-clicked');
                event.target.value = 'O';
                currentMark = 'O';
                nextMark = 'O';
            }
        }
    }

    //clickCounter = clickCounter + 1;
    //console.log(clickCounter);

    if(isWin == false) {
        judgeWin();
    } 
    if(isWin == false && document.querySelectorAll('.clicked').length == boxItems.length) {
    //if(isWin == false && clickCounter == boxItems.length) {
        setGameMessage.textContent = `tie game`;
        for(var i = 0; i < boxItems.length; i++) { // disable all boxes, make them not clickable
            boxItems[i].classList.add('clicked');
        }
    }
    if(isWin == true) {
        setGameMessage.textContent = `${currentMark} is winner`; 
        //win animation effect(css) goes here


        for(var i = 0; i < boxItems.length; i++) { // disable all boxes, make them not clickable
           boxItems[i].classList.add('clicked');
        }
    }
}

/*
//only enables box 1-9 clickable after clicking "Start"
var handleStartGame = function() {
    var boxItems = document.querySelectorAll('.box');
    boxItems.forEach(function(item) {
        item.addEventListener('click', handleClickBox);
    });  
}
*/

//startGameBtn.addEventListener('click', handleStartGame);

boxItems.forEach(function(item) {
    item.addEventListener('click', handleClickBox);
});


console.log('x is first to move');








