const description2000 = `Lorem ipsum dolor sit amet. Nam consequuntur reprehenderit est voluptatem voluptas et ipsum dolor ab distinctio consequatur. Ab voluptates provident quo culpa saepe et voluptas beatae qui architecto culpa qui temporibus aliquid nam reprehenderit esse et aspernatur nemo. Aut labore velit est accusamus quas non odio enim id nihil aliquam sit quisquam dolorem qui debitis repellendus!
Et sint voluptate non rerum magni in omnis impedit qui voluptatem fugiat. Et vero ullam et eius quibusdam qui alias quia in quaerat sequi.
Ut eius perferendis aut debitis sapiente vel unde ullam et recusandae odio At quibusdam ipsum. Et quis aliquam qui ipsam placeat id blanditiis deserunt in magni nihil est fugit quia aut nostrum ipsum. Sit cupiditate rerum et quod distinctio ut soluta molestiae aut quidem reprehenderit in mollitia autem.Lorem ipsum dolor sit amet. Nam consequuntur reprehenderit est voluptatem voluptas et ipsum dolor ab distinctio consequatur. Ab voluptates provident quo culpa saepe et voluptas beatae qui architecto culpa qui temporibus aliquid nam reprehenderit esse et aspernatur nemo. Aut labore velit est accusamus quas non odio enim id nihil aliquam sit quisquam dolorem qui debitis repellendus!
Et sint voluptate non rerum magni in omnis impedit qui voluptatem fugiat. Et vero ullam et eius quibusdam qui alias quia in quaerat sequi.
Ut eius perferendis aut debitis sapiente vel unde ullam et recusandae odio At quibusdam ipsum. Et quis aliquam qui ipsam placeat id blanditiis deserunt in magni nihil est fugit quia aut nostrum ipsum. Sit cupiditate rerum et quod distinctio ut soluta molestiae aut quidem reprehenderit in mollitia autem.Lorem ipsum dolor sit amet. Nam consequuntur reprehenderit est voluptatem voluptas et ipsum dolor ab distinctio consequatur. Ab voluptates provident quo culpa saepe et voluptas beatae qui architecto culpa qui temporibus aliquid nam reprehenderit esse et aspernatur nemo. Aut labore velit est accusamus quas non odio enim id nihil aliquam jkjkjkjk`;

describe("CityForm", () => {
  it("Every field should be required", () => {
    const formFields = () => cy.get('[data-test="form-field"]');
    const submitBtn = () => cy.get("#submit-btn");
    const requiredErrorMessage = "To pole jest wymagane.";

    cy.wrap({ formFieldsCount: 0 })
      .then((obj) => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        return formFields().then(($formFields) => {
          obj.formFieldsCount = $formFields.length;

          return obj;
        });
      })
      .then((obj) => {
        submitBtn().click();
        cy.get(`p:contains("${requiredErrorMessage}")`).should("have.length", obj.formFieldsCount);
      });
  });

  it("City name field validation", () => {
    const id = "name";
    const submitBtn = () => cy.get("#submit-btn");
    const input = () => cy.get(`#${id}`);
    const error = () => cy.get(`#${id}-helper-text`);

    cy.wrap({})
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("aa1");
        submitBtn().click();
        error().should(
          "have.text",
          "Nazwa miasta może zawierać tylko małe i duże litery polskiego alfabetu oraz myślniki."
        );
      })
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("aa");
        submitBtn();
        error().should("not.exist");
      });
  });

  it("Picture field validation", () => {
    const id = "picture_url";
    const submitBtn = () => cy.get("#submit-btn");
    const input = () => cy.get(`#${id}`);
    const error = () => cy.get(`#${id}-helper-text`);

    cy.wrap({})
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("aa1");
        submitBtn().click();
        error().should("have.text", "Niepoprawny URL");
      })
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("https://www.wp.pl/");
        submitBtn().click();
        error().should("have.text", "Ten URL nie prowadzi do obrazka.");
      })
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("https://upload.wikimedia.org/wikipedia/commons/4/4e/Ratusz_wroclaw.JPG");
        submitBtn();
        error().should("not.exist");
      });
  });

  it("Description field validation", () => {
    const id = "description";
    const submitBtn = () => cy.get("#submit-btn");
    const input = () => cy.get(`#${id}`);
    const error = () => cy.get(`#${id}-helper-text`);

    cy.wrap({})
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("aa1");
        submitBtn().click();
        error().should("have.text", "Minimalna ilość znaków to 25.");
      })
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("asddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd");
        submitBtn().click();
        error().should("not.exist");
      });
  });
  it("Known places field validation", () => {
    const id = "known_places";
    const submitBtn = () => cy.get("#submit-btn");
    const input = () => cy.get(`#${id}`);
    const error = () => cy.get(`#${id}-helper-text`);

    cy.wrap({})
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("aa1");
        submitBtn().click();
        error().should("have.text", "Minimalna ilość znaków to 10.");
      })
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("asddddddddddddddddddddddddddddddddddddddddddddsdsdsdsdddddddddddddddddddd");
        submitBtn().click();
        error().should("have.text", "Maksymalna ilość znaków to 40.");
      })
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        input().type("asdddddsdsdsdsdddddddddddddddddddd");
        submitBtn().click();
        error().should("not.exist");
      });
  });
  it("Voivodeship field validation", () => {
    const id = "voivodeship";
    const submitBtn = () => cy.get("#submit-btn");
    const select = () => cy.get(`#${id}`);
    const error = () => cy.get(`#${id}-helper-text`);
    const voivodeship = "lubuskie";
    const voivodeshipOption = () => cy.get(`[data-value="${voivodeship}"]`);

    cy.wrap({})
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        select().click();
        voivodeshipOption().click();
        submitBtn().click();
        error().should("not.exist");
      })
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        submitBtn().click();
        error().should("have.text", "To pole jest wymagane.");
      });
  });
  it("Add city", () => {
    const newCityName = "TestoweMmiastoI";
    const submitBtn = () => cy.get("#submit-btn");
    const name = () => cy.get(`#name`);
    const description = () => cy.get(`#description`);
    const picture_url = () => cy.get(`#picture_url`);
    const voivodeship = () => cy.get(`#voivodeship`);
    const links = () => cy.get(`#links`);
    const known_places = () => cy.get(`#known_places`);
    const voivodeshipOption = () => cy.get(`[data-value="lubuskie"]`);
    const cities = () => cy.get(`[data-test="city-list"] li`);

    cy.wrap({})
      .then(() => {
        cy.visit(`${Cypress.config().baseUrl}/city-form`);
        name().type(newCityName);
        description().type("ssssssssssssssssssssssssssssssssssssssssssssssssssss");
        picture_url().type("https://upload.wikimedia.org/wikipedia/commons/4/4e/Ratusz_wroclaw.JPG");
        links().type("https://www.wp.pl/, https://www.wp.pl/");
        known_places().type("coś, coś, coś");
        voivodeship().click();
        voivodeshipOption().click();
        submitBtn().click();
      })
      .then(() => {
        const url = `${Cypress.config().baseUrl}/city-data`;
        cy.url().should("eq", url);
        cities().find(`div:contains("${newCityName}")`).should("exist");
      });
  });
});
