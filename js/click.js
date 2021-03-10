var n_num = 0;
var cont = 0;
var num_array = [];
var total = 0;
var op = [];
var fraction = 0;
var size;
var display = [];
var op_now;

function concat(bt) {
    if (fraction == 0){
        n_num = (10*n_num) + bt
    }else {
        n_num = n_num + (bt/Math.pow(10,fraction));
        fraction++;
    }
    document.getElementById("display-calc").value = document.getElementById("display-calc").value + bt;
    num_array[cont]=n_num;
    return n_num;
}

function concat_initial() {
    n_num = 0
    num_array[cont]=n_num;
    return n_num;
}

function summ(){
    if (num_array.length > 1){
        total = result();
    }else{
        if (cont == 0){
            total = num_array[cont];
        }else{
            total = total + num_array[cont];
        } 
    }
    fraction = 0;
    op[cont] = 2;
    cont++;
    n_num = 0;
    document.getElementById("display-calc").value = document.getElementById("display-calc").value + " + ";
}

function mult(){
    if (num_array.length > 1){
        total = result();
    }else{
        if (cont == 0){
            total = num_array[cont];
        }else{
            total = total * num_array[cont];
        } 
    }
    fraction = 0;
    op[cont] = 3;
    cont++;
    n_num = 0;
    document.getElementById("display-calc").value = document.getElementById("display-calc").value + " * ";
}

function sub(){
    if (num_array.length > 1){
        total = result();
    }else{
        if (cont == 0){
            total = num_array[cont] - total;
        }else{
            total = total - num_array[cont];
        } 
    }
        op[cont] = 1;
        cont++;
        n_num = 0;
        document.getElementById("display-calc").value = document.getElementById("display-calc").value + " - ";
        fraction = 0;
        return total
}

function div(){
    if (num_array.length > 1){
        total = result();
    }else{
        if (cont == 0){
            total = num_array[cont];
            console.log( "if 1" );
        }else{
            total = total / num_array[cont];
            console.log( "if 2" );
        } 
    }
        op[cont] = 4;
        cont++;
        n_num = 0;
        console.log( "total: " + total );
        document.getElementById("display-calc").value = document.getElementById("display-calc").value + " / ";
        fraction = 0;
        return total
}

function result(){
    op_now = op[cont-1];
    if (op_now == 1) {
        total = total - num_array[cont];
    }else if (op_now == 2){
        total = total + num_array[cont];
    }else if (op_now == 3){
        total = total * num_array[cont];
    }else if (op_now == 4){
        total = total / num_array[cont];
    }
    num_array = [];
    cont = 0;
    n_num = 0;
    fraction = 0;
    n_res = concat(total);
    document.getElementById("display-calc").value = n_res;
    total = 0;
    op = [];
    return n_res
}

function virgule(){
    if (fraction == 0){
        fraction = 1;
        document.getElementById("display-calc").value = document.getElementById("display-calc").value + ".";
    }  
}

function erase(){
    document.getElementById("display-calc").value = "";
    n_num = 0;
    cont = 0;
    num_array = [];
    total = 0;
    fraction = 0;
    op = [];
    concat_initial();
}

function undo(){
    display = document.getElementById("display-calc").value
    size = display.length;
    if (size < 2){
        erase();
    }
    if (cont == 0){
        if (fraction == 1){
            fraction = 0;
        }else{
            if (fraction >1){
            var a1 = num_array[cont] * Math.pow(10,fraction-1);
            console.log("a1 " + a1);
            a1 = (a1/10 | 0);
            console.log("a2 " + a1);
            num_array[cont] = a1/Math.pow(10,(fraction-2));
            console.log("n_a " + num_array[cont]);
            fraction--;   
            }
        }
        display = display.slice(0,size-1)
        document.getElementById("display-calc").value = display;
    }else{
        op_now = op[cont-1];
        switch (op_now) {
            case 1:
                if (cont == 1){
                    total = 0;
                } else{
                    total = total + num_array[cont-1];
                }
            break;
            case 2:
                if (cont == 1){
                    total = 0;
                } else{
                    total = total - num_array[cont-1];
                }
            break;
            case 3:
                if (cont == 1){
                    total = 0;
                } else{
                    total = total / num_array[cont-1];
                }
            break;
            case 4:
                if (cont == 1){
                    total = 0;
                } else{
                    total = total * num_array[cont-1];
                }
            break;
            default:
            console.log("op 5");
        }
        op[cont] = 0;
        cont--;
        n_num = num_array[cont];
        display = display.slice(0,size-3);
        document.getElementById("display-calc").value = display;
        }
        
}
