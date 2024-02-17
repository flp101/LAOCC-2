function trocarTema() {

    var body = document.body;
    var corAtual = window.getComputedStyle(body).getPropertyValue('background-color');
    var texto = document.querySelector('body');
    var elementoPub1 = document.getElementById('pub_1');
    var elementoPub2 = document.getElementById('pub_2');

    if (corAtual === 'rgb(249, 247, 218)') {
        body.style.backgroundColor = '#222'; // Cor de fundo escura
        texto.style.color = '#fff'; // Define a cor do texto como branco para o tema escuro
        elementoPub1.style.color = '#000'; // Deixa preto nas publicações
        elementoPub2.style.color = '#000';
    } else {
        body.style.backgroundColor = '#f9f7da'; // Cor de fundo clara
        texto.style.color = '#000'; // Define a cor do texto como preto para o tema claro
    }
    }
