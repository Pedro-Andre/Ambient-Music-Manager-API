# Ambient Music Manager API

Uma API REST para centralizar e organizar vídeos de músicas e sons ambiente do YouTube, categorizados para sessões de trabalho ou estudo.

## 📋 Sobre o Projeto

O Ambient Music Manager é uma API que expõe dados de vídeos de músicas e sons ambientes hospedados no YouTube, organizados em categorias como Chuva, Noise, Chill, Deep Focus e Work Music. A API pode ser consumida por qualquer cliente — web, mobile ou desktop.

## ✨ Categorias Disponíveis

- 🌧️ Chuva
- 🎵 Noise
- 🎧 Chill
- 🧠 Deep Focus
- 💼 Work Music

## 🚀 Tecnologias

- Node.js
- TypeScript
- HTTP nativo (sem frameworks)

## 🛠️ Instalação

```bash
# Clone o repositório
git clone https://github.com/Pedro-Andre/Ambient-Music-Manager.git

# Entre no diretório do projeto
cd ambient-music-manager

# Instale as dependências
npm install

# Inicie o servidor em modo de desenvolvimento
npm run start:dev
```

O servidor estará disponível em `http://localhost:3333`.

## 📡 Endpoints

### `GET /api/list`

Retorna todos os vídeos cadastrados com suas informações.

**Exemplo de resposta:**

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

---

### `GET /api/channel?c={nomeDoCanal}`

Filtra vídeos pelo nome do canal ou do vídeo.

**Parâmetros de query:**

| Parâmetro | Tipo   | Descrição                              |
|-----------|--------|----------------------------------------|
| `c`       | string | Nome do canal ou vídeo para filtrar    |

**Exemplo de requisição:**

```
GET http://localhost:3333/api/channel?c=Blume
```

**Exemplo de resposta:**

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

## 📦 Schema do Objeto de Vídeo

| Campo         | Tipo       | Descrição                                      |
|---------------|------------|------------------------------------------------|
| `channelName` | `string`   | Nome do canal no YouTube                       |
| `videoName`   | `string`   | Título do vídeo                                |
| `videId`      | `string`   | ID do vídeo no YouTube                         |
| `coverImage`  | `string`   | URL da thumbnail do vídeo                      |
| `link`        | `string`   | URL completa do vídeo no YouTube               |
| `category`    | `string[]` | Lista de categorias às quais o vídeo pertence  |

---

Desenvolvido com ☕ para ajudar na produtividade e foco.
