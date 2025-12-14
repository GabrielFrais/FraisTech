#!/bin/sh
set -e

URL="https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64"
TMP_DEB="/tmp/vscode.deb"

command -v curl >/dev/null 2>&1 || {
    echo "curl não está instalado."
    exit 1
}

echo "Baixando VS Code..."
curl -L "$URL" -o "$TMP_DEB"

echo "Instalando..."
sudo apt install "$TMP_DEB"

echo "Limpando arquivos temporários..."
rm "$TMP_DEB"

echo "VS Code instalado com sucesso."
