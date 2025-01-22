/**
 * Estudo de funções
 */

//Função simples (literal)
function hello(){
    console.log("Hello function")
}

console.log(typeof(hello))
hello()

//função atribuida
const hello2 = function() {
    console.log("Hello function assigned")
}

console.log(typeof(hello2))
hello2()


//arrow function => (simplificação de função atribuida)
// "() =>" é igual a "function"
const hello3 = () => {
    console.log("Hello arrow function")
}

console.log(typeof(hello3))
hello3()

//Funções com passagem de parâmetros e retorno
//Função simples (literal)

function somarS(num1, num2) {
    return (console.log(num1 + num2))
}

console.log("Soma de dois números")
somarS(2,3)

// função atribuida 
const somarA = function(num1, num2) {
    return (console.log(num1 + num2))
}

somarA(5,7)

//Arrow function
const somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
} 

somarAF(5, 8)

// Arrou function simplificada (o retorno é implicito)
const somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(2, 20)