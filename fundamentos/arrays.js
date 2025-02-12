/**
 * Estudo do array(vetor)
 * @author Luiz Damas Amorim
 */

console.log()
let alunos = []
console.log(typeof(alunos))
                   // [0]     [1]     [2]      [3]       [4]   
let alunosEM1 = ["Vitor", "Tania", "Pedro", "Maria", "Viviane"]
console.log(typeof(alunosEM1))

// ".lenght (obtem o tamanho da array"
console.log(alunosEM1.lenght)

// Exibindo os dados de um array
console.log(alunosEM1)

// Exibindo um aluni da array
console.log(alunosEM1[2])

// Exibindo os dados de um array em uma tabela
console.table(alunosEM1)

// Adicionando um elemento ao array
alunosEM1.push("Luiza")
console.table(alunosEM1)

// Modificar um elemento do array
alunosEM1[0] = "Victor"
console.table(alunosEM1)

// Excluir um elemento da array
delete alunosEM1[2]
console.table(alunosEM1)

// Percorrendo uma array
let notas = [3, 8, 5, 9, 2]

// Uso do laço "for" para percorrer uma array
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// ForEach (simplificação do laço for para uso em array)
notas.forEach((n) => {
    console.log(n)
}) 

// map (mapeamento da estrutura de dados para cálculos ou conversões)

// Exemplo 1: adicionar 1 ponto as notas
let notasAtualizadas = notas.map((na) => {
    return na + 1
})

console.log(notas)
console.log(notasAtualizadas)

// Exemplo 2: Coversão de um sistema de notas
/*
    NA - Não atendeu (nota < 5)
    PA - Parcialmente atendido (nota entre 5 e 7)
    A - Atendeu (nota > 7)
 */

let notasConvertidas = notas.map((nc) =>{
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else{
        return "PA"
    }
})

console.log(notas)
console.log(notasConvertidas)