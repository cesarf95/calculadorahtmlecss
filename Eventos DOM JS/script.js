'use strict;' //Ajuda evitar erros no JS

const inputnome = document.getElementById('nome');
//Campo de texto do nome
const inputAno = document.getElementById('ano');
//Campo de texto do ano
const botaoCalcular = document.getElementById('btn-calcular');
//botao de calcular idade
const resultado = document.getElementById('resultado');
//Parágrafo onde aparece o resultado

//Descobrir ano atual
const anoAtual = new Date().getFullYear();
//Ler o que o usuario digitou
botaoCalcular.addEventListener('click', () => {
    const nome = inputnome.value.trim();
    const anoNascStr = inputAno.value.trim();

    const anoNasc = Number(anoNascStr);
    const anoValido = Number.isInteger(anoNasc) && anoNasc >= 1900 && anoNasc <= anoAtual;

    if (!anoValido) {
        resultado.textContent = 'coloque um ano válido';
        return; // Sai da função sem continuar
    }

    const idade = anoAtual - anoNasc;


    const nomeDefault = nome || 'Visitante';

    const mensagem = `Olá, ${nomeDefault}!
    Voce tem ${idade} anos em ${anoAtual}`;
    
    resultado.textContent = mensagem;

    inputnome.select()



    
});

[inputnome, inputAno].forEach(campo => {
campo.addEventListener('keydown', (evento) => {
if (evento.key === 'enter') {
    botaoCalcular.click();
}
})
})
botaoCalcular.addEventListener('mouseenter', () => {
    botaoCalcular.dataset.labelAntiga = botaoCalcular.textContent;
    botaoCalcular.textContent = 'Clique Aqui!';
});
botaoCalcular.addEventListener('mouseleave', () => {
    botaoCalcular.textContent = botaoCalcular.dataset.labelAntiga || 'Calcular Idade';
});
// O forEach() em JavaScript é um método de arrays que executa uma função específica para cada elemento de um array, permitindo iterar sobre eles de forma simples e legível, sem a necessidade de se preocupar com índices, ao contrário dos loops tradicionais for. Ele é ideal para realizar ações em cada item, como imprimir no console, mas não cria um novo array com o resultado, como o método map() faz. //



