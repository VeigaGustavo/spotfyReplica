# Spotify Replica

Este é um projeto de réplica do Spotify, desenvolvido com React no frontend e Node.js + Express no backend.

## Configuração do MongoDB Atlas

1. Acesse [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crie uma conta ou faça login
3. Crie um novo cluster (gratuito)
4. Configure o acesso à rede:
   - Clique em "Network Access"
   - Adicione seu IP ou permita acesso de qualquer lugar (0.0.0.0/0)
5. Crie um usuário de banco de dados:
   - Clique em "Database Access"
   - Adicione um novo usuário
   - Anote o nome de usuário e senha
6. Obtenha a string de conexão:
   - Clique em "Connect"
   - Escolha "Connect your application"
   - Copie a string de conexão
   - Substitua `<password>` pela senha do usuário criado

## Configuração do Backend

1. Configure a variável de ambiente no Render:
   - Acesse https://dashboard.render.com
   - Clique no seu serviço do backend
   - Clique em "Environment"
   - Adicione a variável:
     ```
     MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/spotfyReplica
     ```
     (Substitua <username> e <password> pelos dados do seu usuário MongoDB)

2. Faça o deploy do backend:
   ```bash
   cd back-end
   git add .
   git commit -m "chore: update environment variables"
   git push
   ```

## Configuração do Frontend

1. Configure a variável de ambiente no Vercel:
   - Acesse https://vercel.com/dashboard
   - Clique no projeto `spotfy-replica-frontend`
   - Clique em "Settings"
   - Clique em "Environment Variables"
   - Adicione a variável:
     ```
     VITE_API_URL=https://seu-backend.onrender.com
     ```
     (Substitua pela URL do seu backend no Render)

2. Faça o deploy do frontend:
   ```bash
   cd front-end
   vercel --prod
   ```

## Rodando Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/spotfy-replica.git
   cd spotfy-replica
   ```

2. Configure o backend:
   ```bash
   cd back-end
   npm install
   ```

3. Configure o frontend:
   ```bash
   cd front-end
   npm install
   ```

4. Crie um arquivo `.env` no backend:
   ```
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/spotfyReplica
   ```

5. Crie um arquivo `.env` no frontend:
   ```
   VITE_API_URL=http://localhost:3000
   ```

6. Inicie o backend:
   ```bash
   cd back-end
   npm run dev
   ```

7. Inicie o frontend:
   ```bash
   cd front-end
   npm run dev
   ```

## Estrutura do Projeto

```
spotfy-replica/
├── back-end/
│   ├── api/
│   │   ├── connect.js
│   │   └── routes/
│   ├── server.js
│   └── package.json
├── front-end/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## Tecnologias Utilizadas

- Frontend:
  - React
  - Vite
  - Tailwind CSS
  - Axios

- Backend:
  - Node.js
  - Express
  - MongoDB
  - Mongoose

## Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

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
│   │   └── routes/
│   ├── server.js
│   └── package.json
├── front-end/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   └── App.jsx
│   └── package.json
└── README.md
```

## 📝 Funcionalidades

- Listagem de artistas
- Listagem de músicas
- Página de detalhes do artista
- Página de detalhes da música
- Player de áudio
- Navegação entre páginas

## ✨ Autor

- **Gustavo Veiga** - [VeigaGustavo](https://github.com/VeigaGustavo) 