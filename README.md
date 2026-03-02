# ARBSV - Associação Regional de Basquetebol de São Vicente

Website oficial da Associação Regional de Basquetebol de São Vicente. Um projeto web moderno e responsivo para divulgação de competições de basquetebol regional.

## 🏀 Sobre o Projeto

Este projeto é um site de gestão e divulgação de competições de basquetebol na região de São Vicente, Cabo Verde. O objetivo é fornecer uma plataforma moderna paravisualização de resultados, classificações, estatísticas de jogadores e informações sobre os torneios.

## 📁 Estrutura do Projeto

```
arbsv/
├── index.html  # Página principal (Home)
├── basketballpages/
│   ├── abertura.html       # Página do Torneio de Abertura
│   └── Campeonato.html    # Página do Campeonato Regional
├── styles.css         # Estilos globais
├── TODO.md            # Lista de tarefas
├── commit-message.txt # Mensagem de commit
├── src/
│   ├── css/
│   │   ├── styles.css       # Estilos principais
│   │   └── tournament.css    # Estilos das páginas de torneios
│   ├── js/
│   │   ├── abertura.js       # Lógica da página de abertura
│   │   └── team-data-loader.js
│   └── data/
│       ├── teams-all.js
│       ├── games-abertura.js
│       └── TorneioAbertura/
│           ├── Senior/
│           │   ├── atlético.js
│           │   └── real-sociedade.js
│           └── Sub18/
│               ├── atlético.js
│               ├── cruzeiros.js
│               ├── la-familia.js
│               ├── real-sociedade.js
│               ├── todos-blacks.js
│               └── académica.js
```

## 🎨 Design

- **Cores Principais**: Laranja (#FF6B00) e Preto (#1A1A1A)
- **Tipografia**: Oswald (títulos) e Montserrat (corpo)
- **Layout**: Responsivo (Mobile, Tablet, Desktop)
- **Estilo**: Moderno, dinâmico e desportivo

## ✨ Funcionalidades

### Página Principal (index.html)

- Secção Hero com imagem de fundo e estatísticas
- Secção do Campeonato Atual com equipas participantes
- Jogos e Resultados com filtros
- Tabela de Classificação
- Melhores Jogadores
- Modal para detalhes dos jogos

### Página Torneio de Abertura (basketballpages/abertura.html)

- Selector de categoria (Senior / Sub-18)
- Jogos separados por rondas
- Classificação por grupos
- Sistema de eliminatórias

### Página Campeonato (basketballpages/Campeonato.html)

- Selector de categoria (Senior / Sub-18)
- Temporada Regular
- Playoffs com sistema de eliminatórias
- Classificação detalhada

## 🚀 Como Executar

1. Clone o repositório
2. Abra o arquivo `index.html` no navegador web

```
bash
# Ou simplesmente abra no navegador
index.html
```

## 📋 Categorias

- **Senior**: Equipas adultas (6 equipas em 2 grupos)
- **Sub-18**: Equipas de sub-18 (3 equipas - round robin)

## 🔧 Tecnologias

- HTML5
- CSS3 (Variáveis CSS, Flexbox, Grid)
- JavaScript (Vanilla)
- Google Fonts (Oswald, Montserrat)

## 📝 License

Este projeto é para fins educativos e de demonstração.
