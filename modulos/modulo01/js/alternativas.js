var jaRespondeu = false;

function verificarResposta(respostaCorreta, explicacaoCorreta) {
    if (jaRespondeu) {
        mostrarPopup();
        return;
    }

    var opcaoSelecionada = document.querySelector('input[name="q1"]:checked');
    var retorno = document.querySelector('.retorno');
    var explicacaoElement = retorno.querySelector('.explicacao');

    if (!opcaoSelecionada) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    retorno.style.display = 'block';

    var resposta = opcaoSelecionada.value;

    if (resposta === respostaCorreta) {
        explicacaoElement.innerHTML = "<span class='bold'>Comentário:</span> " + "<br><br>" + explicacaoCorreta;
        opcaoSelecionada.parentNode.classList.add('opcao-correta');
    } else {
        var textoExplicacao = "A resposta correta é a alternativa " + respostaCorreta.toUpperCase() + ".<br><br>";
        textoExplicacao += "<span class='bold'>Comentário:</span> " + "<br><br>" + explicacaoCorreta;
        explicacaoElement.innerHTML = textoExplicacao;
        retorno.style.display = 'block';
        opcaoSelecionada.parentNode.classList.add('opcao-incorreta');
        document.querySelector('input[value="' + respostaCorreta + '"]').parentNode.classList.add('opcao-correta');
        var pergunta = document.getElementById('pergunta');
        pergunta.classList.add('shake-animation');
    }

    jaRespondeu = true;
}

function mostrarPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('popup-overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block'; // Mostra o overlay quando o pop-up aparece
}

function fecharPopup() {
    var popup = document.getElementById('popup');
    var overlay = document.getElementById('popup-overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none'; // Oculta o overlay quando o pop-up é fechado
}
