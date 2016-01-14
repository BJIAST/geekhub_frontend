var obj,allRes;
var symbol;
var x = 0,y = 0;

function funWrite(char) {
    obj = document.getElementById("field")
      obj.value = obj.value + char;
}

function funOperator (del,plus,minus,multipl) {
     x = obj.value;
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
}



function funAction() {
    var result;
    allRes = document.getElementById("allRes")
    y = obj.value;
    if (symbol == "/") {
         result = x / y;
        allRes.value = x +"/"+y+"="+result;
    }else if (symbol == "+"){
        result = x + y;
        allRes.value = x +"+"+y+"="+result;
    }else if (symbol == "-"){
        result = x - y;
        allRes.value = x +"-"+y+"="+result;
    }else if (symbol == "*"){
        result = x * y;
        allRes.value = x +"*"+y+"="+result;
    }
    obj.value = result;
}