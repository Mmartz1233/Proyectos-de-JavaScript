function getReceipt(){
    //este analiza nuestro string si puede pasar de funcion en funcion
    var text1 = "<h3> Tu orden: </h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for(var i = 0; i < sizeArray.length; i++){
        if(sizeArray[i].checked){
            var selectdSize = sizeArray[i].value;
            text1 = text1 + selectdSize + "<br>";
        }
    }
    if (selectdSize === "Personal Pizza"){ sizeTotal = 6 ;}
    else if (selectdSize === "Medium Pizza" ){sizeTotal =8; }
    else if (selectdSize === "Large Pizza" ){sizeTotal =10; }
    else if (selectdSize === "Extra Large Pizza" ){sizeTotal =14; }
    else if (selectdSize === "Personalizada" ){sizeTotal =16; }
    runningTotal = sizeTotal;
    console.log(selectdSize + " =$"+ sizeTotal +".00");
    console.log(selectdSize + " size text1: "+text1 );
    console.log(selectdSize + " subtotal: $ "+ runningTotal +".00");
    //estas variables pasaran en cada funcion
    getTopping(runningTotal, text1);

};

function getTopping(runningTotal, text1){
    var toppingTotal = 0;
    var selecetedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++){
        if(toppingArray[j].checked){
            selecetedTopping.push(toppingArray[j].value);
            console.log("selecciona alguna (" + toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }

    var toppingCount = selecetedTopping.length;
    if(toppingCount >1){
        toppingTotal = (toppingCount -1);
    }else {
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal);
    console.log("total seleccionado "+toppingCount);
    console.log(toppingCount+ "topping -1 free tooping = "+"$ "+toppingTotal+".00");
    console.log("Topping text1: "+text1);
    console.log("Purchase Total:  "+"$ "+runningTotal+". 00");
    document.getElementById("ShowText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML="<h3> Total: <strong>$"+runningTotal+".00"+"</strong></h3>";


}
