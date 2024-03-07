var jaRespondeu = false;

function verificarResposta() {
    if (jaRespondeu) {
        mostrarPopup();
        return;
    }

    var opcaoSelecionada = document.querySelector('input[name="q1"]:checked');
    var retorno = document.querySelector('.retorno');
    var explicacao = document.querySelector('.explicacao');

    if (!opcaoSelecionada) {
        alert("Por favor, selecione uma opção.");
        return;
    }

    retorno.style.display = 'block';


    var resposta = opcaoSelecionada.value;

    if (resposta === "c") {
        retorno.innerHTML = "Resposta correta! <br>Explicação: Brasília foi construída com o propósito específico de ser a capital do Brasil.";
        opcaoSelecionada.parentNode.classList.add('opcao-correta');
    } else {
        retorno.innerHTML = "Resposta incorreta. <br>Explicação: Brasília foi construída com o propósito específico de ser a capital do Brasil.";
        retorno.style.display = 'block';
        opcaoSelecionada.parentNode.classList.add('opcao-incorreta');
        document.querySelector('input[value="c"]').parentNode.classList.add('opcao-correta');
        var pergunta = document.getElementById('pergunta');
        pergunta.classList.add('shake-animation');
    }

    jaRespondeu = true;
}

function mostrarPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function fecharPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
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
