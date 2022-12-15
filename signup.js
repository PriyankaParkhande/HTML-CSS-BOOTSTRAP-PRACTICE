function signup()
{
    var username=document.getElementById("user").value;
    var password=document.getElementById("pass").value;
    var cpassword=document.getElementById("pass1").value;
    var restrictuser=/^([a-zA-Z0-9])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var country=document.getElementById("select").value;
   var g1=document.getElementById("male").value;
   var g2=document.getElementById("female")
    var active=document.getElementById("check");
    if(username=='')
    {
        document.getElementById("uerror").innerHTML="user name cannot be empty!";
        document.getElementById("user").focus();
    }else if(!restrictuser.test(username)){
        document.getElementById("uerror").innerHTML="user name is not correct . please check it";
        document.getElementById("user").focus();

    }else if(password==''){
      document.getElementById("perror").innerHTML="password cannot be empty !";
      document.getElementById("pass").focus();
    }else if(password.length<4||password.length>4){
        document.getElementById("perror").innerHTML="password should be 4 character !";
        document.getElementById("pass").focus();
    }else if(password!=cpassword){
document.getElementById("pperror").innerHTML="password is not match please checkyour password";
document.getElementById("pass1");
    }else if(country.value==""){
        document.getElementById("cerror").innerHTML="please select below option";
        document.getElementById("select").focus();     
    }else if(g1.checked==false || g2.checked==false){
        document.getElementById("gerror").innerHTML="please select your gender";
        document.getElementsByid("male","female");
    }else if(active.checked==false){

        document.getElementById("aerror").innerHTML="please agree for submit";
        document.getElementById("check").focus();

    }

}