//numberCounter

let numberCountDisplay = document.getElementById('number-counter-display');
let numberCountDec = document.getElementById('number-count-dec');
let numberCountInc = document.getElementById('number-count-inc');
let index = 0;
numberCountDisplay.value = index;

numberCountDec.addEventListener('click' , ()=>{
  index--;
  numberDiscl(.9);
  numberCountDisplay.value = index;
});

numberCountInc.addEventListener('click' , ()=>{
  index++;
  numberDiscl(1.1);
  numberCountDisplay.value = index;
});

function numberDiscl(x)
{
  numberCountDisplay.style.transform = `scale(${x})`;
  setTimeout(()=>{
    numberCountDisplay.style.transform = 'scale(1)';
  } , 200);
}