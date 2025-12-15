const scriptsData = [
    {
        name: "OCR Screenshot",
        description: "Script para capturar parte da tela, extrair texto com OCR e copiar para a área de transferência.<br>É preciso baixar <code>maim tesseract-ocr tesseract-ocr-por xclip libnotify-bin</code>",
        file: "ocr-screenshot.sh",
        code: `#!/bin/bash

IMG_FILE=$(mktemp /tmp/ocr-img-XXXXXX.png)

maim -s "$IMG_FILE"

if [ -s "$IMG_FILE" ]; then
    TEXT=$(tesseract "$IMG_FILE" - -l por)
    echo "$TEXT" | xclip -selection clipboard
    notify-send "OCR concluído!" "Texto copiado para a área de transferência."
else
    notify-send "OCR cancelado" "Nenhuma área foi selecionada."
fi

rm "$IMG_FILE"`
    },
    {
        name: "Backup Automático (Em Deselvolvimento)",
        description: "Cria backup de diretórios importantes para o Home",
        file: "backup.sh",
        code: `#!/bin/bash
    tar -czf ~/backup-$(date +%Y%m%d).tar.gz ~/Documents ~/Pictures`
    },
    {
        name: "Atualização do Sistema (Em Deselvolvimento)",
        description: "Atualiza todos os pacotes e o sistema operacional",
        file: "update-system.sh",
        code: `#!/bin/bash
    sudo apt update && sudo apt upgrade -y
    sudo snap refresh`
    }
];
