var signupName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPass = document.getElementById("signupPass");
var signinEmail = document.getElementById('signinEmail')
var signinPass = document.getElementById('signinPass')

var  signUpArray = [];

function isEmpty() {

    if (signupName.value == "" || signupEmail.value == "" || signupPass.value == "") {
       return false
    } 
    else {
        return true
    }
}
function isEmailExist() {
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
            return false
        }
    }
}

function signUp() {
    if (isEmpty() == false) {
        document.getElementById('demo').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
         return false
    }
    
    var signUp = {
        name: signupName.value,
        email: signupEmail.value,
        password: signupPass.value,
    }
    if (signUpArray.length == 0) {
        signUpArray.push(signUp)
       localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('demo').innerHTML = '<span class="text-success m-3">Success</span>'
        return true
    }
    if (isEmailExist() == false) {
        document.getElementById('demo').innerHTML = '<span class="text-danger m-3">email already exists</span>'

    } else {
        signUpArray.push(signUp)
       localStorage.setItem('users', JSON.stringify(signUpArray))
        document.getElementById('demo').innerHTML = '<span class="text-success m-3">Success</span>'

    }


}

function isLoginEmpty() {

    if (signinPass.value == "" || signinEmail.value == "") {
        return false
    } else {
        return true
    }
}
function login() {
    if (isLoginEmpty() == false) {
        document.getElementById('error').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }
    else {
        document.getElementById('error').innerHTML = '<span class="p-2 text-danger">incorrect email or password</span>'
    }
   
    var password = signinPass.value
    var email = signinEmail.value
    for (var i = 0; i < signUpArray.length; i++) {
        if (signUpArray[i].email.toLowerCase() == email.toLowerCase() && signUpArray[i].password.toLowerCase() == password.toLowerCase()) {
           `  <a href="home.html"></a>`
        } 

       
    }
     
}
