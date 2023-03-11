window.onload = function(){
    
    // alert("workong");
    var divFromHtml = document.getElementById("DisplayProduct");
    console.log(divFromHtml, "divFromHtml");

    var productData = JSON.parse(localStorage.getItem("productInfo"));
    console.log(productData, "productData");
    
    var array = [];

    for(var i=0; i< productData.length; i++){
        array += `<div><img src =${productData[i].image}></img><h4>${productData[i].name}</h4><p>${productData[i].price}</p><button onclick = 'AddToCart(${(JSON.stringify(productData[i]))})'>Add to cart</button></div>`
    }
    divFromHtml.innerHTML = array;
    // console.log(array, "array");
}

function AddToCart(pro){
    // alert("Working");
    var product = JSON.stringify(pro);
    console.log(product);

    var DataFromLS = JSON.parse(localStorage.getItem("AjioData"));
    var currentUser = JSON.parse(localStorage.getItem("current-user-ajio"));

    if(currentUser){
        var allUsers = [];

        for(var i=0; i<DataFromLS.length; i++){
            if(DataFromLS[i].Email === currentUser["Current-user-email"]){
                var newObj = DataFromLS[i];
                newObj["cartProducts"] = newObj["cartProducts"] || [];
                newObj["cartProducts"].push(JSON.parse(product));
                allUsers.push(newObj)
            }
            else{
                allUsers.push(DataFromLS[i])
            }
        }
        localStorage.setItem("AjioData", JSON.stringify(allUsers));
        alert("products added into cart")
    }
    else{
        alert("login first to add product into cart");
    }
    
}