function addToLS(){
    // alert("work")
    var proName = document.getElementById("Name").value;
    var proImage = document.getElementById("image").value;
    var proPrice = document.getElementById("price").value;

    var product = { name:proName, image:proImage, price:proPrice }
    var proDtaLS = JSON.parse(localStorage.getItem("product")) || [];
    // console.log(proDtaLS, "proDtaLS")
    proDtaLS.push(product)
    localStorage.setItem("product", JSON.stringify(proDtaLS));
    alert("Product Added")
}



// =================================================
function login(event){

    event.preventDefault();
    // alert("Working");

    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;

    var DataFromLS = JSON.parse(localStorage.getItem("MyntraData"));

    var flag = false;

    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === UserEmail && DataFromLS[i].Password === UserPassword){
            flag = true;
        }
    }

    if(flag === true){
        document.getElementById("UserEmail").value = '';
        document.getElementById("UserPassword").value = '';
        window.location.href = "index.html";
        localStorage.setItem("cuurent-user", JSON.stringify(UserEmail));
        alert("login Successfully");
    }
    else{
        alert("please check your credential or create your account");
        document.getElementById("UserEmail").value = '';
        document.getElementById("UserPassword").value = '';
    }

}



var GettingEmail;

function forgetPassword(event){
    // alert("working");
    event.preventDefault();

    var UserEmail = document.getElementById("UserEmail").value;
    GettingEmail = UserEmail
    console.log(GettingEmail, "GettingEmail");

    var DataFromLS = JSON.parse(localStorage.getItem("MyntraData"));
    console.log(DataFromLS, "DataFromLS");

    var flag = false;
    
    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === GettingEmail){
            flag = true;
        }
    }
    console.log(GettingEmail, "GettingEmail")

    if(flag=== true){

        DivFromHTML = document.getElementById("Change");
        console.log(DivFromHTML, "DivFromHTML");
        var NewPassword = `<label>Enter New Pasword</label><input id="Password" type="password"><br><button onclick="NewPassword()">Set New Password</button>`
        console.log(NewPassword, "NewPassword");
         
        DivFromHTML.innerHTML = NewPassword;
        console.log(NewPassword, "NewPassword");
       
        alert("Set a new password")
    }

    else{
        alert("please check your mail")
    }

}

function NewPassword(){

    alert("working")
    var UserPassword = document.getElementById("Password").value;
    console.log(UserPassword, "UserPassword");
    
    var DataFromLS = JSON.parse(localStorage.getItem("MyntraData"));
    console.log(DataFromLS, "DataFromLS");

    for(var i=0; i < DataFromLS.length; i++){
        if(DataFromLS[i].Email === GettingEmail){
            DataFromLS[i].Password = UserPassword;
        }
    }
    console.log(DataFromLS, "DataFromLS");

    localStorage.setItem("Myntra-Data", JSON.stringify(DataFromLS));
    GettingEmail = '';
    window.location.href = "/login.html";
    alert("password Change Successfully");


}