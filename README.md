# Spotify Replica

Uma réplica do Spotify desenvolvida com React, Node.js e MongoDB.

## 🚀 Tecnologias

- **Frontend**
  - React
  - Vite
  - React Router DOM
  - Font Awesome
  - Axios

- **Backend**
  - Node.js
  - Express
  - MongoDB
  - CORS

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- MongoDB Atlas (ou MongoDB local)
- Git

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/VeigaGustavo/spotfyReplica.git
cd spotfyReplica
```

2. Instale as dependências do frontend:
```bash
npm install
```

3. Instale as dependências do backend:
```bash
cd back-end
npm install
```

4. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na pasta `back-end`:
   ```
   MONGODB_URI=sua_string_de_conexao_do_mongodb
   PORT=3000
   ```

## 🚀 Executando o Projeto

1. Inicie o backend:
```bash
cd back-end
npm run dev
```

2. Em outro terminal, inicie o frontend:
```bash
npm run dev
```

3. Acesse a aplicação em `http://localhost:5173`

## 📦 Deploy

O projeto está configurado para deploy em:

- **Backend**: Render.com
- **Frontend**: Vercel
- **Banco de Dados**: MongoDB Atlas

### Configuração do Deploy

1. **Backend (Render.com)**
   - Build Command: `cd back-end && npm install`
   - Start Command: `cd back-end && npm start`
   - Variáveis de ambiente:
     - `MONGODB_URI`
     - `PORT`

2. **Frontend (Vercel)**
   - Framework: Vite
   - Variáveis de ambiente:
     - `VITE_API_URL`

## 🛠️ Estrutura do Projeto

```
spotfyReplica/
├── back-end/
│   ├── api/
│   │   ├── connect.js
│   │   ├── server.js
│   │   └── insertMany.js
│   ├── node_modules/
│   ├── package.json
│   └── .env.example
├── front-end/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│   ├── api/
│   └── node_modules/
├── node_modules/
├── package.json
└── vite.config.js
```

## 📝 Funcionalidades

- Listagem de artistas
- Listagem de músicas
- Página de detalhes do artista
- Página de detalhes da música
- Player de áudio
- Navegação entre páginas

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Autor

- **Gustavo Veiga** - [VeigaGustavo](https://github.com/VeigaGustavo) 