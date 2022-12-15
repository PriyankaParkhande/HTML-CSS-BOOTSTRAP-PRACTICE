function login()
{
    console.log(document.getElementById("user").value);
    var username=document.getElementById("user").value;
    var password=document.getElementById("pass").value;
    var restrictuser=/^([a-zA-Z0-9])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;

    
    if(username==''){
        // alert("user name can not empty !");
        document.getElementById("uerror").innerHTML="user name can not empty !";
        document.getElementById("user").focus();
    }else if(password==''){
        document.getElementById("perror").innerHTML="Password cannot be empty";
        document.getElementById("pass").focus();
    }else if(!restrictuser.test(username)){
        document.getElementById("uerror").innerHTML="please check your username!";
        document.getElementById("user").focus();
    }else if(password.length<4||password.length>4){
        document.getElementById("perror").innerHTML="please enter 4 character";
        document.getElementById("pass").focus();

    }
}