//select all buttons.
const allButtons = document.querySelectorAll('.btn');
const submitBtn = document.querySelector('.submit');

//get rating container
const ratingContainer = document.querySelector('.container')

// selsect thank you card
const thanksContainer = document.querySelector('.thank-you');
const thankYouPara = document.querySelector('.thank-you-para1');

const ratingNum = document.getElementById('rating')

 submitBtn.addEventListener('click', function(){
   thanksContainer.classList.remove('hidden')
   ratingContainer.style.display = 'none' 
 })

allButtons.forEach((num) =>{
     num.addEventListener('click', function(){
       const buttonNum = num.innerText
       ratingNum.textContent = buttonNum
     })
})