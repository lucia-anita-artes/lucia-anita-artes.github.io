# Lúcia Art Dashboard

Dashboard para acompanhar coleções, progresso de pinturas, próximos passos e roadmap.

## Stack

- Next.js (App Router)
- Tailwind CSS
- Deploy estático via GitHub Pages

## Desenvolvimento local

```bash
npm ci
npm run dev
```

Abra `http://localhost:3000`.

## Como os dados funcionam

- O app é estático para funcionar no GitHub Pages.
- Alterações de checklists e notas são salvas no `localStorage` do navegador.
- Isso significa que os dados ficam no dispositivo/navegador usado.

## Deploy no GitHub Pages

O repositório já inclui workflow:

- `.github/workflows/deploy-pages.yml`

Para publicar:

1. Em `Settings > Pages`, selecione `Build and deployment: GitHub Actions`.
2. Faça push na `main`.
3. Aguarde o workflow `Deploy Dashboard to GitHub Pages`.

Se o repo for de projeto (ex: `lucia-art-dashboard`), a URL final será:

- `https://<owner>.github.io/lucia-art-dashboard/`

Se for user site (`<owner>.github.io`), a URL será:

- `https://<owner>.github.io/`

## Transferir para a conta da Lúcia

1. No GitHub do repositório atual: `Settings > General > Transfer ownership`.
2. Escolha a conta/organização da Lúcia.
3. Após transferir, confirme em `Settings > Pages` que continua com `GitHub Actions`.
4. Faça um novo push (ou `Run workflow`) para publicar já no novo domínio.

## URL final

Como este repositório é do tipo `user site` (`<owner>.github.io`), a publicação fica direto na raiz:

- `https://<owner>.github.io/`
