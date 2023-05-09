describe("Filters", () => {
  it("Filter cities in list by searchbar", () => {
    const cities = () => cy.get(`[data-test="city-list"] li`);
    const searchInput = () => cy.get(`input[id="search"]`);

    cy.wrap({ searchKey: "", expectedCount: 0 })
      .then((obj) => {
        cy.visit(`${Cypress.config().baseUrl}/city-data`);
        return cities().then(($cities) => {
          const texts = $cities.map((i, city) => Cypress.$(city).text()).get();
          if (texts.length) {
            obj.searchKey = texts[0];
            obj.expectedCount = texts.filter((el) => el.toLowerCase() === texts[0].toLowerCase()).length;
          }
          return obj;
        });
      })
      .then((obj) => {
        searchInput()
          .type(obj.searchKey)
          .wait(500)
          .then(() => cities().should("have.length", obj.expectedCount));
      });
  });

  it("Filter cities in list by voivodeship select", () => {
    const cities = () => cy.get(`[data-test="city-list"] li`);
    const voivodeshipSelect = () => cy.get("#voivodeship");

    cy.wrap({ selectedVoivodeship: "", expectedCount: 0 })
      .then((obj) => {
        cy.visit(`${Cypress.config().baseUrl}/city-data`);
        return cities().then(($cities) => {
          const possibleVoivodeships = $cities.map((i, city) => Cypress.$(city).attr("data-test")).get();
          if (possibleVoivodeships.length) {
            obj.selectedVoivodeship = possibleVoivodeships[0];
            obj.expectedCount = possibleVoivodeships.filter(
              (el) => el.toLowerCase() === possibleVoivodeships[0].toLowerCase()
            ).length;
          }
          return obj;
        });
      })
      .then((obj) => {
        voivodeshipSelect().click();
        cy.get(`[data-value="${obj.selectedVoivodeship.toLowerCase()}"]`).click();
        cities().should("have.length", obj.expectedCount);
      });
  });
});
