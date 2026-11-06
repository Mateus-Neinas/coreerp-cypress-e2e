describe("CoreERP dashboard", () => {
  beforeEach(() => cy.visit("/"));

  it("shows the overview and recent orders", () => {
    cy.get('[data-testid="dashboard-title"]').should("contain", "Visão geral");
    cy.get('[data-testid="orders-table"] tbody tr').should("have.length.greaterThan", 0);
    cy.contains("Faturamento do mês").should("be.visible");
  });

  it("filters recent orders by customer", () => {
    cy.get('[aria-label="Pesquisar no sistema"]').type("Casa Nativa");
    cy.get('[data-testid="orders-table"]').should("contain", "Casa Nativa");
    cy.get('[data-testid="orders-table"]').should("not.contain", "Aurora Comércio");
  });

  it("creates an order through the accessible form", () => {
    cy.get('[data-testid="add-order"]').click();
    cy.get('[data-testid="order-dialog"]').should("be.visible");
    cy.get("#customer").type("Cliente de teste");
    cy.get("#amount").type("250.50");
    cy.get('[data-testid="save-order"]').click();
    cy.get('[data-testid="order-dialog"]').should("not.be.visible");
    cy.get('[data-testid="orders-table"]').should("contain", "Cliente de teste");
    cy.get('[role="status"]').should("contain", "Pedido criado");
  });

  it("switches to the orders section", () => {
    cy.get('[data-testid="nav-orders"]').click();
    cy.get('[data-testid="dashboard-title"]').should("contain", "Pedidos");
  });

  it("keeps the dashboard usable on a narrow viewport", () => {
    cy.viewport(390, 844);
    cy.get('[data-testid="dashboard-title"]').should("be.visible");
    cy.get('[data-testid="orders-table"]').should("be.visible");
  });
});
