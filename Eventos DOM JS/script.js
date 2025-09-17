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
    
})



