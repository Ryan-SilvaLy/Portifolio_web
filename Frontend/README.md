# Portfólio Angular - Dev Ryan Silva

Aplicação frontend em Angular com **uma única página**, moderna, responsiva e fácil de editar.

## 1) Comandos para criar o projeto Angular

```bash
# 1. Criar projeto standalone com SCSS e roteamento
npm create @angular@latest portfolio-ryan -- --style=scss --routing --ssr --standalone

# 2. Entrar na pasta
cd portfolio-ryan
```

## 2) Bibliotecas npm usadas (ícones)

```bash
npm install bootstrap-icons devicon
```

> O carrossel foi feito de forma nativa no Angular (sem biblioteca externa), para manter o projeto simples.

## 3) Estrutura principal de pastas

```txt
src/
├─ app/
│  ├─ app.ts
│  ├─ app.html
│  ├─ app.scss
│  └─ components/
│     ├─ profile/
│     │  ├─ profile.ts
│     │  ├─ profile.html
│     │  └─ profile.scss
│     ├─ projects-carousel/
│     │  ├─ projects-carousel.ts
│     │  ├─ projects-carousel.html
│     │  └─ projects-carousel.scss
│     ├─ skills/
│     │  ├─ skills.ts
│     │  ├─ skills.html
│     │  └─ skills.scss
│     └─ social-links/
│        ├─ social-links.ts
│        ├─ social-links.html
│        └─ social-links.scss
├─ styles.scss
└─ main.ts
```

## 4) Componentes Angular recomendados

- `Profile`: foto, nome e textos de apresentação.
- `ProjectsCarousel`: card de projetos com navegação anterior/próximo.
- `Skills`: grid com tecnologias e ícones.
- `SocialLinks`: botões de redes sociais clicáveis.

## 5) Arquivos principais

Os arquivos principais estão implementados em:

- `src/app/app.ts`
- `src/app/app.html`
- `src/app/app.scss`
- `src/app/components/**`
- `src/styles.scss`

## 6) Layout SCSS

- SCSS organizado por componente.
- Estilo global em `styles.scss` (reset, fonte e import de ícones).
- Layout com gradiente, cards e responsividade com media query.

## 7) Comentários no código

Foram adicionados comentários em pontos-chave dos arquivos TypeScript e SCSS para facilitar manutenção futura.

## Rodando o projeto

```bash
npm install
npm start
```
