
function button_minus(obj) {
//    alert(obj.parentElement.children[1].innerHTML);
    count = obj.parentElement.children[1].innerHTML;
    if (count > 0) {
        count--;
    }
    obj.parentElement.children[1].innerHTML = count;
}

function button_plus(obj) {
    count = obj.parentElement.children[1].innerHTML;
    count++;
    obj.parentElement.children[1].innerHTML = count;
}



function viewDiv(){
    document.getElementById("row1").style.display = "block";
  };

