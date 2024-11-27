 // Função para verificar a seleção e redirecionar
    const naoOption = document.getElementById('nao');
    naoOption.addEventListener('change', function() {
        setTimeout(function() {
            window.location.href = "../drawing-sad/drawing-sad.html"; // Substitua pelo caminho da página que deseja redirecionar
        }, 500);
    });

