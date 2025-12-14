const scriptsData = [
    {
        name: "Sistema Limpo (MEXER)",
        description: "Remove pacotes desnecessários e limpa o cache do sistema",
        file: "clean-system.sh",
        code: `#!/bin/bash
    sudo apt autoremove -y
    sudo apt autoclean
    sudo apt clean`
    },
    {
        name: "Backup Automático (MEXER)",
        description: "Cria backup de diretórios importantes para o Home",
        file: "backup.sh",
        code: `#!/bin/bash
    tar -czf ~/backup-$(date +%Y%m%d).tar.gz ~/Documents ~/Pictures`
    },
    {
        name: "Atualização do Sistema (MEXER)",
        description: "Atualiza todos os pacotes e o sistema operacional",
        file: "update-system.sh",
        code: `#!/bin/bash
    sudo apt update && sudo apt upgrade -y
    sudo snap refresh`
    }
];
