function verificarResposta(perguntaId, respostaCorreta, explicacaoCorreta, exibirRespostaCorreta) {
    var jaRespondeu = document.getElementById(perguntaId).dataset.jaRespondeu;
    
    if (jaRespondeu === "true") {
        mostrarPopup();
        return;
    }

    var opcaoSelecionada = document.querySelector('#' + perguntaId + ' input[type="radio"]:checked');

    var retorno = document.querySelector('#' + perguntaId + ' .retorno');
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
        var textoExplicacao = "";
        if (exibirRespostaCorreta) {
            textoExplicacao = "A resposta correta é a alternativa " + respostaCorreta.toUpperCase() + ".<br><br>";
        } else {
            textoExplicacao = "A questão está correta.<br><br>";
        }
        textoExplicacao += "<span class='bold'>Comentário:</span> " + "<br><br>" + explicacaoCorreta;
        explicacaoElement.innerHTML = textoExplicacao;
        retorno.style.display = 'block';
        opcaoSelecionada.parentNode.classList.add('opcao-incorreta');
        document.querySelector('#' + perguntaId + ' input[value="' + respostaCorreta + '"]').parentNode.classList.add('opcao-correta');
        
        // Adicionar a classe shake-animation ao elemento da pergunta
        var pergunta = document.getElementById(perguntaId);
        pergunta.classList.add('shake-animation');
        
        // Adicionar a classe shake-animation-active ao body
        document.body.classList.add('shake-animation-active');
        
        // Remover a classe shake-animation-active do body após a animação terminar
        setTimeout(function() {
            document.body.classList.remove('shake-animation-active');
        }, 1000); // Tempo de espera deve ser igual ao tempo da animação de agitação em milissegundos
    }

    document.getElementById(perguntaId).dataset.jaRespondeu = "true";
}

function selecionarCaso(id, button) {
    // Oculta todos os casos
    document.querySelectorAll('.tab-pane').forEach(tab => {
        tab.classList.remove('show', 'active');
    });

    // Remove a classe 'clicado' de todos os botões
    document.querySelectorAll('.button.btn-aux').forEach(btn => {
        btn.classList.remove('clicado');
    });

    // Exibe o caso selecionado
    document.getElementById(id).classList.add('show', 'active');

    // Ativa o botão clicado
    button.classList.add('clicado');
}

window.onload = function() {
    // Adiciona a classe "clicado" ao botão "Parte 01" quando a página carregar
    document.querySelector('.btn-aux:first-child').classList.add('clicado');
};

// Adicionar a classe 'clicked' ao <label> quando clicado
document.querySelectorAll('.opcoes label').forEach(function(label) {
    label.addEventListener('click', function() {
        // Remover a classe 'clicked' de todos os <label>
        document.querySelectorAll('.opcoes label').forEach(function(label) {
            label.classList.remove('clicked');
        });
        // Adicionar a classe 'clicked' apenas ao <label> clicado
        this.classList.add('clicked');
    });
});