

export function displayContact(){
    $('section').fadeOut(1000)
    $('.contact').fadeIn(1000);
    $('.contact').removeClass('d-none');
   
}

//variable for sign up page
let signName = document.getElementById('name');
let signPhone = document.getElementById('phone');
let signPassword = document.getElementById('pass');
let signEmail = document.getElementById('email');
let signAge = document.getElementById('age');
let signrepass = document.getElementById('repass');
let msgName = document.getElementById('msgName');
let msgpass = document.getElementById('msgpass');
let msgphone = document.getElementById('msgPhone');
let msgEmail = document.getElementById('msgEmail');
let msgAge = document.getElementById('msgAge');
let msgPass2 = document.getElementById('msgrepass');
let myBtn = document.getElementById('submitBtn');

let userRegex;
let emailRegex;
let passwordRegex;
let phoneRegex;
let ageRegex;


signName.addEventListener('keyup',checkUserRegex)
signEmail.addEventListener('keyup',checkEmailRegex)
signPassword.addEventListener('keyup',checkPassRegex)
signPhone.addEventListener('keyup',checkPHoneRegex)
signAge.addEventListener('keyup',checkAgeRegex)
signrepass.addEventListener('keyup',checkRePass)
// name validation
function checkUserRegex(){
    userRegex = /(^[a-zA-Z\s]{0,20}[a-zA-Z]$)/;
    if(userRegex.test(signName.value)) {
        signName.classList.add('is-valid');
        signName.classList.remove('is-invalid');
        msgName.classList.add('d-none');
        myBtn.removeAttribute("disabled");
       
    }
    else {
        signName.classList.add('is-invalid');
        signName.classList.remove('is-valid');
        msgName.classList.remove('d-none');
        myBtn.disabled = "true";
        
    }
  }

  // email validation
function checkEmailRegex() {
    emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailRegex.test(signEmail.value)) {
        signEmail.classList.add('is-valid') 
        signEmail.classList.remove('is-invalid');
        msgEmail.classList.add('d-none');
        myBtn.removeAttribute("disabled");
      
    }
    else {
        signEmail.classList.add('is-invalid');
        signEmail.classList.remove('is-valid');
        msgEmail.classList.remove('d-none');
        myBtn.disabled = "true";
        
    }
  }


  //password validation
function checkPassRegex() {
    passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;  
    if( passwordRegex.test(signPassword.value)) {
        signPassword.classList.add('is-valid') 
        signPassword.classList.remove('is-invalid');
        msgpass.classList.add('d-none');
        myBtn.removeAttribute("disabled");
       
    }
    else {
        signPassword.classList.add('is-invalid');
        signPassword.classList.remove('is-valid');
        msgpass.classList.remove('d-none');
        myBtn.disabled = "true";
    
    }
    }

  //phone validation
  function checkPHoneRegex() {
    phoneRegex = /^01[0-2]\d{1,8}$/;  
    if( phoneRegex.test(signPhone.value)) {
        signPhone.classList.add('is-valid') 
        signPhone.classList.remove('is-invalid');
        msgphone.classList.add('d-none');
        myBtn.removeAttribute("disabled");
     
    }
    else {
        signPhone.classList.add('is-invalid');
        signPhone.classList.remove('is-valid');
        msgphone.classList.remove('d-none');
        myBtn.disabled = "true";
       
    }
    }


  

     //age validation
  function checkAgeRegex() {
    ageRegex = /^(?:1[01][0-9]|1[9-9]|[2-9][0-9])$/;  
    if( ageRegex.test(signAge.value)) {
        signAge.classList.add('is-valid') 
        signAge.classList.remove('is-invalid');
        msgAge.classList.add('d-none');
        myBtn.removeAttribute("disabled");
       
    }
    else {
        signAge.classList.add('is-invalid');
        signAge.classList.remove('is-valid');
        msgAge.classList.remove('d-none');
        myBtn.disabled = "true";
        
    }
    }

    function checkRePass() {
        if(signrepass.value == signPassword.value){
            signrepass.classList.add('is-valid') 
            signrepass.classList.remove('is-invalid');
            msgPass2.classList.add('d-none');
            myBtn.removeAttribute("disabled");
           
        }else{
            signrepass.classList.add('is-invalid');
            signrepass.classList.remove('is-valid');
            msgPass2.classList.remove('d-none');
            myBtn.disabled = "true";
            
        }
    }

    // if(userRegex.test(signName.value) ||emailRegex.test(signEmail.value) ||passwordRegex.test(signPassword.value)||phoneRegex.test(signPhone.value) ||ageRegex.test(signAge.value) ||signrepass.value == signPassword.value) {
    //     myBtn.removeAttribute("disabled");
    // }
    // else{
    //     myBtn.disabled = "true";
    // }
    
 