# Sabor & Arte — Cardápio Digital

Aplicação web desenvolvida em **Next.js (App Router)** para exibir o cardápio digital de um restaurante, com painel administrativo para gerenciamento dos pratos. Os dados são consumidos de uma API REST externa hospedada no Render.

## ✨ Funcionalidades

### Área pública
- Página inicial de apresentação do restaurante
- Cardápio completo com busca por nome/descrição (via query param `?busca=`)
- Página de detalhe de cada prato, com metadados dinâmicos (`generateMetadata`) para SEO/compartilhamento
- Destaque visual para pratos marcados como "Estrela da Casa"
- Botão de favoritar (estado local, por enquanto sem persistência)
- Página de categorias (em construção)
- Estados de carregamento (skeleton) e de erro dedicados para o cardápio

### Área administrativa (`/admin`)
- Listagem de todos os pratos cadastrados, com busca
- Cadastro de novo prato
- Edição de prato existente
- Exclusão de prato (com confirmação)
- Acesso protegido por login simulado (cookie + middleware)

## 🛠️ Tecnologias utilizadas

- [Next.js](https://nextjs.org/) (App Router, Server Components, Server Actions)
- React
- Tailwind CSS
- CSS Modules (`Banner.module.css`)
- `next/image` e `next/font` (Google Fonts: Inter, Montserrat)

> Como o `package.json` e o `next.config.js` não foram enviados, confirme a versão do Next.js/React e demais dependências reais do projeto.

## 🔌 Integração com API externa

Todas as páginas e Server Actions consomem diretamente a API REST:

```
https://api-restaurante-5iqb.onrender.com/api/produtos
```

| Ação | Método | Endpoint |
|---|---|---|
| Listar pratos | GET | `/api/produtos` |
| Detalhar prato | GET | `/api/produtos/{id}` |
| Cadastrar prato | POST | `/api/produtos` |
| Atualizar prato | PUT | `/api/produtos/{id}` |
| Remover prato | DELETE | `/api/produtos/{id}` |

> ⚠️ A URL da API está hardcoded em múltiplos arquivos (`actions.js` e várias `page.js`). Recomenda-se centralizar em uma variável de ambiente (`NEXT_PUBLIC_API_URL` ou similar) para facilitar a troca entre ambientes (dev/staging/produção).

## 📁 Estrutura do projeto

```
src/app
├── layout.js                     # Layout raiz (Navbar, Footer, fontes)
├── globals.css                   # Estilos globais (Tailwind)
├── page.js                       # Página inicial ("/")
├── login/
│   └── page.js                   # Login simulado ("/login")
├── categorias/
│   └── page.js                   # Página de categorias ("/categorias")
├── cardapio/
│   ├── page.js                   # Listagem do cardápio ("/cardapio")
│   ├── loading.js                # Skeleton de carregamento
│   ├── error.js                  # Error boundary do cardápio
│   └── [id]/
│       └── page.js               # Detalhe de um prato ("/cardapio/{id}")
└── admin/
    ├── page.js                   # Painel administrativo ("/admin")
    ├── actions.js                # Server Actions (cadastrar/editar/excluir)
    ├── novo-prato/
    │   └── page.js                # Formulário de cadastro ("/admin/novo-prato")
    └── editar/
        └── [id]/
            └── page.js            # Formulário de edição ("/admin/editar/{id}")

src/components
├── Navbar.js                     # Barra de navegação
├── Footer.js                     # Rodapé
├── Banner.js / Banner.module.css # Banner de destaque (hero)
├── Busca.js                      # Campo de busca (sincroniza com a URL)
├── PratoCard.js                  # Card de prato (layout de cardápio)
├── BotaoFavorito.js              # Botão de favoritar (estado local)
└── BotaoExcluir.js               # Botão de excluir prato (com confirmação)

middleware.js                     # Protege as rotas /admin/*
```

## 🔐 Autenticação (login simulado)

O acesso ao painel `/admin` é protegido por um `middleware.js` que verifica a presença do cookie `auth_token`. O login em `/login` apenas **simula** a autenticação, criando esse cookie diretamente no navegador:

```js
document.cookie = "auth_token=logado; path=/; max-age=3600";
```

> ⚠️ **Atenção — não é autenticação real**: não há validação de usuário/senha nem verificação do token no servidor; qualquer pessoa pode criar esse cookie manualmente e acessar `/admin`. Antes de usar em produção, é necessário implementar um fluxo de autenticação real (ex.: NextAuth, JWT validado no middleware, etc.).

## ⚙️ Pré-requisitos

- Node.js (versão a definir conforme `package.json`)
- npm, yarn ou pnpm

## ▶️ Como executar

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
```

A aplicação sobe por padrão em `http://localhost:3000`.

## 🗺️ Rotas da aplicação

| Rota | Descrição | Acesso |
|---|---|---|
| `/` | Página inicial | Público |
| `/cardapio` | Listagem de pratos, com busca | Público |
| `/cardapio/{id}` | Detalhe de um prato | Público |
| `/categorias` | Página de categorias | Público |
| `/login` | Login simulado | Público |
| `/admin` | Gerenciamento do cardápio | Protegido (cookie `auth_token`) |
| `/admin/novo-prato` | Cadastro de novo prato | Protegido |
| `/admin/editar/{id}` | Edição de prato | Protegido |

## 🐞 Problemas conhecidos

- **Login não é seguro**: ver seção de Autenticação acima.
- **`Busca.js`**: a `className` do input de busca tem uma aspa extra (`className='"w-full ...'`), o que insere um caractere inválido no início da classe e pode quebrar parte da estilização.
- **`PratoCard.js` e `Banner.js` parecem não utilizados**: a listagem em `/cardapio` monta o card manualmente em vez de usar o componente `PratoCard`, e nenhuma página mostrada importa `Banner`. Vale avaliar se são componentes legados ou se ainda serão integrados.
- **URL da API duplicada em vários arquivos**: ver seção de Integração com API acima.
- **`BotaoFavorito`**: o estado de favorito é local ao componente e não é persistido (recarregar a página perde o favorito).

## 🚧 Roadmap

- [ ] Implementar autenticação real no login/middleware
- [ ] Centralizar a URL da API em variável de ambiente
- [ ] Corrigir classe CSS quebrada em `Busca.js`
- [ ] Integrar ou remover os componentes `PratoCard` e `Banner`
- [ ] Persistir favoritos (ex.: localStorage ou vínculo com usuário)
- [ ] Implementar filtro por categoria na página `/categorias`
- [ ] Adicionar testes (unitários e/ou end-to-end)

## 👤 Autor

Desenvolvido por Luigi Lombardo.
