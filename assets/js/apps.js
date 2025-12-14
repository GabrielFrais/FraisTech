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
            <div class="card-title-wrapper">
                <h3 class="card-title">${app.name}</h3>
                <span class="install-type">${app.type}</span>
            </div>
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
    
    const copyButton = card.querySelector('.btn-copy');
    copyButton.addEventListener('click', () => copyToClipboard(app.install, copyButton));
    
    return card;
}

// Função para criar navegação de categorias
function createCategoryNav() {
    const divNav = document.createElement('div');
    divNav.className = 'nav-wrapper';

    const nav = document.createElement('nav');
    nav.className = 'category-nav';

    divNav.appendChild(nav);
    
    const navList = document.createElement('div');
    navList.className = 'category-nav-list';
    
    categories.forEach(category => {
        const link = document.createElement('a');
        link.href = `#${category.id}`;
        link.className = 'category-nav-link';
        link.textContent = category.title;
        navList.appendChild(link);
    });
    
    nav.appendChild(navList);
    return divNav;
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

// Renderizar categorias
function renderCategories() {
    const container = document.getElementById('categories-container');
    
    // Adicionar navegação de categorias antes dos apps
    container.appendChild(createCategoryNav());
    
    // Adicionar todas as seções
    categories.forEach(category => {
        container.appendChild(createCategorySection(category));
    });
}

// Inicializar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
});