let display = document.getElementById('display');

let genarate = document.getElementById('gen');

let reGen = document.getElementById('reGen');

const password =[
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
  "!", "#", "$", "%", "&", "(", ")", "*", "+", ",", ".", ";", "<", "=", ">", "?", "@","{", "}"
];

function genPassword ()
{
  let newPass = "";
  for(let i = 0 ; i<8 ; i++)
  {
    let times = Math.floor(Math.random()*password.length);
    newPass += password[times];
  }
  return newPass;
}

genarate.addEventListener('click' , ()=>{
  display.value = '';
  let gnarate = genPassword();
  display.value = gnarate;
  genarate.disabled = true;
});

reGen.addEventListener('click' , ()=>{
  display.value = '';
  let gnarate = genPassword();
  display.value = gnarate;
  genarate.disabled = false;
})