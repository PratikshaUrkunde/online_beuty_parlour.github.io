var email = document.getElementById('email')
var password = document.getElementById('password')
var username = document.getElementById('username')
var passwordModal = document.getElementById('password-modal')
var UserNameModal = document.getElementById('username-modal')

/*After entering data it will show data*/
function show() {
    var identity = []
    identity.push(email.value, password.value, username.value)
    alert('Your UserName is ' + identity[2] + '\n' + 'Your password is ' + identity[1] + '\n' + 'Your email is ' + identity[0])
}
/*check the email is in format or not*/
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validatePassword(password) {
    var passwordPattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return passwordPattern.test(password)
}

/*For register*/
document.getElementById('signup').onclick = function () {
    /*Check if email password or username is empty it will show error message */
    if (password.value == '' || email.value == '' || username.value == '') {
        //alert('Please insert your password,email and username')
        swal("Oops!", "Please insert your password,email or username", "error");

    }
   
    /*If email is not in format then it will show error message*/ 
    else if (validateEmail(email.value) == false) {
        swal("Oops!", "Please insert valid Email", "error");
        //alert('Please insert a valid email')
    }
    else if (validatePassword(password.value) == false) {
        swal("Oops!", "Please enter valid password which has 6 or more characters and a  digit and a lower-case letter and an upper-case letter", "error");
        //alert('Please insert a valid email')
    }  
    
    /*Else after entering correct data it will show message with data*/
    else {
        //alert('You registered successfully,you can login now')
        swal("Good job!", "You registered successfully,you can login now!", "success");
        show()
    }

}
/*For login*/
document.getElementById('login-modal').onclick = function () {
    /*Array for storing value*/
    var holder = []
    holder.push(username.value, password.value)
    /*Check if password or username is empty it will show error message */
    if (UserNameModal.value == '' || passwordModal.value == '') {
        //alert('Please insert your username and password')
        swal("Oops!", "Please insert your username and password ", "error");
    } 
   
    /*If inputs username and password matches with the inputs which is given by user while registration*/
    else if (UserNameModal.value == holder[0] && passwordModal.value == holder[1]) {
        //alert('Login Successfully')
        swal("Good job!", "Login Successfully!", "success");
        window.location.href = 'book.html'
    } 
    /*If not matches return error message*/
    else {
       // alert('Please sign up first')
        swal("Oops!", "Please sign up first! ", "error");
    }
}
