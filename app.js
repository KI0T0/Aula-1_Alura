//1 - Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.


const texto = "Isso é uma String";
const num = 5.0;
const verdadeiro = true;


console.log(texto, num, verdadeiro);


//2 - Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console.

const firstName = "Felipe";
const lastName = " Gonçalves";
const fullName = firstName + lastName;
var fourthVar = "lindo";
fourthVar = `${fullName} ${fourthVar}`;
console.log(fourthVar);


//3 - Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.


const numero = 1.0;
const string = "Teste";
const frase = `${numero} + ${string}`;
console.log(frase);


//4 - Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.

var variavel = false;
variavel = true;
console.log(variavel);  

//5 - Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.

var varFora = true;
let letFora = true;

if(varFora = true){
    var varDentro = false;
    let letDentro = false;
    var varFora = false;
    console.log("varFora dentro do loop: " + varFora);
}

console.log("varDentro fora do loop: " + varDentro);
//console.log(letDentro); Essa linha dá erro pois é um let criado dentro de um escopo e chamado fora dele
console.log("varFora após sair do loop: " + varFora);


//6 - Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.


const chovendo = false;


if(chovendo){
    console.log("Está chovendo!");
}else{
    console.log("Não está chovendo!")
}



