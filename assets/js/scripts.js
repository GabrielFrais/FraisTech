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

function renderScripts() {
    const container = document.getElementById('scripts-container');
    scriptsData.forEach(script => {
        container.appendChild(createScriptCard(script));
    });
}

document.addEventListener('DOMContentLoaded', renderScripts);
