// Selecionando o elemento da tela da calculadora
const calculatorScreen = document.querySelector('.calculator-screen');

// Selecionando os botões da calculadora
const calculatorKeys = document.querySelector('.calculator-keys');

// Adicionando um ouvinte de evento para os botões da calculadora
calculatorKeys.addEventListener('click', (event) => {
    // Verificando se o elemento clicado é um botão
    if (event.target.matches('button')) {
        // Obtendo o botão clicado
        const key = event.target;
        // Obtendo o texto do botão
        const action = key.textContent;
        // Obtendo o número exibido atualmente na tela
        const displayNum = calculatorScreen.value;

        // Verificando se o botão clicado é um operador
        if (!action.match(/[0-9]/)) {
            // Atualizando o valor exibido na tela com o operador clicado
            calculatorScreen.value = displayNum + '' + action + '';
        } else {
            // Atualizando o valor exibido na tela com o número clicado
            calculatorScreen.value = displayNum + action;
        }
    }
});

// Adicionando um ouvinte de evento para o botão Clear (C)
document.getElementById('clear').addEventListener('click', () => {
    // Limpando a tela da calculadora
    location.reload()
});

// Adicionando um ouvinte de evento para o botão Equals (=)
document.getElementById('equals').addEventListener('click', () => {
    const resultado = eval(calculatorScreen.value);
    const resultadoSemIgual = resultado.toString().replace('=', '');
    calculatorScreen.value = resultadoSemIgual;
});
