var obj,allRes,
    symbol,
    x, y,
    intx,inty;



function funWrite(char) {
    obj = document.getElementById("field")
      obj.value = obj.value + char;
}


function funOperator (del,plus,minus,multipl) {
     x = obj.value;
    allRes = document.getElementById("allRes");

    if (del == true) {
        symbol = "/";
        obj.value = "";

    }else if (plus == true) {
        symbol = "+";
        obj.value = "";

    }else if (minus == true){
        symbol = "-";
        obj.value = "";

    }else if (multipl == true){
        symbol = "*";
        obj.value = "";

    }
    allRes.value = x+symbol;

}



function funAction() {
    var result;
    y = obj.value;
    intx = parseInt(x,10);
    inty = parseInt(y,10);
    if (symbol == "/") {
         result = intx / inty;
        allRes.value = intx +"/"+inty+"="+result;
    }else if (symbol == "+"){
        result = intx + inty;
        allRes.value = intx +"+"+inty+"="+result;
    }else if (symbol == "-"){
        result = intx - y;
        allRes.value = intx +"-"+inty+"="+result;
    }else if (symbol == "*"){
        result = intx * inty;
        allRes.value = intx +"*"+inty+"="+result;
    }
    obj.value = result;
}