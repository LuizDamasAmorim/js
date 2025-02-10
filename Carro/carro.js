/**
 * Carros
 * @author Luiz Damas Amorim
 */

// Classe modelo

class Carro {
    // Atributos
    constructor(ano, cor) {
        this.ano = ano
        this.cor = cor
    }
    // Ações

    criarCarro() {
        console.log("-------------------------------------------------------")
        console.log("🚗")
        console.log(`Ano do carro: ${this.ano}`)
        console.log(`Cor do carro: ${this.cor}`)
    }

    ligar() {
        console.log(`Carro ligado.`)
    }

    desligar() {
        console.log("Carro desligado")
    }

    acelerar() {
        console.log("Carro acelerando")
    }

}

// Classe modelo Avião com herança de Carro
class Aviao extends Carro {
    constructor(envergadura) {
        super(0, "N/A")
        this.envergadura = envergadura
    }
    // Ações
    criarAviao() {
        console.log("-------------------------------------------------------")
        console.log(`✈️`)
        console.log(`Envergadura: ${this.envergadura}`)
    }

    aterrisar() {
        console.log(`Avião aterrisado`)
    }

    // polimorfismo
    acelerar() {
        console.log("Vruuuum")
    }
}

// Instânciando
const carro1 = new Carro(2009, "Vermelho")
carro1.criarCarro()
carro1.acelerar()
carro1.ligar()
carro1.desligar()

const carro2 = new Carro(2004, "Amarelo")
carro2.criarCarro()
carro2.acelerar()
carro2.ligar()
carro2.desligar()

const aviao1 = new Aviao(50)
aviao1.criarAviao()
aviao1.aterrisar()
aviao1.acelerar()



