# NLW Agents - Server

Projeto desenvolvido durante o evento **NLW-AGENTS** da [Rocketseat](https://rocketseat.com.br), focado na criação de uma API robusta utilizando tecnologias modernas do ecossistema Node.js.

## 🚀 Tecnologias

### Core
- **Node.js 22** - Runtime JavaScript com suporte nativo ao TypeScript
- **TypeScript** - Tipagem estática para JavaScript
- **Fastify** - Framework web rápido e eficiente

### Banco de Dados
- **PostgreSQL** - Banco de dados relacional
- **pgvector** - Extensão para operações com vetores
- **Drizzle ORM** - ORM type-safe para TypeScript
- **Drizzle Kit** - Ferramentas de migração e schema

### Validação e Tipagem
- **Zod** - Validação de schemas TypeScript-first
- **fastify-type-provider-zod** - Integração entre Fastify e Zod

### Desenvolvimento
- **Biome** - Linter e formatter moderno
- **Ultracite** - Configuração base para Biome
- **Docker & Docker Compose** - Containerização

## 🏗️ Arquitetura

O projeto segue uma arquitetura modular e organizada:

```
src/
├── db/
│   ├── connection.ts      # Configuração da conexão com o banco
│   ├── schema/           # Schemas do banco de dados
│   ├── migrations/       # Migrações do banco
│   └── seed.ts          # Dados iniciais
├── http/
│   └── routes/          # Rotas da API
├── env.ts               # Configuração de variáveis de ambiente
└── server.ts            # Configuração do servidor
```

## 🛠️ Setup e Configuração

### Pré-requisitos
- Node.js 22+
- Docker e Docker Compose
- Git

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd server
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Configure as variáveis de ambiente
Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

### 4. Inicie a infraestrutura com Docker
```bash
docker compose up -d postgres
```

### 5. Execute as migrações do banco
```bash
npm run db:migrate
```

### 6. Popule o banco com dados iniciais (opcional)
```bash
npm run db:seed
```

### 7. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

A API estará disponível em `http://localhost:3333`

## 📝 Scripts Disponíveis

- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia o servidor em modo de desenvolvimento com watch
- `npm run db:seed` - Popula o banco com dados iniciais

## 🐳 Docker

### Desenvolvimento
```bash
# Apenas o banco de dados
docker compose up -d postgres

# Aplicação completa
docker compose up -d
```

### Produção
```bash
docker compose up -d
```

## 🔧 Configurações

### Biome
O projeto utiliza Biome para linting e formatação, com configuração personalizada:
- Semicolons: `asNeeded`
- Extends: `ultracite`

### Drizzle ORM
- Dialeto: PostgreSQL
- Casing: snake_case
- Schema: `./src/db/schema/**.ts`
- Migrações: `./src/db/migrations`

## 🌐 API

### Health Check
```http
GET /health
```

### Endpoints
- `GET /rooms` - Lista salas disponíveis

## 📋 Padrões de Projeto

- **Type Safety**: Uso extensivo do TypeScript e Zod para validação
- **Modular Architecture**: Separação clara de responsabilidades
- **Environment Configuration**: Validação de variáveis de ambiente com Zod
- **Database First**: Schema-driven development com Drizzle
- **Container Ready**: Aplicação totalmente containerizada

## 🤝 Contribuição

Este projeto foi desenvolvido durante o NLW-AGENTS da Rocketseat como material educacional.

---

Desenvolvido com ❤️ durante o **NLW-AGENTS** da [Rocketseat](https://rocketseat.com.br)