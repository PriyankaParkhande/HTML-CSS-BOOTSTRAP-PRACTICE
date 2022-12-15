function login()
{
    console.log(document.getElementById("labl").value);
    console.log(document.getElementById("labl1").value);
   var username=document.getElementById("labl").value;
   var pass=document.getElementById("labl1").value;
   var rezaxuserid=/^([a-zA-Z0-9])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;
   var username=document.getElementById("labl").value;
//    if(username =='' || pass=='')
//   {
//     alert("both are empty ! plz fill info");
//   }else 
if(username =='' )
  {
   // alert("user name can not empty !");
   document.getElementById("uerror").innerHTML="user name can not empty !";
   document.getElementById('labl').focus();
  }else if(pass =='')
  {
    //alert("password  can not empty !");
    document.getElementById("uerror1").innerHTML="user name can not empty !";
    document.getElementById('labl1').focus();
  }else if(pass.length <8 || pass.length >8)
  {
    alert("password length min and max 8");
  }
  else if(!rezaxuserid.test(username)){
      alert("your user id is not valid enter valid username");
     
  }
else{
window.location="index.html";
}
  
   
}