document.addEventListener('DOMContentLoaded', function() {
    const text = "Olá meu Bebê, veja como meu dia é sem você!";
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
