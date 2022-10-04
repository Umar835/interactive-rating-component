//select all buttons.
const allButtons = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');

//get rating container
const ratingContainer = document.querySelector('.container')

// select thank you card
const thanksContainer = document.querySelector('.thank-you');
const thankYouPara = document.querySelector('.thank-you-para1');

//toggles thank you component.
const ratingNum = document.getElementById('rating')

 submitBtn.addEventListener('click', function(){
   thanksContainer.classList.remove('hidden')
   ratingContainer.style.display = 'none' 
 })
//adds rating to paragraph in thank you component
allButtons.forEach((num) =>{
     num.addEventListener('click', function(){
       const buttonNum = num.innerText
       ratingNum.textContent = buttonNum
     })
})