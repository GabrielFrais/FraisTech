const categories = [
    {
        id: "desenvolvimento",
        title: "Desenvolvimento",
        description: "Ferramentas para programação e desenvolvimento",
        apps: [
            {
                name: "Visual Studio Code",
                description: "Editor de código poderoso e extensível com suporte para múltiplas linguagens",
                install: "curl -L https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64 -o vscode.deb && sudo apt install ./vscode.deb"
            },
            {
                name: "Git",
                description: "Sistema de controle de versão distribuído",
                install: "sudo apt install git"
            },
            {
                name: "Docker",
                description: "Plataforma para desenvolvimento, envio e execução de aplicativos em containers",
                install: "curl -fsSL https://get.docker.com -o get-docker.sh && sh get-docker.sh"
            }
        ]
    },
    {
        id: "produtividade",
        title: "Produtividade",
        description: "Aplicativos para aumentar sua produtividade",
        apps: [
            {
                name: "Obsidian",
                description: "Aplicativo de anotações em Markdown com gráfico de conhecimento",
                install: "sudo snap install obsidian --classic"
            },
            {
                name: "Notion",
                description: "Espaço de trabalho tudo-em-um para anotações e colaboração",
                install: "sudo snap install notion-snap-reborn"
            },
            {
                name: "Bitwarden",
                description: "Gerenciador de senhas open source",
                install: "sudo snap install bitwarden"
            }
        ]
    },
    {
        id: "multimidia",
        title: "Multimídia",
        description: "Edição e reprodução de mídia",
        apps: [
            {
                name: "VLC Media Player",
                description: "Player de vídeo que reproduz praticamente qualquer formato",
                install: "sudo apt install vlc"
            },
            {
                name: "GIMP",
                description: "Editor de imagens open source similar ao Photoshop",
                install: "sudo apt install gimp"
            },
            {
                name: "OBS Studio",
                description: "Software de gravação e streaming de vídeo",
                install: "sudo apt install obs-studio"
            }
        ]
    },
    {
        id: "comunicacao",
        title: "Comunicação",
        description: "Mensagens e videoconferência",
        apps: [
            {
                name: "Discord",
                description: "Plataforma de comunicação para comunidades",
                install: "sudo snap install discord"
            },
            {
                name: "Slack",
                description: "Plataforma de comunicação para equipes",
                install: "sudo snap install slack"
            },
            {
                name: "Telegram",
                description: "Mensageiro instantâneo focado em velocidade e segurança",
                install: "sudo snap install telegram-desktop"
            }
        ]
    }
];

const scripts = [
    {
        name: "Sistema Limpo",
        description: "Remove pacotes desnecessários e limpa o cache do sistema",
        file: "clean-system.sh",
        code: `#!/bin/bash
sudo apt autoremove -y
sudo apt autoclean
sudo apt clean`
    },
    {
        name: "Backup Automático",
        description: "Cria backup de diretórios importantes para o Home",
        file: "backup.sh",
        code: `#!/bin/bash
tar -czf ~/backup-$(date +%Y%m%d).tar.gz ~/Documents ~/Pictures`
    },
    {
        name: "Atualização do Sistema",
        description: "Atualiza todos os pacotes e o sistema operacional",
        file: "update-system.sh",
        code: `#!/bin/bash
sudo apt update && sudo apt upgrade -y
sudo snap refresh`
    }
];