let counterElement = document.querySelector('#counter');//first block
let counter = 0;//counter variable
let timerID//variable using setInterval
//////////////////////////////////////////////////////////////////////////////////////////////////
const btnStart = document.querySelector('#start')//start button
btnStart.onclick = function () {
    timerID = setInterval(function(){
        counter ++;
        counterElement.innerText = counter;//variable into block
    }, 1000);
};
const btnStop = document.querySelector('#pause');//pause button
btnStop.onclick = function () {
    clearInterval(timerID);
};
const btnReset = document.querySelector('#reset');//reset button
btnReset.onclick = function () {
    counter = 0;
    counterElement.innerText = counter;
    clearInterval(timerID);//dlya ostanovki timera
}