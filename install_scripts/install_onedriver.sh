#!/bin/sh
set -e

# Cores
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
RED="\033[1;31m"
RESET="\033[0m"

# Definindo Variaveis
NOME="onedriver"
TMP_DEB="/tmp/${NOME}.deb"

# Pega a URL do último release
URL="https://download.opensuse.org/repositories/home:/jstaf/xUbuntu_22.04/amd64/onedriver_0.14.1-1_amd64.deb"

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