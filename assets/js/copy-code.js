// Função para copiar código dos blocos
async function copyCodeBlock(button) {
    const codeBox = button.closest('.code-box');
    const code = codeBox.querySelector('code');
    const text = code.textContent;
    
    try {
        await navigator.clipboard.writeText(text);
        
        // Mudar ícone para check
        const icon = button.querySelector('svg');
        icon.innerHTML = '<polyline points="20 6 9 17 4 12" stroke="currentColor" stroke-width="2" fill="none"></polyline>';
        button.classList.add('copied');
        
        // Voltar ao ícone original após 2 segundos
        setTimeout(() => {
            icon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>';
            button.classList.remove('copied');
        }, 2000);
    } catch (err) {
        console.error('Erro ao copiar:', err);
    }
}

// Adicionar evento de click em todos os botões de copiar
document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.btn-copy-code');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', () => copyCodeBlock(button));
    });
});