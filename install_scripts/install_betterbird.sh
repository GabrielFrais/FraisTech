#!/bin/sh
set -e

# Cores
GREEN="\033[1;32m"
YELLOW="\033[1;33m"
RED="\033[1;31m"
RESET="\033[0m"

# Definindo Variaveis
NOME="betterbird"
TMP_TAR="/tmp/$NOME.tar.xz"
TMP_DIR="/tmp/$NOME"
URL="https://www.betterbird.eu/downloads/get.php?os=linux&lang=pt-BR&version=release"

# Criar diretório temporário
mkdir -p "$TMP_DIR"

# Baixar o arquivo
printf "${YELLOW}Baixando %s...${RESET}\n" "$NOME"
curl -L "$URL" -o "$TMP_TAR"

# Descompactar
printf "${YELLOW}Descompactando...${RESET}\n"
tar -xvf "$TMP_TAR" -C "$TMP_DIR" --strip-components=1

# Mover para /opt
printf "${YELLOW}Instalando...${RESET}\n"
sudo mv "$TMP_DIR" "/opt/$NOME"

# Apagando arquivos compactado
printf "${YELLOW}Limpando arquivos temporários...${RESET}\n"
rm -f "$TMP_TAR"

printf "${GREEN}%s instalado com sucesso! 🎉${RESET}\n" "$NOME"