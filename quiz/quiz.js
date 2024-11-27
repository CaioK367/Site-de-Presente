document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        const correctAnswer = "1"; // O valor da resposta correta
        const userAnswer = this.value; // O valor selecionado pelo usuário

        // Adiciona a classe 'clicked' ao botão de rádio quando ele for clicado
        this.classList.add('clicked');

        // Remove as classes de cor dos radio buttons após um pequeno atraso
        setTimeout(() => {
            // Remove a classe 'clicked' e aplica a classe de cor correta ou errada
            this.classList.remove('clicked'); // Remove a cor roxa

            if (userAnswer === correctAnswer) {
                this.classList.add('correct'); // Se a resposta estiver certa, a cor será verde
            } else {
                this.classList.add('incorrect'); // Se a resposta estiver errada, a cor será vermelha
            }

            // A cor do botão volta ao estado inicial (apenas borda roxa) após mais 1 segundo
            setTimeout(() => {
                // Remove as classes de cor final (verde ou vermelho) após 1 segundo
                this.classList.remove('correct', 'incorrect');
                this.checked = false; // Redefine o estado do radio button
            }, 1000); // A cor volta ao normal após 1 segundo

        }, 500); // A mudança de cor para verde ou vermelho acontece após 500ms

        // Oculta as mensagens de erro e sucesso antes de exibir uma nova
        const message = document.getElementById('incorrect-message');
        message.style.display = "none"; // Esconde a mensagem de erro antes de exibir novamente

        // Se a resposta estiver errada, exibe a mensagem de erro após um tempo
        if (userAnswer !== correctAnswer) {
            setTimeout(function() {
                message.style.display = "block"; // Exibe a mensagem de erro
            }, 500); // A mensagem aparece após 500ms
        } else {
            // Se a resposta estiver correta, exibe o modal de sucesso
            setTimeout(function() {
                const modal = document.getElementById('myModal'); // Modal
                modal.style.display = 'flex'; // Exibe o modal
            }, 500); // O modal aparece após 500ms
        }
    });
});

// Botão para avançar
document.getElementById('advance-button').addEventListener('click', function() {
    window.location.href = './lovemeter/lovemeter.html'; // Corrigido o caminho do arquivo
});

document.addEventListener('DOMContentLoaded', function() {
    const text = "Olá meu Bebê, responda essa simples pergunta (A resposta está óbvia!!)";
    const typingText = document.getElementById('typing-text');
    let index = 0;

    function type() {
        if (index < text.length) {
            typingText.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    typingText.innerHTML = '';
    type();
});
