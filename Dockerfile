FROM node:18-alpine

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o restante do projeto
COPY . .

# Expõe a porta usada pelo Next.js
EXPOSE 3000

# Comando padrão de desenvolvimento
CMD ["npm", "run", "dev"]
