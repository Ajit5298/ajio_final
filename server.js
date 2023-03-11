function Register(event){

    event.preventDefault();
    // alert("Working");

    var UserName = document.getElementById("UserName").value;
    var UserNumber = document.getElementById("UserNumber").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;
    var UserConfirmPassword = document.getElementById("UserConfirmPassword").value;

    var Data = {Name: UserName, Number: UserNumber, Email: UserEmail, Password: UserPassword, ConfirmPassword: UserConfirmPassword}

    var DataFromLS = JSON.parse(localStorage.getItem("AjioData")) || [];

    var flag = false;

    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === UserEmail){
        flag =  true;
       }
     }

     if(flag === true){
        alert("Email is Already Present");
     }
     else if (UserPassword.length < 1 && UserName.length < 1 && UserEmail.length < 1 && UserNumber.length < 1 && UserConfirmPassword.length < 1) {
         alert("must all field");
     }
     else if(UserPassword < 8){
        alert("Password must have 8 digit");   
     }
     else if(UserPassword != UserConfirmPassword){
        alert("Password Mismatch")
     }    
     else{
        DataFromLS.push(Data);
        localStorage.setItem("AjioData", JSON.stringify(DataFromLS));
        document.getElementById("UserName").value = '';
        document.getElementById("UserNumber").value = '';
        document.getElementById("UserEmail").value = '';
        document.getElementById("UserPassword").value = '';
        document.getElementById("UserConfirmPassword").value = '';
        alert("Registration DOne");
        console.log(DataFromLS, "DataFromLS")
    
     }
 
}


function login(event){

    event.preventDefault();
    // alert("working");

    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;

    var DataFromLS = JSON.parse(localStorage.getItem("AjioData"));
    console.log(DataFromLS, "DataFromLS");

    var flag = false;

    for(var i = 0; i < DataFromLS.length; i++ ){
        if(DataFromLS[i].Email === UserEmail && DataFromLS[i].Password === UserPassword){
            flag = true;
        }
    }

    if(flag === true){

     document.getElementById("UserEmail").value = '';
     document.getElementById("UserPassword").value = '';

     var User = {};
     User["Current-user-email"] = UserEmail;
     console.log(User, "User")
     localStorage.setItem("current-user-ajio", JSON.stringify(User));
     
     window.location.href = "/index.html";
     alert("login successfully");
     
    }
    else{
        alert("check your credentials or please create your account");
    }

}



var GettingEmail;

function forgetPassword(event){
    // alert("working");
    event.preventDefault();

    var forgetPassword = document.getElementById("UserEmail").value;
    GettingEmail = forgetPassword;
    console.log(forgetPassword,"forgetPassword");

    var DataFromLS = JSON.parse(localStorage.getItem("AjioData"));
    console.log(DataFromLS,  "DataFromLS");

    var flag = false;

   
    for(var i =0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === GettingEmail){
            flag = true;
        }
    }
    console.log(GettingEmail, "GettingEmail");

    
    if(flag === true){
       var newCode = `<input type="password" id="password"/><br>
       <button onclick = "newPassword()">Set New Password</button>`
       console.log(newCode, "newCode")
       var divFromHTML = document.getElementById("change");
       divFromHTML.innerHTML = newCode;
       alert(" Now Set new Password")
    }
     else{
        alert("please check your email");
    }
  
}


function newPassword(){

    // event.preventDefault();
    // alert("Worked");

    var userPassword = document.getElementById("password").value;
    console.log(userPassword, "userPassword");
    var dataFromLS = JSON.parse(localStorage.getItem("AjioData"));
    console.log(dataFromLS, "dataFromLS");

    for(var i=0; i < dataFromLS.length; i++){
        if(dataFromLS[i].Email === GettingEmail){
        dataFromLS[i].Password = userPassword;
        }
    }
    // console.log(dataFromLS, "data");

    localStorage.setItem("AjioData", JSON.stringify(dataFromLS));
    GettingEmail = '';
    window.location.href = "/login.html";
    alert("password Change Successfully");

}





























