# NLW Agents - Web

Projeto desenvolvido durante o evento **NLW-AGENTS** da Rocketseat, uma aplicação web moderna construída com React e TypeScript para gerenciamento de salas.

## 🚀 Tecnologias

### Core
- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Superset do JavaScript com tipagem estática
- **Vite** - Build tool e dev server ultra-rápido

### Roteamento e Estado
- **React Router DOM** - Roteamento client-side
- **TanStack Query (React Query)** - Gerenciamento de estado servidor e cache

### Estilização
- **Tailwind CSS 4** - Framework CSS utility-first
- **shadcn/ui** - Componentes UI reutilizáveis
- **Radix UI** - Primitivos de UI acessíveis
- **Lucide React** - Biblioteca de ícones
- **Class Variance Authority** - Utilitário para variantes de classes CSS

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatter moderno
- **Ultracite** - Configuração base para Biome

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/              # Componentes shadcn/ui
├── lib/
│   └── utils.ts         # Utilitários (cn function)
├── pages/
│   ├── create-room.tsx  # Página de listagem/criação de salas
│   └── room.tsx         # Página da sala individual
├── app.tsx              # Componente principal com roteamento
├── main.tsx             # Entry point da aplicação
├── index.css            # Estilos globais e tema
└── vite-env.d.ts        # Tipos do Vite
```

## 🎨 Padrões de Projeto

### Arquitetura
- **Component-Based Architecture** - Componentes reutilizáveis e modulares
- **Client-Side Routing** - Navegação SPA com React Router
- **Server State Management** - TanStack Query para cache e sincronização

### Estilização
- **Design System** - shadcn/ui com tema customizável
- **Utility-First CSS** - Tailwind CSS para estilização rápida
- **CSS Variables** - Sistema de cores e tokens de design

### Qualidade de Código
- **TypeScript** - Tipagem estática para maior segurança
- **Biome** - Linting e formatação consistente
- **Component Composition** - Padrão de composição com Radix UI

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd web
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o ambiente:
   - Certifique-se de que a API esteja rodando em `http://localhost:3000`

### Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

### Configurações

#### Tailwind CSS
- Configurado com CSS Variables para temas
- Integração com shadcn/ui
- Suporte a dark mode

#### shadcn/ui
- Estilo: New York
- Base color: Zinc
- Ícones: Lucide React
- CSS Variables habilitadas

#### Biome
- Extends: ultracite
- Semicolons: as needed
- Formatação automática

## 🌐 Funcionalidades

- **Listagem de Salas** - Visualização de salas disponíveis
- **Navegação entre Salas** - Roteamento dinâmico
- **Interface Responsiva** - Design adaptável
- **Loading States** - Estados de carregamento com TanStack Query

## 🔗 API Integration

A aplicação consome uma API REST em `http://localhost:3000` com os seguintes endpoints:

- `GET /rooms` - Lista todas as salas disponíveis

## 📝 Desenvolvimento

Este projeto foi desenvolvido seguindo as melhores práticas modernas de desenvolvimento React, com foco em:

- Performance otimizada com Vite
- Experiência de desenvolvimento aprimorada
- Código limpo e bem estruturado
- Componentes reutilizáveis e acessíveis

---

Desenvolvido com ❤️ durante o **NLW-AGENTS** da [Rocketseat](https://rocketseat.com.br)