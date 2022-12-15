function signup() {
    var name = document.getElementById("name").value;
    if (name == '') {
        document.getElementById("nerror").innerHTML = "name cannot be empty!";
        document.getElementById("name").focus();
    }
}

var username = document.getElementById("user").value;
var contact = document.getElementById("contact").value;
var password = document.getElementById("pass").value;

var restrictuser = /^([a-zA-Z0-9])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/; //rejax for email
//var restrictpass="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";//rejacx for password
//var restrictpass=/^(?=.\d)(?=.[a-zAZ])[a-zA-Z0-9]{8,}$/;
var restrictpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=.{8,})/;

var restrictpass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$";
//validation for name
if (username == '') { //validation for email
    document.getElementById("uerror").innerHTML = "email id cannot be empty!";
    document.getElementById("user").focus();
} else if (!restrictuser.test(username)) {
    //to chcek email pattern
    document.getElementById("uerror").innerHTML = "user name is not correct . please check it";
    document.getElementById("user").focus();

} else if (contact == '') { //validation for contact no
    document.getElementById("cerror").innerHTML = "contact cannot be empty!";
    document.getElementById("contact").focus();
} else if (contact.length < 10 || contact.length > 10) {
    //to check mobile no length
    document.getElementById("cerror").innerHTML = "please check contact length!";
    document.getElementById("contact").focus();
} else if (password == '') {
    //to check password cants empty
    document.getElementById("perror").innerHTML = "password cannot be empty !";
    document.getElementById("pass").focus();
} else if (password.length < 8 || password.length > 8) {
    //to check password leng
    document.getElementById("perror").innerHTML = "password should be 8 character !";
    document.getElementById("pass").focus();
} else if (!restrictpass.test(password)) {
    //to check password pattern
    document.getElementById("perror").innerHTML = "please check possword pattern"
}