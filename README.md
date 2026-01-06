# Ambient Music Manager

### Descrição

Um app estilo Netflix, a onde possa centralizar diferentes tipos de músicas e sons ambiente para seções de trabalho ou estudos, que serão separados por categoria.

### Domínio

Sons ambientes disponíveis no Youtube

### Features

- Listar os vídeos de música e sons ambients em seções de categoria
  - Chuva, Noise, Chill, Deep Focus, Work Music
- Filtrar os vídeos por nome

## Como

#### Feature:

Listar os vídeos em seções de categoria

### Implementação

- Retorno em API Rest (JSON):
  - Nome do canal
  - Nome do vídeo
  - Imagem de capa
  - Link do vídeo
  - Categoria

```js
[
{
  podcastName: "Chill Cartoon Vibes",
  episode: "It's cold, I know, Get some rest, traveler",
  videId: "0HwoWDLWPA4",
  coverImage: "https://i.ytimg.com/vi/0HwoWDLWPA4/maxresdefault.jpg",
  link: "https://www.youtube.com/watch?v=0HwoWDLWPA4"
  category: ["chill", "música"]
},
{
  podcastName: "Obsidian Soundfields",
  episode: "082 // Wind Spine",
  videId: "RpIxHX5wPpw",
  coverImage: "https://i.ytimg.com/vi/RpIxHX5wPpw/maxresdefault.jpg"
  link: "https://www.youtube.com/watch?v=RpIxHX5wPpw"
  category: ["ambiente", "chill"]
}
]
```
