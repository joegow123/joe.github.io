const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById('confirm-password');
const submit = document.getElementById("submit");

var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.3.min.js'; // Check https://jquery.com/ for the current version
document.getElementsByTagName('head')[0].appendChild(script);

submit.addEventListener("click", function() {
    let isOkayToRegister = false;
    
    if (username.value !== '' && password.value !== '' && confirmPassword.value !== '')
    {
        if (password.value === confirmPassword.value)
        {
            isOkayToRegister = true;
        }
    }


    if(isOkayToRegister === true){
        alert("Registration is successful.")
    } else {
        alert("Registration is unsuccessful.")
    }
})

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");   
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  }
