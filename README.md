# Ambient Music Manager

Um aplicativo estilo Netflix para centralizar músicas e sons ambiente do YouTube, organizados por categorias para sessões de trabalho ou estudos.

## 📋 Sobre o Projeto

O Ambient Music Manager é uma plataforma que permite aos usuários explorar e descobrir vídeos de músicas e sons ambientes hospedados no YouTube, organizados em categorias como Chuva, Noise, Chill, Deep Focus e Work Music.

## ✨ Features

- **Listagem por Categorias**: Visualize vídeos organizados em seções temáticas
  - 🌧️ Chuva
  - 🎵 Noise
  - 🎧 Chill
  - 🧠 Deep Focus
  - 💼 Work Music
- **Filtro por Nome**: Busque vídeos específicos pelo nome ou canal
- **Integração com YouTube**: Acesso direto aos vídeos através de links

## 🚀 Tecnologias

- Node.js
- TypeScript
- HTTP nativo (sem frameworks)

## 📡 API

### Endpoints

#### `GET /api/list`

Lista todos os vídeos disponíveis com suas informações.

**Resposta:**

```json
[
  {
    "channelName": "Chill Cartoon Vibes",
    "videoName": "It's cold, I know, Get some rest, traveler",
    "videId": "0HwoWDLWPA4",
    "coverImage": "https://i.ytimg.com/vi/0HwoWDLWPA4/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=0HwoWDLWPA4",
    "category": ["chill", "música"]
  }
]
```

#### `GET /api/channel?c={nomeDoCanal}`

Filtra vídeos baseado no nome do vídeo ou canal.

**Parâmetros:**

- `channelName` (query string): Nome do canal para filtrar os vídeos

**Resposta:**

```json
[
  {
    "channelName": "Obsidian Soundfields",
    "videoName": "082 // Wind Spine",
    "videId": "RpIxHX5wPpw",
    "coverImage": "https://i.ytimg.com/vi/RpIxHX5wPpw/maxresdefault.jpg",
    "link": "https://www.youtube.com/watch?v=RpIxHX5wPpw",
    "category": ["ambiente", "chill"]
  }
]
```

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Pedro-Andre/Ambient-Music-Manager.git

# Entre no diretório do projeto
cd ambient-music-manager

# Instale as dependências
npm install

# Inicie o servidor
npm start:dev
```

## 🎯 Como Usar

1. Inicie o servidor
2. Acesse os endpoints disponíveis:
   - Liste todos os vídeos: `http://localhost:3333/api/list`
   - Filtre por nome do canal: `http://localhost:3333/api/channel?c=Blume`

---

Desenvolvido com ☕ para ajudar na produtividade e foco
