//numberCounter

let numberCountDisplay = document.getElementById('number-counter-display');
let numberCountDec = document.getElementById('number-count-dec');
let numberCountInc = document.getElementById('number-count-inc');
let index = 0;
numberCountDisplay.value = index;

numberCountDec.addEventListener('click' , ()=>{
  index--;
  numberCountDisplay.value = index;
});

numberCountInc.addEventListener('click' , ()=>{
  index++;
  numberCountDisplay.value = index;
})