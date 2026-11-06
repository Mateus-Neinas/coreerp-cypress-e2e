# CoreERP Cypress E2E

Automação de ponta a ponta para validar a interface React do CoreERP no navegador.

## O que demonstra

- Cypress configurado para uma aplicação Vite.
- Verificação da tela principal e dos indicadores.
- Navegação entre áreas do ERP.
- Busca de registros e comportamento em viewport mobile.
- Uso de seletores de teste estáveis em vez de depender da aparência do CSS.

## Executar

Requer Node.js 20 ou superior. Em outro terminal, suba o frontend:

```bash
npm run dev --prefix ../coreerp-web-react
```

Depois, nesta pasta:

```bash
npm install
npm run cy:run
# ou interface visual
npm run cy:open
```

A URL base pode ser alterada com `CYPRESS_BASE_URL`.

## Escopo

Estes testes verificam jornadas visíveis do navegador. O contrato HTTP fica no repositório `coreerp-api-tests`.
