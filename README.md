# CoreERP Cypress E2E

Repositório dedicado às jornadas de ponta a ponta do frontend React do CoreERP.

## O que valida

- Abertura do painel e renderização dos indicadores.
- Busca de pedidos por cliente.
- Criação de pedido pelo formulário acessível.
- Navegação para a área de pedidos.
- Layout em viewport mobile.

## Preparar e executar localmente

Requer Node.js 20 ou superior. Clone este repositório e `coreerp-web-react` lado a lado, com as pastas mantendo esses nomes:

```text
workspace/
├── coreerp-cypress-e2e/
└── coreerp-web-react/
```

Na pasta `coreerp-cypress-e2e`, instale as dependências e rode:

```bash
npm install
npm run cy:run
```

O script inicia o Vite, aguarda a URL ficar pronta, executa Cypress e encerra o servidor ao terminar. Para abrir a interface do Cypress, use `npm run cy:open`.

A URL pode ser alterada com `CYPRESS_BASE_URL`; para usar um frontend já iniciado, rode `npm run cy:run:only`.

## CI

O workflow em `.github/workflows/cypress.yml` baixa este repositório e o frontend, instala as dependências e executa as mesmas jornadas em cada pull request e push para `main`.

## Seletores

Os testes usam atributos `data-testid` nos componentes de interface e rótulos acessíveis onde isso torna o cenário mais próximo do uso real.
