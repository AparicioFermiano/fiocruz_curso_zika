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