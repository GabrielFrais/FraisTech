#!/bin/sh
set -e

# Cores
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
RED="\033[1;31m"
RESET="\033[0m"

# Definindo Variaveis
NOME="vesktop"
TMP_DEB="/tmp/${NOME}.deb"
REPO="Vencord/Vesktop"
ARCH="amd64"

# Pega a URL do último release
URL=$(curl -s https://api.github.com/repos/$REPO/releases/latest \
  | grep browser_download_url \
  | grep $ARCH.deb \
  | cut -d '"' -f 4)

# Baixa o arquivo
printf "${YELLOW}Baixando %s...${RESET}\n" "$NOME"
curl -L "$URL" -o "$TMP_DEB"

# Instala
printf -e "${YELLOW}Instalando...${RESET}"
sudo apt install "$TMP_DEB"

# Apaga arquivo temporario
printf -e "${YELLOW}Limpando arquivos temporários...${RESET}"
rm "$TMP_DEB"

printf "${GREEN}%s instalado com sucesso! 🎉${RESET}\n" "$NOME"