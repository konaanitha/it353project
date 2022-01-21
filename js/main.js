
function itemAdded(){

}
let carts= document.querySelectorAll(".btn btn-success");

for(let i=0;i<carts.length; i++){
    carts[i].addEventListener("click",() =>  {
        console.log("added to cart");
    });
}

function cartnumbers(){
    localStorage.setItem("cartNumbers",1);
}