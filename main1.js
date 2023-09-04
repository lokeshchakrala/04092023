function add1(){
    username1=document.getElementById("name1").value;
    email1=document.getElementById("pass1").value;
    password1=document.getElementById("pass2").value;
    repass1=document.getElementById("pass3").value;
    male1=document.getElementById("pass4").value;
    localStorage.setItem("username of user",username1);
    localStorage.setItem("Email of user",email1);
      localStorage.setItem("password of user",password1);
      localStorage.setItem("Reenter password of user",repass1);
      localStorage.setItem("gender of user",male1);
    window.location="index.html";
}