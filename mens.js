function AddTheProduct(event){

    event.preventDefault();
    // alert("Working");

    var proImage = document.getElementById("image").value;
    var proName = document.getElementById("name").value;
    var proPrice = document.getElementById("price").value;

    var product = {image:proImage, name:proName, price: proPrice}
    console.log(product, "product");

    var dataFromLS = JSON.parse(localStorage.getItem("productInfo")) || [];
    dataFromLS.push(product);
    console.log(dataFromLS, "dataFromLS");

    localStorage.setItem("productInfo", JSON.stringify(dataFromLS ));
    
    document.getElementById("image").value = '';
    document.getElementById("name").value = '';
    document.getElementById("price").value = '';
    alert("product add to the website");

}
