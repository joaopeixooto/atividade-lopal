// 1
let nome = prompt("Digite seu nome: ");
alert(`Olá, ${nome}`);

// 2
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));

let adi = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;

alert(`A adição é: ${adi}`);
alert(`A subtração é: ${sub}`);
alert(`A multiplicação é: ${mul}`);
alert(`A divisão é: ${div}`);

// 3
let idade = Number(prompt("Digite a sua idade: "));
if (idade < 18) {
    alert(`Você é menor de idade.`);
} else {
    alert(`Você é maior de idade.`);
}

// 4
let numero = Number(prompt("Digite um número: "));
if (numero % 2 === 0) {
    alert(`O número ${numero} é par.`);
} else {
    alert(`O número ${numero} é impar.`);
}

// 5
let numer1 = Number(prompt("Digite o primeiro número: "));
let numer2 = Number(prompt("Digite o segundo número: "));
let numer3 = Number(prompt("Digite o terceiro número: "));
let maior;

if (numer1 >= numer2 && numer1 >= numer3) {
    maior = numer1;
} else if (numer2 >= numer1 && numer2 >= numer3) {
    maior = numer2;
} else {
    maior = numer3;
}
alert(`O maior número é: ${maior}`);

// 6
let nota = Number(prompt("Digite a sua nota: "));

if (nota >= 6) {
    alert(`Aprovado com nota ${nota}.`);
} else if (nota >= 4) {
    alert(`Está em recuperação com nota ${nota}`);
} else {
    alert(`Reprovado com nota ${nota}`);
}

// 7
let preco_produto = Number(prompt("Digite o preço de um produto: "));
let quantidade_produto = Number(prompt("Digite a quantidade de produtos: "));
let total_original = preco_produto * quantidade_produto;

if (total_original >= 100) {
    let desconto = 10;
    let total_desconto = total_original * (100 - desconto) / 100;
    alert(`O preço final é de R$${total_desconto}, com o desconto de ${desconto}%.`);
} else {
    alert(`O preço total é de R$${total_original}.`);
}

// 8
let nume1 = Number(prompt("Digite um número: "));
let operador = prompt("Digite um operador entre (+,-,*,/): ");
let nume2 = Number(prompt("Digite outro número: "));
let total = 0;

function adicao(Number) {
    total = nume1 + nume2;
    alert(`${nume1} + ${nume2} = ${total}`);
}

function subtracao(Number) {
    total = nume1 - nume2;
    alert(`${nume1} - ${nume2} = ${total}`);
}

function multiplicacao(Number) {
    total = nume1 * nume2;
    alert(`${nume1} * ${nume2} = ${total}`);
}

function divisao(Number) {
    total = nume1 / nume2;
    alert(`${nume1} / ${nume2} = ${total}`);
}

if (operador == "+") {
    adicao();
} else if (operador == "-") {
    subtracao();
} else if (operador == "*") {
    multiplicacao();
} else if (operador == "/") {
    divisao();
} else {
    alert("Operador incorreto!");
}

// 9
let ano_nascimento = Number(prompt("Digite o ano de seu nascimento"));
let idade_aproximada = 2026 - ano_nascimento;

if (idade_aproximada === 18) {
    alert("A sua idade é de aproximadamente 18 anos, talvez você já possa tirar sua carteira de motorista!");
} else if (idade_aproximada > 18) {
    alert(`Você tem aproximadamente ${idade_aproximada} e você já pode tirar sua carteira de motorista!`);
}   else {
    alert(`Você tem aproximadamente ${idade_aproximada} e ainda não pode tirar a carteira de motorista!`);
}

//  10
let temperatura = Number(prompt("Digite uma temperatura em °C: "));

if (temperatura > 25 ) {
    alert(`${temperatura}°C é quente!`);
} else if (temperatura > 17) {
    alert(`${temperatura}°C é uma temperatura amêna!`);
} else {
    alert(`${temperatura}°C é frio!`);
}

// 11
let nm1 = Number(prompt("Digite um número: "))
let nm2 = Number(prompt("Digite outro número: "))

function maior_que (Number) {
    alert(`${nm1} > ${nm2}`)
}
function menor_que (Number) {
    alert(`${nm1} < ${nm2}`)
}
function igual_a (Number) {
    alert(`${nm1} = ${nm2}`)
}

if (nm1 > nm2) {
    maior_que()
} else if (nm1 < nm2) {
    menor_que()
} else {
    igual_a()
}