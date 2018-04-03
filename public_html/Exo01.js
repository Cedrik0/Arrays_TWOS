var basket = [];

function exo01_addToBasket(){
    var produit = document.getElementById("exo01_item").value;
    basket.push(produit);
    majVue();
}


function majVue(){
    var r = document.getElementById("exo01_basket");
    r.innerHTML = "";
    for(var i = 0; i < basket.length; i++){
        var div = document.createElement("div");
        div.innerHTML = basket[i];
      r.appendChild(div);  
    }
    
}