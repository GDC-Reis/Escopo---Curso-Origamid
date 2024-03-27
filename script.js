// Escopo de Função 
// Variáveis declaradas dentro de função não são acessadas fora das mesmas.

function mostrarCarro(){
    let carro = 'Fusca';
    console.log(carro);
}

mostrarCarro() // Fusca no console
// console.log(carro) // Erro, carro is not defined

// Escopo evita o conflito entre nomes.

// Const 
// Mantém o escopo no bloco, impede a redeclaração e impede a modifiação do valor da variavel, evitando bugs no código.
const mes = 'Dezembro';
// mes = 'Janeiro' // erro, tentou modificar o valor.
/* const semana; // erro, declarou sem valor. */

const data = {
    dia: 28,
    mes: 'Dezembro',
    ano: 2018,
}

data.dia = 29; // Funciona
// data = 'Janeiro' // erro

// Variaveis com valores constantes

// Let
// Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
let ano;

ano = 2018;
ano++;
console.log(ano); // 2019

/* let ano = 2020 // erro, redeclarou a variável. */

// Exercício

// Por qual motivo o código abaixo retorna com erros ?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
    
    console.log(cor, marca, portas)
}


// Como corrigir o erro abaixo ?
const dois = 2;

function somarDois(x){
    return x + dois;
}

function dividirDois(x){
    return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));

// O que fazer para total retornar 500 ?

const numero = 50;

for (let numero = 0; numero < 10; numero++){
    console.log(numero);
}

const total = 10 * numero;
console.log(total);