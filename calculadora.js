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
function convierteString_a_Numero(n)
{
    n=parseFloat(n);
    if(typeof(n)==`NaN`)
    {
        n="Has ingresado un dato no numerico"
        return n;
    }
    else
    {
        return n;
    } 
}
//Entrada de numeros por el usuario
let a=prompt("Ingresa el primer numero: ");
let b=prompt("Ingresa el segundo numero: ");
console.log(typeof(a));//Nos muestra que en efecto entra un string
//convertimos texto a numeros.
a=convierteString_a_Numero(a);
console.log(typeof(a))
b=convierteString_a_Numero(b);

let op1=suma(a,b);
console.log(`La suma de ${a} + ${b} es: ${op1}`);

let op2=resta(a,b);
console.log(`La resta de ${a} - ${b} es: ${op2}`);

let op3=multiplica(a,b);
console.log(`La multiplicacion de ${a}x${b} es: ${op3}`);

let op4=divide(a,b);
console.log(`La division de ${a}/${b} es: ${op4}`);