function verificarResposta(perguntaId, respostaCorreta, exibirRespostaCorreta) {
    var jaRespondeu = document.getElementById(perguntaId).dataset.jaRespondeu;


    var opcaoSelecionada = document.querySelector('#' + perguntaId + ' input[type="radio"]:checked');

    var retorno = document.querySelector('#' + perguntaId + ' .retorno');
    var explicacaoElement = retorno.querySelector('.explicacao');

    retorno.style.display = 'block';

    var resposta = opcaoSelecionada.value;

    if (resposta === respostaCorreta) {
        var comentario = opcaoSelecionada.parentNode.dataset.comentario;
        explicacaoElement.innerHTML = "<span class='bold'>Comentário:</span> " + "<br><br>" + comentario;
        retorno.style.display = 'block';
        opcaoSelecionada.parentNode.classList.add('opcao-correta');
    } else {
        var pergunta = document.getElementById(perguntaId);
        pergunta.classList.add('shake-animation');
        // Adicionar a classe shake-animation-active ao body
        document.body.classList.add('shake-animation-active');

        // Remover a classe shake-animation-active do body após a animação terminar
        setTimeout(function () {
            document.body.classList.remove('shake-animation-active');
        }, 1000);
        if (exibirRespostaCorreta) {
            var comentarioCorreto = document.querySelector('#' + perguntaId + ' input[value="' + respostaCorreta + '"]').parentNode.dataset.comentario;
            explicacaoElement.innerHTML = "<span class='bold'>A resposta correta é a alternativa " + respostaCorreta.toUpperCase() + ":</span> " + "<br><br><span class='bold'>Comentário:</span> ";
        }
        var comentarioSelecionado = opcaoSelecionada.parentNode.dataset.comentario;
        explicacaoElement.innerHTML += "<br><br>" + comentarioSelecionado;
        retorno.style.display = 'block';
        opcaoSelecionada.parentNode.classList.add('opcao-incorreta');
    }

    document.getElementById(perguntaId).dataset.jaRespondeu = "true";

    // Desabilitar seleção das opções após uma resposta ser selecionada
    document.querySelectorAll('#' + perguntaId + ' input[type="radio"]').forEach(function (opcao) {
        opcao.disabled = true;
    });

    // Desativar eventos de clique e hover nas opções de seleção
    document.querySelectorAll('#' + perguntaId + ' .opcoes label').forEach(function (label) {
        label.style.pointerEvents = 'none'; // Desativa o clique
        label.style.cursor = 'default'; // Muda o cursor para o padrão
    });
}
