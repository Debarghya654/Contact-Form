const form = document.getElementById("contactForm");

const name = document.getElementById("name");

const email = document.getElementById("email");

const subject = document.getElementById("subject");

const message = document.getElementById("message");

const submitBtn = document.getElementById("submitBtn");

const spinner = document.getElementById("spinner");

const btnText = document.getElementById("btnText");

const successMsg = document.getElementById("successMsg");

const charCount = document.getElementById("charCount");



// Character Counter

message.addEventListener("input", () => {

charCount.innerText = message.value.length;

});



// Email validation regex

function isValidEmail(emailValue){

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

return regex.test(emailValue);

}



// Form Submit

form.addEventListener("submit", function(e){

e.preventDefault();


let valid = true;


// Clear errors

document.getElementById("nameError").innerText="";

document.getElementById("emailError").innerText="";

document.getElementById("messageError").innerText="";

successMsg.innerText="";



// Name validation

if(name.value.trim()===""){

document.getElementById("nameError").innerText="Name is required";

valid=false;

}



// Email validation

if(email.value.trim()===""){

document.getElementById("emailError").innerText="Email is required";

valid=false;

}

else if(!isValidEmail(email.value)){

document.getElementById("emailError").innerText="Invalid Email";

valid=false;

}



// Message validation

if(message.value.trim()===""){

document.getElementById("messageError").innerText="Message is required";

valid=false;

}



// If valid

if(valid){

submitBtn.disabled=true;

spinner.style.display="block";

btnText.innerText="Sending...";



// Fake submit delay

setTimeout(()=>{

spinner.style.display="none";

btnText.innerText="Send Message";

submitBtn.disabled=false;


successMsg.innerText="Message sent successfully!";


form.reset();

charCount.innerText="0";


},2000);

}


});