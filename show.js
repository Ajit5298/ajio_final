window.onload=function(){
    // alert("working")
    var dataLS = JSON.parse(localStorage.getItem("product"));
    var image = document.getElementById("screen");
    
    var Array= [];
    for(var i =0 ; i <  dataLS.length; i++){
        Array += `<div><img src="${dataLS[i].image}" alt=""><span>${dataLS[i].name}</span> <p>${dataLS
            [i].price}</p></div>`
        
    }
    image.innerHTML=Array
    
}