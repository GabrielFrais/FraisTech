// Função para copiar texto para clipboard
async function copyToClipboard(text, button) {
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

// Função para criar card de app
function createAppCard(app) {
    const card = document.createElement('div');
    card.className = 'app-card';
    
    card.innerHTML = `
        <div class="card-header">
            <h3 class="card-title">${app.name}</h3>
            <p class="card-description">${app.description}</p>
        </div>
        <div class="card-content">
            <span class="install-label">Instalação</span>
            <div class="install-command">
                <code class="command-code">${app.install}</code>
                <button class="btn-copy" aria-label="Copiar comando">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    // Adicionar evento de click no botão de copiar
    const copyButton = card.querySelector('.btn-copy');
    copyButton.addEventListener('click', () => copyToClipboard(app.install, copyButton));
    
    return card;
}

// Função para criar seção de categoria
function createCategorySection(category) {
    const section = document.createElement('section');
    section.id = category.id;
    section.className = 'category-section';
    
    const header = document.createElement('div');
    header.className = 'section-header';
    header.innerHTML = `
        <h2 class="section-title">${category.title}</h2>
        <p class="section-description">${category.description}</p>
    `;
    
    const grid = document.createElement('div');
    grid.className = 'cards-grid';
    
    category.apps.forEach(app => {
        grid.appendChild(createAppCard(app));
    });
    
    section.appendChild(header);
    section.appendChild(grid);
    
    return section;
}

// Função para criar card de script
function createScriptCard(script) {
    const card = document.createElement('div');
    card.className = 'script-card';
    
    const downloadUrl = `data:text/plain;charset=utf-8,${encodeURIComponent(script.code)}`;
    
    card.innerHTML = `
        <div class="script-header">
            <h3 class="script-title">${script.name}</h3>
            <a href="${downloadUrl}" download="${script.file}" class="btn-download">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download
            </a>
        </div>
        <p class="script-description">${script.description}</p>
        <div class="code-block">
            <pre><code>${script.code}</code></pre>
        </div>
        <p class="script-note">
            Torne o script executável: <code>chmod +x ${script.file}</code>
        </p>
    `;
    
    return card;
}

// Renderizar categorias
function renderCategories() {
    const container = document.getElementById('categories-container');
    categories.forEach(category => {
        container.appendChild(createCategorySection(category));
    });
}

// Renderizar scripts
function renderScripts() {
    const container = document.getElementById('scripts-container');
    scripts.forEach(script => {
        container.appendChild(createScriptCard(script));
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderScripts();
});