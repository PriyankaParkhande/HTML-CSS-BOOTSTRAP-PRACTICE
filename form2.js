function login()
{
    console.log(document.getElementById("labl").value);
   var username=document.getElementById("labl").value;
   var pass=document.getElementById("lab1").value;
   var pass2=document.getElementById("lab2").value;
   var rezaxuserid=/^([a-zA-Z0-9])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
   var country=document.getElementById("s1").value;
   var gender=document.getElementsByName('yesno');
if(username =='' )
  {
   // alert("user name can not empty !");
   document.getElementById("uerror").innerHTML="user name can not empty !";
   document.getElementById('labl').focus();
  }else if(!rezaxuserid.test(username)){
   // alert("your user id is not valid enter valid username");
   document.getElementById("uerror").innerHTML="your user id is not valid enter valid username !";
   document.getElementById('labl').focus();
}else if(pass =='')
  {
    //alert("password  can not empty !");
    document.getElementById("uerror1").innerHTML="user name can not empty !";
    document.getElementById('labl1').focus();
  }else if(pass.length <8 || pass.length >8)
  {
    alert("password length min and max 8");
  }else if(pass!=pass2){
    document.getElementById("uerror1").innerHTML="password not match !";
    document.getElementById('labl1');
  }else if(country!="Choose"){
    document.getElementById("uerror4").innerHTML="please select option!";
    document.getElementById('s1').focus();
  } else if(!(gender[0].checked || gender[1].checked)){
    document.getElementById("uerror5").innerHTML="please select your gende";
    document.getElementById('labl5').focus();
    return false;
  }
else{
window.location="form1.html";
}
  
   
}

