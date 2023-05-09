describe("Navigation", () => {
  it("Navigate to /city-data after open website", () => {
    cy.visit(Cypress.config().baseUrl);
    cy.location("pathname").should("match", /\/city-data$/);
  });

  it("Navigate to /city-data with correct id after clicking City from list", () => {
    const lastCity = () => cy.get(`[data-test="city-list"]`).find("li:last-child");

    cy.wrap({ text: "", id: "" })
      .then((obj) => {
        cy.visit(`${Cypress.config().baseUrl}/city-data`);
        return lastCity().then(($li) => {
          obj.id = $li.attr("id");
          obj.text = $li.find("div").text();
          return obj;
        });
      })
      .then((obj) => {
        lastCity().click();
        const url = `${Cypress.config().baseUrl}/city-data?id=${obj.id}`;
        cy.url().should("eq", url);
      });
  });

  it('Navigate to "/city-form" after clicking "Add new city" button', () => {
    cy.visit(`${Cypress.config().baseUrl}/city-data`);
    cy.get(`[data-test="add-new-city-btn"]`)
      .click()
      .then(() => {
        cy.location("pathname").should("match", /\/city-form$/);
      });
  });

  it('Navigate to "/city-form" with correct id after clicking "Edit City" button', () => {
    const lastCity = () => cy.get(`[data-test="city-list"]`).find("li:last-child");
    const editBtn = () => cy.get(`#edit-city-btn`);

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
        editBtn().click();
        const url = `${Cypress.config().baseUrl}/city-form?id=${obj.id}`;
        cy.url().should("eq", url);
      });
  });
});
