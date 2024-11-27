document.addEventListener('DOMContentLoaded', function() {
    let porcentagem = 0; // Valor inicial do medidor
    let redirecionando = false; // Controle para saber se está redirecionando
    const medidorDisplay = document.getElementById('medidor-display');
    const amorMessage = document.getElementById('amor-message');
    const progressBar = document.getElementById('progress-bar'); // Seleciona a barra de progresso
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');
    const redirectMessage = document.getElementById('redirect-message');
    const overlay = document.getElementById('overlay');

    // Função para atualizar o medidor, a frase e a barra de progresso
    function atualizarMedidor() {
        medidorDisplay.textContent = `${porcentagem}%`;
        progressBar.style.width = `${porcentagem}%`; // Atualiza a largura da barra de progresso

        // Alterar a frase com base na porcentagem
        if (porcentagem === 100) {
            amorMessage.style.display = 'block';
            amorMessage.textContent = "EU TE AMO PRINCESINHA!!! ❤️❤️❤️❤️"; // 100%

            // Inicia redirecionamento se ainda não estiver redirecionando
            if (!redirecionando) {
                redirecionando = true;
                setTimeout(function() {
                    if (redirecionando) { // Verifica se ainda deve redirecionar
                        redirectMessage.style.display = 'block';
                        overlay.style.display = 'flex'; // Aplica o desfoque e centraliza a mensagem

                        // Redirecionar após 2 segundos
                        setTimeout(function() {
                            if (redirecionando) { // Apenas redireciona se ainda estiver no estado correto
                                window.location.href = "../question/question.html"; // Substitua pela página desejada
                            }
                        }, 2000);
                    }
                }, 3000);
            }
        } else {
            // Cancela o redirecionamento e a mensagem caso a porcentagem seja decrementada
            if (redirecionando) {
                redirecionando = false;
                redirectMessage.style.display = 'none'; // Esconde a mensagem de redirecionamento
                overlay.style.display = 'none'; // Remove o fundo desfocado
            }

            // Atualiza as mensagens para outras porcentagens
            if (porcentagem >= 80) {
                amorMessage.style.display = 'block';
                amorMessage.textContent = "Quase quase, só mais um tico!"; // 80%
            } else if (porcentagem >= 50) {
                amorMessage.style.display = 'block';
                amorMessage.textContent = "Metadinha aí, mas dá pra aumentar"; // 50%
            } else if (porcentagem >= 20) {
                amorMessage.style.display = 'block';
                amorMessage.textContent = "Tá começando a melhorar"; // 20%
            } else {
                amorMessage.style.display = 'block';
                amorMessage.textContent = "Pode começar a aumentar isso aí, kirida"; // 0-19%
            }
        }
    }

    // Botão para aumentar a porcentagem
    increaseButton.addEventListener('click', function() {
        if (porcentagem < 100) {
            porcentagem += 10;
            if (porcentagem > 100) porcentagem = 100; // Impede de ultrapassar 100%
            atualizarMedidor();
        }
    });

    // Botão para diminuir a porcentagem
    decreaseButton.addEventListener('click', function() {
        if (porcentagem > 0) {
            porcentagem -= 10;
            if (porcentagem < 0) porcentagem = 0; // Impede de ir abaixo de 0%
            atualizarMedidor();
        }
    });

    // Inicializa o medidor
    atualizarMedidor();
});
