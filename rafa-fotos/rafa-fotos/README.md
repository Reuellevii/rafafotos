# Rafa Fotos — Landing page

Site profissional de fotografia feito com **React + Vite**, pronto para publicar na **Vercel**.

Este guia foi escrito para quem **não é programador**. Siga os passos na ordem.

---

## O que você precisa ter instalado (uma vez só)

1. **Node.js** (versão 18 ou mais nova) — baixe em https://nodejs.org (botão "LTS").
2. Um editor de texto para abrir os arquivos. Recomendo o **VS Code** (https://code.visualstudio.com), que é gratuito.

---

## 1. Instalar as dependências

Abra a pasta do projeto no VS Code, abra o terminal (menu **Terminal → Novo Terminal**) e digite:

```bash
npm install
```

Espere terminar (pode levar alguns minutos na primeira vez). Só precisa fazer isso uma vez.

## 2. Ver o site no seu computador

```bash
npm run dev
```

O terminal vai mostrar um endereço parecido com `http://localhost:5173`. Abra esse endereço no navegador.
Sempre que você salvar uma alteração nos arquivos, o site atualiza sozinho.
Para parar, aperte `Ctrl + C` no terminal.

Para testar a versão final (igual à que vai para a internet):

```bash
npm run build
npm run preview
```

---

## Onde fica cada coisa

```
rafa-fotos/
├─ public/
│  ├─ images/
│  │  ├─ hero/         → foto principal (primeira tela): hero.jpg (computador) e hero-mobile.jpg (celular)
│  │  ├─ fotografo/    → foto do Rafa Fotos ("Por trás das lentes")
│  │  ├─ portfolio/    → TODAS as fotos da galeria
│  │  ├─ servicos/     → uma foto para cada serviço
│  │  └─ og-image.jpg  → imagem que aparece ao compartilhar o site no WhatsApp/Facebook
│  └─ favicon.svg      → ícone da aba do navegador
└─ src/
   └─ config/
      ├─ site.js       → WhatsApp, Instagram, e-mail, cidade, nome da marca
      ├─ photos.js     → lista de fotos do portfólio e fotos principais
      └─ content.js    → todos os textos do site
```

**Regra de ouro:** para mudar informações, você só precisa mexer nos 3 arquivos da pasta `src/config/` e nas fotos da pasta `public/images/`.

---

## 3. Trocar o número do WhatsApp

Abra `src/config/site.js` e altere esta linha:

```js
export const WHATSAPP_NUMBER = '558882313723'
```

Use **somente números**: `55` (Brasil) + DDD + número. Exemplo: `5588999998888`.
Confira se o número está completo (celulares costumam ter 9 dígitos depois do DDD).

Todos os botões do site (menu, primeira tela, serviços, botão flutuante, rodapé) usam esse número automaticamente.

## 4. Trocar o Instagram

No mesmo arquivo `src/config/site.js`:

```js
export const INSTAGRAM_URL = 'https://www.instagram.com/rafafotosoros'
```

Se deixar entre aspas vazias (`''`), os ícones do Instagram somem do site.

## 5. Trocar e-mail, cidade e nome da marca

Também em `src/config/site.js`: `EMAIL`, `CIDADE` e `NOME_DA_MARCA`.
O e-mail só aparece no site se você preencher.

## 6. Alterar os textos

Abra `src/config/content.js`. Lá estão os textos de todas as seções (primeira tela, "Por trás das lentes", serviços, diferenciais, etapas, depoimentos, chamada final, rodapé). Troque o texto que está entre aspas e salve.

Cada serviço tem também uma `mensagem`: é o texto que aparece pronto no WhatsApp quando o cliente clica em "Quero saber mais".

---

## 7. Trocar as fotografias

### Foto principal (primeira tela)
Substitua os arquivos em `public/images/hero/`, mantendo os mesmos nomes:
- `hero.jpg` — para computador/tablet (de preferência **horizontal**, 2500 px de largura)
- `hero-mobile.jpg` — para celular (de preferência **vertical**, com o rosto/assunto na metade de cima)

### Foto do Rafa Fotos
Substitua `public/images/fotografo/rafa-fotos.jpg` (foto vertical, ~1200 × 1600 px).

### Fotos dos serviços
Substitua os arquivos em `public/images/servicos/` mantendo os nomes (`casamentos.jpg`, `ensaios.jpg`, `gestante.jpg`, `newborn.jpg`, `infantil.jpg`, `eventos.jpg`).

> ⚠️ **Fotos temporárias:** `casamentos.jpg`, `newborn.jpg` e `eventos.jpg` estão usando fotos de outros ensaios, porque ainda não havia fotos dessas categorias. Troque assim que tiver.

### Foto da chamada final (antes do formulário)
Em `src/config/photos.js`, altere `FOTO_CHAMADA_FINAL` para o arquivo que preferir.

## 8. Adicionar novas fotos ao portfólio

1. **Prepare a foto.** Para o site carregar rápido, use JPG com no máximo ~1800 px no lado maior (idealmente abaixo de 400 KB). Sites como https://squoosh.app ajudam a reduzir o tamanho sem perder qualidade visível.
2. **Copie o arquivo** para `public/images/portfolio/` (ex.: `casamento-ana-01.jpg`).
3. **Abra `src/config/photos.js`**, copie um bloco da lista `FOTOGRAFIAS` e cole no fim da lista (antes do `]`), ajustando:

```js
{
  src: '/images/portfolio/casamento-ana-01.jpg',
  alt: 'Noivos se abraçando na saída da igreja',
  titulo: 'Casamento na igreja',
  categorias: ['Casamentos'],
  width: 1200, height: 1800,
},
```

- `categorias` pode ter várias: `['Gestantes', 'Família']` (a foto aparece nos dois filtros).
- Categorias disponíveis: `Casamentos`, `Ensaios`, `Gestantes`, `Família`, `Infantil`, `Eventos`.
- `width` e `height` são o tamanho da foto em pixels (clique com o botão direito no arquivo → Propriedades).
- **Filtros:** um filtro (ex.: "Casamentos") só aparece quando existe pelo menos uma foto nessa categoria. Assim que você adicionar a primeira foto de casamento, o filtro aparece sozinho.
- **Ordem:** as fotos aparecem na ordem da lista. Para mudar, mude o bloco de lugar.
- **Enquadramento (opcional):** `ratio: '4 / 5'` e `posicao: 'center 30%'` alteram só a miniatura da galeria. A foto ampliada sempre aparece inteira, sem cortes.

Para **remover** uma foto, apague o bloco `{ ... },` dela.

## 9. Depoimentos

Os 3 depoimentos atuais são **demonstrativos** (aparecem com o selo "Depoimento demonstrativo"). Em `src/config/content.js`, na lista `DEPOIMENTOS`:

1. Apague os blocos demonstrativos.
2. Adicione os reais no mesmo formato, **sem** a linha `demo: true`. Exemplo:

```js
{
  nome: 'Ana Paula',
  tipo: 'Ensaio gestante',
  foto: '/images/depoimentos/ana.jpg',   // opcional; sem foto, aparecem as iniciais
  texto: 'O texto do depoimento vai aqui.',
},
```

Se a lista ficar vazia (`[]`), a seção e o item do menu desaparecem.

## 10. Favicon e prévia de compartilhamento

- **Favicon** (ícone da aba): substitua `public/favicon.svg` (ou use um `favicon.png` e ajuste a linha `<link rel="icon">` no `index.html`).
- **Prévia ao compartilhar** (WhatsApp/Facebook): substitua `public/images/og-image.jpg` (1200 × 630 px). **Depois de publicar**, abra `index.html` e troque `/images/og-image.jpg` pelo endereço completo, por exemplo `https://www.seudominio.com.br/images/og-image.jpg`.

---

## 11. Formulário de contato

Hoje, ao clicar em **Solicitar atendimento**, o site valida os campos e **abre o WhatsApp com o pedido já preenchido** — assim nenhum contato se perde, mesmo sem banco de dados.

### Conectar o formulário ao Supabase (opcional, para o futuro)

O código já está preparado (arquivo `src/lib/leads.js`). Quando quiser guardar os pedidos:

1. Crie uma conta e um projeto em https://supabase.com.
2. No Supabase, abra **SQL Editor** e rode:

```sql
create table public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  nome text not null,
  whatsapp text not null,
  email text,
  servico text not null,
  data_desejada date,
  cidade text,
  mensagem text
);

alter table public.leads enable row level security;

-- permite que o site ENVIE pedidos, mas ninguém de fora consiga LER
create policy "site pode inserir leads"
  on public.leads for insert
  to anon
  with check (true);
```

3. Em **Project Settings → API**, copie a **Project URL** e a chave **anon public**.
4. Na pasta do projeto, copie o arquivo `.env.example` para `.env` e preencha:

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon
```

5. Na **Vercel** (Settings → Environment Variables), cadastre essas duas mesmas variáveis e publique de novo.

Pronto: os pedidos passam a aparecer na tabela `leads` do Supabase. Você vê tudo em **Table Editor**.

---

## 12. Publicar na Vercel (com seu domínio)

### a) Enviar para o GitHub
1. Crie uma conta em https://github.com e um repositório novo (botão **New**), por exemplo `rafa-fotos`.
2. No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Site Rafa Fotos"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/rafa-fotos.git
git push -u origin main
```

(Troque `SEU-USUARIO` pelo seu usuário do GitHub.)

### b) Conectar à Vercel
1. Crie uma conta em https://vercel.com (pode entrar com o GitHub).
2. Clique em **Add New → Project** e escolha o repositório `rafa-fotos`.
3. A Vercel reconhece sozinha que é um projeto **Vite**. Não mude nada e clique em **Deploy**.
4. Em cerca de 1 minuto o site estará no ar num endereço `.vercel.app`.

### c) Usar seu domínio
1. No projeto da Vercel, vá em **Settings → Domains** e adicione seu domínio (ex.: `www.rafafotos.com.br`).
2. A Vercel mostra os dados de DNS para configurar onde o domínio foi registrado (Registro.br, GoDaddy, Hostinger etc.). Depois de configurar, aguarde a propagação (de minutos a algumas horas).

Toda vez que você alterar algo e enviar para o GitHub (`git add .`, `git commit -m "..."`, `git push`), a Vercel atualiza o site automaticamente.

---

## Problemas comuns

| Problema | O que fazer |
|---|---|
| `npm` não é reconhecido | Instale o Node.js e reabra o terminal/VS Code. |
| Uma foto não aparece | Confira se o nome do arquivo em `photos.js` é idêntico ao da pasta (maiúsculas/minúsculas contam). |
| O botão do WhatsApp não abre | Confira `WHATSAPP_NUMBER` em `src/config/site.js` (só números, com 55 no início). |
| Mudei algo e não atualizou | Salve o arquivo (`Ctrl + S`) e recarregue a página. |

## Tecnologias

React 19 · Vite 6 · CSS puro (sem bibliotecas de estilo) · Fontes Instrument Serif e Hanken Grotesk (Google Fonts).
