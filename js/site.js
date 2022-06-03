
function variables(){
    let b = 1.333;
    var a = "string";        
    const c = a + b;
    alert(c);
}

function incremento(){
    let a = 5;    
    a++;
    let b = 3;
    //a += 1;
    alert(a+b);
}

function decremento(){
    let a = 5;    
    --a;
    alert(a);
}

function negacio(){
    let a = false;
    let b = true;
    a = !a;
    b = !b;   
}

function matematicos(){
    let a = 10;
    let b = 2;
    let c = a + b; //12
    c = a / b; //5
    c = a - b; //8
    c = a * b; //20
    c = a % b; // 0
    // Otra forma
    //a += b;  // 12 a = a +b
    //a -= b; // 8 a = a -b
    a *= b // 20  a = a * b
    //a /= b // 5  a = a / b 
    alert(a);
}

function relacionales(){
    let a = 5;
    let b = 3;
    //let a = "N";
    //let b = "A";
    let c;
    //c = a > b; //false
    c = a < b;  // true
    //c = a >= b; // false
    //c = a <= b; // true
    //c = a != b; // true
    //c = a == b; // false
    //c = a === b; // false
    alert(c);
}


function logicosAnd(){
    let a = 3;
    let b = 3;
    let c = 2;
    if(a == b && c > 0)    
    {
        alert(c);
    }
}

function logicosOR(){
    let a = 3;
    let b = 3;
    let c = 2;
    if(a < 0 || b > 0)    
    {
        alert(c);
    }
}

logicosOR();