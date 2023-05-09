describe("Modals", () => {
  it("Display About Modal", () => {
    cy.visit(`${Cypress.config().baseUrl}/city-data`);
    cy.get("#about-btn").click();
    cy.get("#about-modal").should("be.visible");
  });
  it("Display Contact Modal", () => {
    cy.visit(`${Cypress.config().baseUrl}/city-data`);
    cy.get("#contact-btn").click();
    cy.get("#contact-modal").should("be.visible");
  });
  it("Display Help Modal", () => {
    cy.visit(`${Cypress.config().baseUrl}/city-data`);
    cy.get("#help-btn").click();
    cy.get("#help-modal").should("be.visible");
  });
  it("Display Delete Modal", () => {
    cy.visit(`${Cypress.config().baseUrl}/city-data`);
    cy.get("#delete-city-btn").click();
    cy.get("#delete-modal").should("be.visible");
  });

  it("Delete city", () => {
    const lastCity = () => cy.get(`[data-test="city-list"]`).find("li:first-child");
    const deleteBtn = () => cy.get(`#delete-city-btn`);
    const deleteModal = () => cy.get(`#delete-modal`);
    const cityById = (id: string) => cy.get(`[data-test="city-list"] li#${id}`);

    cy.wrap({ id: "" })
      .then((obj) => {
        cy.visit(`${Cypress.config().baseUrl}/city-data`);
        return lastCity().then(($li) => {
          obj.id = $li.attr("id");
          return obj;
        });
      })
      .then((obj) => {
        lastCity().click();
        deleteBtn().click();
        deleteModal().get(`#delete-city-in-modal-btn`).click();
        cityById(obj.id).should("not.exist");
      });
  });
});
