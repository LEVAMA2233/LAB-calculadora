//Definimos a las funciones que haran las distintas operaciones
function suma(x,y)
{
    return x+y;
}
function resta(x,y)
{
    return x-y;
}
function multiplica(x,y)
{
    return x*y;
}
function divide(x,y)
{
    if(y==0){return "Syntax Error: Division entre cero"};
    return x/y;
}
function convierteString_a_Numero(a)
{
    return parseFloat(a)
}

let a="5";
let b="2";
let n1="0";
a=convierteString_a_Numero(a);
b=convierteString_a_Numero(b);

let op1=suma(a,b);
console.log(`La suma de ${a} + ${b} es: ${op1}`);

let op2=resta(a,b);
console.log(`La resta de ${a} - ${b} es: ${op2}`);

let op3=multiplica(a,b);
console.log(`La multiplicacion de ${a}x${b} es: ${op3}`);

let op4=divide(a,n1);
console.log(`La division de ${a}/${n1} es: ${op4}`);