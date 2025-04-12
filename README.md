# Spotify Replica 🎵

Este é um projeto de réplica do Spotify, desenvolvido com React no frontend e Node.js + Express no backend. O objetivo é recriar as principais funcionalidades do Spotify, como visualização de artistas, músicas e reprodução de áudio.

## ✨ Funcionalidades

- **Página Inicial**: Exibe os artistas mais populares
- **Página de Artista**: Mostra detalhes do artista e suas músicas
- **Página de Música**: Permite reproduzir a música selecionada
- **Player de Áudio**: Controles básicos de reprodução (play/pause, volume)
- **Design Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Tema Escuro**: Interface com tema escuro inspirado no Spotify

## 🎨 Interface

A interface foi desenvolvida com foco na experiência do usuário, mantendo a estética do Spotify original:
- Navegação intuitiva
- Cards de artistas e músicas
- Player de áudio integrado
- Animações suaves
- Ícones e elementos visuais familiares

## 🛠️ Tecnologias

### Frontend
- **React**: Biblioteca JavaScript para construção de interfaces
- **Vite**: Build tool e servidor de desenvolvimento
- **Tailwind CSS**: Framework CSS para estilização
- **Axios**: Cliente HTTP para requisições à API
- **React Router**: Gerenciamento de rotas
- **React Icons**: Biblioteca de ícones

### Backend
- **Node.js**: Ambiente de execução JavaScript
- **Express**: Framework web para Node.js
- **MongoDB**: Banco de dados NoSQL
- **Mongoose**: ODM para MongoDB
- **Cors**: Middleware para permitir requisições cross-origin

## 📦 Estrutura do Projeto

```
spotfy-replica/
├── back-end/
│   ├── api/
│   │   ├── connect.js      # Conexão com MongoDB
│   │   └── routes/         # Rotas da API
│   ├── server.js           # Servidor Express
│   └── package.json        # Dependências do backend
├── front-end/
│   ├── src/
│   │   ├── assets/         # Imagens e ícones
│   │   ├── components/     # Componentes React
│   │   ├── pages/          # Páginas da aplicação
│   │   └── App.jsx         # Componente principal
│   └── package.json        # Dependências do frontend
└── README.md               # Documentação
```

## 🚀 Como Usar

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MongoDB Atlas (conta gratuita)
- Conta no Render (para deploy do backend)
- Conta no Vercel (para deploy do frontend)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/spotfy-replica.git
cd spotfy-replica
```

2. Instale as dependências do backend:
```bash
cd back-end
npm install
```

3. Instale as dependências do frontend:
```bash
cd front-end
npm install
```

### Configuração

1. Configure o MongoDB Atlas:
   - Crie um cluster gratuito
   - Configure o acesso à rede
   - Crie um usuário de banco de dados
   - Obtenha a string de conexão

2. Configure as variáveis de ambiente:
   - Backend: `MONGODB_URI`
   - Frontend: `VITE_API_URL`

### Desenvolvimento

1. Inicie o backend:
```bash
cd back-end
npm run dev
```

2. Inicie o frontend:
```bash
cd front-end
npm run dev
```

### Deploy

1. Backend no Render:
   - Configure a variável `MONGODB_URI`
   - Deploy automático com GitHub

2. Frontend no Vercel:
   - Configure a variável `VITE_API_URL`
   - Deploy automático com GitHub

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estes passos:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✨ Autor

- **Gustavo Antunes** - [GitHub](https://github.com/gustavoantunes)

## 🙏 Agradecimentos

- Equipe do Spotify pela inspiração
- Comunidade React e Node.js
- MongoDB Atlas pelo serviço gratuito
- Render e Vercel pelo hosting 
