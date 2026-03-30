document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const isDark = body.getAttribute('data-theme') === 'dark';
            
            if (isDark) {
                body.removeAttribute('data-theme');
                themeToggle.innerHTML = '<span class="icon">🌙</span>';
                console.log("Tema Claro Ativado");
            } else {
                body.setAttribute('data-theme', 'dark');
                themeToggle.innerHTML = '<span class="icon">☀️</span>';
                console.log("Tema Escuro Ativado");
            }
        });
    } else {
        console.error("Erro: O botão 'theme-toggle' não foi encontrado no HTML.");
    }
});

