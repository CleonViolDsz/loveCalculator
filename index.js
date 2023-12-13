let count;
let userInput = document.querySelectorAll('.js-user-input');


document.querySelector('.js-enter-button').addEventListener('click',()=> {
  count = '';
  userInput.forEach((value)=> {
    if(value.value !== '')
    count++;
    // console.log(value.value);
    // console.log(count);
  })
  loveCalculator();
})

document.body.addEventListener('keydown',(event)=> {
  if(event.key === 'Enter'){
  count = '';
  userInput.forEach((value)=> {
    if(value.value !== '')
    count++;
    // console.log(value.value);
    // console.log(count);
  })
  loveCalculator();
}
});

let resultMessage = document.querySelector('.js-result-message');
let errorMessage = document.querySelector('.js-result-message');

function loveCalculator() {
  let loveScore = Math.random();
  loveScore = loveScore*100;
  loveScore = Math.floor(loveScore) + 1;
  
  if(count === 2) {
    errorMessage.classList.remove('error-message');
    if (loveScore > 70) {
        document.querySelector('.js-result-message').innerHTML= "Your Love percentage is " + loveScore + "%." + " You love each other like Kanye loves Kanye";
    }
        if (loveScore > 30 && loveScore <=70){
          document.querySelector('.js-result-message').innerHTML="Your Love percentage is " + loveScore + "%.";
        }
        if(loveScore<=30) {
          document.querySelector('.js-result-message').innerHTML="Your Love percentage is " + loveScore + "%." + "You go together like oil and water";
    }
    count = '';
}
else if(count === 1) {
  let errorMessage = document.querySelector('.js-result-message');
  errorMessage.innerHTML = "You have entered only one name!! Please enter the other name";
  errorMessage.classList.add('error-message');
}

else if(count === ''){
  
  errorMessage.innerHTML = "You have not enterd both the names!! Please Enter the names";
  errorMessage.classList.add('error-message');
}
}

document.querySelector('.js-clear-button').addEventListener('click',()=> {
  userInput.forEach((input)=>{
    input.value = '';
  })
  resultMessage.innerHTML = '';
})