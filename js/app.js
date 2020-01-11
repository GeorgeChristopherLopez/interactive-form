let submitted = false;

let submitBtn = document.querySelector('.submit');
let email = document.querySelector('.email');
console.log(email);

let cardNum = document.querySelector('.cardNum');
let zipCode = document.querySelector('.zipCode');
let cvv = document.querySelector('.cvv');

// error messages
let basicError = document.querySelector('#basic-error');
let emailError = document.querySelector('#email-error');
let activitiesError = document.querySelector('#activities-error');

let total = document.querySelector('.total');
let cardError = document.querySelector('#card-error');
let zipCodeError = document.querySelector('#zip-code-error');
let cvvError = document.querySelector('#cvv-error');

//
email.addEventListener('keyup', e => {
    // check if email.value contains
    // @xyz.com 
    console.log('typing email');

});


cardNum.addEventListener('keyup', e => {
   

});

zipCode.addEventListener('keyup', e => {
    
  

});


cvv.addEventListener('keyup', e => {
   
    
});


submitBtn.addEventListener('click', e => {
    checkCreditCard(cardNum, zipCode, cvv);
   /* if (!submitted) {

        basicError.style.display = "block";

        emailError.style.display = "block";

        cardError.style.display = "block";

        zipCodeError.style.display = "block";

        cvvError.style.display = "block";

        activitiesError.style.display = "block";
    }
    */
});


const checkCreditCard = (cardNum, zipCode, cvv) => {
    // check if cardNum.value between 13 and 16 or empty
    console.log(!isNaN(cardNum.value));
    if (!isNaN(cardNum.value) && (cardNum.value.length >= 13 && cardNum.value.length <= 16)) {
        cardError.style.display = "none";
        cardNum.style.outline = "1px solid green";

    } else {
        cardError.style.display = "block";
        cardNum.style.outline = "1px solid red";
    }

    if (!isNaN(zipCode.value) && zipCode.value.length == 5) {
        zipCodeError.style.display = "none";
        zipCode.style.border = "1px solid green";

    } else {
        zipCodeError.style.display = "block";
        zipCode.style.border = "1px solid red";
    }

    if (!isNaN(cvv.value) && cvv.value.length == 3) {
        cvvError.style.display = "none";
        cvv.style.border = "1px solid green";

    } else {
        cvvError.style.display = "block";
        cvv.style.border = "1px solid red";
    }
    };