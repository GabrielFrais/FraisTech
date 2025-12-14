#!/bin/sh
set -e

# Cores
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
RED="\033[1;31m"
RESET="\033[0m"

URL="https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64"
TMP_DEB="/tmp/vscode.deb"

echo -e "${YELLOW}Baixando VS Code...${RESET}"
curl -L "$URL" -o "$TMP_DEB"

echo -e "${YELLOW}Instalando...${RESET}"
sudo apt install "$TMP_DEB"

echo -e "${YELLOW}Limpando arquivos temporários...${RESET}"
rm "$TMP_DEB"

echo -e "${GREEN}VS Code instalado com sucesso! 🎉${RESET}"
