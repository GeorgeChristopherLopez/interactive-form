let status = false;
let parent = document.createElement("div");
let submitBtn = document.querySelector('.submit');
let basicInfo = document.querySelector('.basic-info');
let email = document.querySelector('.email');
console.log(email);
let activities = document.querySelector('.activities');
let card = document.querySelector('.card-info');


// div element
let theKid = document.createElement("div");
theKid.innerHTML = 'Are we there yet?';
//

submitBtn.addEventListener('click', e => {
    if (!status) {

        basicInfo.innerHTML = `<p style="background: red; color: white; padding: 1rem; margin: 1rem;">BASIC ERROR</p>` + basicInfo.innerHTML;

      

        //test
        console.log(email);

        email.innerHTML=`<div><p style="background: red; color: white; padding: 1rem; margin: 1rem;">EMAIL ERROR</p></div>` + email.innerHTML;

        //test
        console.log(email);


        activities.innerHTML = `<p style="background: red; color: white; padding: 1rem; margin: 1rem;">ACTIVITES ERROR</p>` + activities.innerHTML;


        card.innerHTML = `<p style="background: red; color: white; padding: 1rem; margin: 1rem; display: grid; grid-template-columns: 1fr;">CREDIT CARD ERROR</p>` + card.innerHTML;

     
    }
    
});


const checkEmail = () => {
    console.log(email.innerHTML)
};


