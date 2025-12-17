const categories = [
    {
        id: "desenvolvimento",
        title: "Desenvolvimento",
        description: "Ferramentas para programação e desenvolvimento",
        apps: [
            {
                name: "Dev Toolbox",
                description: "Conjunto de ferramentas úteis para desenvolvedores em uma interface unificada.",
                install: "flatpak install flathub me.iepure.devtoolbox",
                type: "flatpak"
            },
            {
                name: "Git",
                description: "Sistema de controle de versão distribuído",
                install: "sudo apt install git",
                type: "apt"
            },
            {
                name: "Docker (Em Deselvolvimento)",
                description: "Plataforma para desenvolvimento, envio e execução de aplicativos em containers",
                install: "",
                type: ""
            },
            {
                name: "Visual Studio Code",
                description: "Editor de código poderoso e extensível com suporte para múltiplas linguagens",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_vscode.sh | sh",
                type: ".deb"
            }
        ]
    },
    {
        id: "comunicacao",
        title: "Comunicação",
        description: "Mensagens e videoconferência",
        apps: [
            {
                name: "Betterbird",
                description: "Cliente de e-mail baseado no Thunderbird com melhorias e correções extras.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_betterbird.sh | sh",
                type: "tar.xz"
            },
            {
                name: "Discord",
                description: "Plataforma de chat por texto, voz e vídeo para comunidades e equipes.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_discord.sh | sh",
                type: ".deb"
            },
            {
                name: "Vesktop",
                description: "Cliente Discord alternativo com foco em desempenho e recursos extras.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_vesktop.sh | sh",
                type: ".deb"
            },
        ]
    },
    {
        id: "integracao",
        title: "Integração",
        description: "EM DESENVOLVIMENTO",
        apps: [
            {
                name: "KDE Connect",
                description: "Integra o celular ao desktop para notificações, arquivos e controle remoto.",
                install: "sudo apt install kdeconnect",
                type: "apt"
            }
        ]
    },
    {
        id: "interface",
        title: "Interface",
        description: "EM DESENVOLVIMENTO",
        apps: [
            {
                name: "Conky",
                description: "Monitor de sistema altamente customizável que exibe informações na área de trabalho.",
                install: "sudo apt install conky",
                type: "apt"
            },
            {
                name: "ConkyManager2",
                description: "Interface gráfica para gerenciar temas e configurações do Conky.",
                install: `sudo add-apt-repository ppa:teejee2008/foss
sudo apt update
sudo apt install conky-manager2`,
                type: "apt"
            },
            {
                name: "Plank",
                description: "Dock simples e elegante para acesso rápido a aplicativos.",
                install: `sudo add-apt-repository ppa:ricotz/docky
sudo apt update
sudo apt install plank`,
                type: ""
            }
        ]
    },
    {
        id: "jogos",
        title: "Jogos",
        description: "EM DESENVOLVIMENTO",
        apps: [
            {
                name: "Lutris",
                description: "Gerenciador de jogos que integra Steam, GOG, Epic, emuladores e jogos Windows via Wine.",
                install: "flatpak install flathub net.lutris.Lutris",
                type: "flatpak"
            },
            {
                name: "PortProton",
                description: "Ferramenta para facilitar a execução de jogos Windows no Linux via Proton.",
                install: "flatpak install flathub ru.linux_gaming.PortProton",
                type: "flatpak"
            },
            {
                name: "ProntonPlus",
                description: "Gerenciador moderno de ferramentas de compatibilidade que permite alterar Proton, Wine e DXVK em múltiplos launchers, otimizando a execução de jogos Windows no Linux.",
                install: "flatpak install flathub com.vysp3r.ProtonPlus",
                type: "flatpak"
            },
            {
                name: "RetroArch",
                description: "Plataforma de emulação tudo-em-um para consoles clássicos, com suporte a múltiplos núcleos.",
                install: "flatpak install flathub org.libretro.RetroArch",
                type: "flatpak"
            },
            {
                name: "Steam",
                description: "Plataforma de distribuição e gerenciamento de jogos, com suporte nativo ao Linux.",
                install: "sudo apt install steam",
                type: "apt"
            }
        ]
    },
    {
        id: "multimidia",
        title: "Multimídia",
        description: "Edição e reprodução de mídia",
        apps: [
            {
                name: "Audacity",
                description: "Editor de áudio para gravação, edição e tratamento de som.",
                install: "sudo apt install audacity",
                type: "apt"
            },
            {
                name: "Curtail",
                description: "Aplicativo simples para compressão de imagens sem complicação.",
                install: "flatpak install flathub com.github.huluti.Curtail",
                type: "flatpak"
            },
            {
                name: "Darktable",
                description: "Fluxo de trabalho profissional para edição e organização de fotos RAW.<br><span class='alert'>GearLevel é necessário para o script funcionar.</span>",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_darktable.sh | sh",
                type: "AppImage"
            },
            {
                name: "GIMP",
                description: "Editor de imagens avançado, alternativa livre ao Photoshop.",
                install: "flatpak install flathub org.gimp.GIMP",
                type: "flatpak"
            },
            {
                name: "HandBrake",
                description: "Conversor de vídeo para diferentes formatos e dispositivos.",
                install: "flatpak install flathub fr.handbrake.ghb",
                type: "flatpak"
            },
            {
                name: "Kdenlive",
                description: "Editor de vídeo não linear completo para projetos profissionais.",
                install: "flatpak install flathub org.kde.kdenlive",
                type: "flatpak"
            },
            {
                name: "Plex",
                description: "Servidor de mídia para organizar e transmitir filmes, séries e músicas.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_plexmediaserver.sh | sh",
                type: ".deb"
            },
            {
                name: "Spotify",
                description: "Serviço de streaming de música com playlists e podcasts.",
                install: `curl -sS https://download.spotify.com/debian/pubkey_5384CE82BA52C83A.asc | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg &&
echo "deb https://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list &&
sudo apt-get update &&
sudo apt-get install -y spotify-client`,
                type: "apt"
            },
            {
                name: "Soundux",
                description: "Reprodutor de efeitos sonoros em tempo real para chamadas e streams.",
                install: "flatpak install flathub io.github.Soundux",
                type: "flatpak"
            },
            {
                name: "Stremio",
                description: "Player de vídeo que reproduz filmes e séries torrent",
                install: "flatpak install flathub com.stremio.Stremio",
                type: "flatpak"
            },
            {
                name: "VLC Media Player",
                description: "Player de vídeo que reproduz praticamente qualquer formato",
                install: "sudo apt install vlc",
                type: "apt"
            }
        ]
    },
    {
        id: "produtividade",
        title: "Produtividade",
        description: "Aplicativos para aumentar sua produtividade",
        apps: [
            {
                name: "LibreOffice",
                description: "Suíte office completa para textos, planilhas, apresentações e mais.",
                install: "sudo apt install libreoffice",
                type: "apt"
            },
            {
                name: "Joplin",
                description: "Aplicativo de anotações com suporte a Markdown, sincronização e criptografia ponta a ponta.<br><span class='alert'>GearLevel é necessário para o script funcionar.</span>",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_joplin.sh | sh",
                type: "AppImage"
            },
            {
                name: "Obsidian (Em Deselvolvimento)",
                description: "Aplicativo de anotações em Markdown com gráfico de conhecimento",
                install: "",
                type: ""
            },
            {
                name: "ONLYOFFICE",
                description: "Suíte office completa para criar e editar documentos de texto, planilhas e apresentações.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_onlyoffice.sh | sh",
                type: ".deb"
            },
            {
                name: "Okular",
                description: "Visualizador de documentos que suporta PDF, EPUB, DJVU e outros formatos.",
                install: "sudo apt install okular",
                type: "apt"
            }
        ]
    },
    {
        id: "rede",
        title: "Rede",
        description: "EM DESENVOLVIMENTO",
        apps: [
            {
                name: "LocalSend",
                description: "Compartilhamento de arquivos entre dispositivos na mesma rede, sem internet.",
                install: "flatpak install flathub org.localsend.localsend_app",
                type: "flatpak"
            },
            {
                name: "qBittorrent",
                description: "Cliente BitTorrent leve, rápido e sem anúncios.",
                install: `sudo add-apt-repository ppa:qbittorrent-team/qbittorrent-stable
sudo apt update
sudo apt install qbittorrent`,
                type: "apt"
            }
        ]
    },
    {
        id: "utilitarios",
        title: "Utilitários",
        description: "EM DESENVOLVIMENTO",
        apps: [
            {
                name: "CopyQ",
                description: "Gerenciador avançado de área de transferência com histórico, busca e scripts.",
                install: `sudo add-apt-repository ppa:hluk/copyq
sudo apt update
sudo apt install copyq`,
                type: "apt"
            },
            {
                name: "Espanso",
                description: "Expansor de texto que substitui atalhos por frases completas automaticamente.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_espanso.sh | sh",
                type: ".deb"
            },
            {
                name: "FSearch",
                description: "Ferramenta de busca ultrarrápida de arquivos no sistema.",
                install: `sudo add-apt-repository ppa:christian-boxdoerfer/fsearch-stable
sudo apt update
sudo apt install fsearch`,
                type: "apt"
            },
            {
                name: "PeaZip",
                description: "Compactador e descompactador de arquivos com suporte a diversos formatos.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_peazip.sh | sh",
                type: ".deb"
            },
        ]
    },
    {
        id: "sistema",
        title: "Sistema",
        description: "EM DESENVOLVIMENTO",
        apps: [
            {
                name: "Flatseal",
                description: "Gerencie as permissões de Flatpaks",
                install: "flatpak install flathub io.github.flattool.Warehouse",
                type: "flatpak"
            },
            {
                name: "Gear Lever",
                description: "Gerenciador de AppImages que facilita instalar, atualizar, integrar ao sistema e remover aplicativos nesse formato.",
                install: "flatpak install flathub it.mijorus.gearlever",
                type: "flatpak"
            },
            {
                name: "Mission Center",
                description: "Monitorar o uso de recursos do sistema",
                install: "flatpak install flathub io.missioncenter.MissionCenter",
                type: "flatpak"
            },
            {
                name: "OneDriver (Ubuntu 22.04)",
                description: "Cliente não oficial do OneDrive para Linux com sincronização local.",
                install: "curl -sL https://raw.githubusercontent.com/GabrielFrais/FraisTech/main/install_scripts/install_onedriver.sh | sh",
                type: ".deb"
            },
            {
                name: "Warehouse",
                description: "Gerencie tudo relacionado a Flatpak",
                install: "flatpak install flathub com.github.tchx84.Flatseal",
                type: "flatpak"
            },
            {
                name: "WinBoat",
                description: "Ferramenta para executar e gerenciar aplicações Windows no Linux.",
                install: "",
                type: ""
            }
        ]
    }
];