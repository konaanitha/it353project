function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
const decreaseNumber=()=> {
  var itemval = document.getElementById("textbox");
  //console.log(itemval.value);
  if(itemval.value <=0){
    itemval.value = 0;
  }
  else{
    itemval.value = parseInt(itemval.value)-1;
  }
  }

const increaseNumber=()=> {
  var itemval = document.getElementById("textbox");
  //console.log(itemval.value);
  if(itemval.value >=5){
    itemval.value = 5;
    alert("Maximum 5 quantity allowed")
  }
  else{
    itemval.value = parseInt(itemval.value)+1;
  }
  }
function itemAdded(){
  
  
    var itemval = document.getElementById("textbox");
    if(itemval.value <=0){
      alert("Select the quantity")
    }
    else{
      return alert(itemval.value+ " quatity Item added");

    }

  }
  