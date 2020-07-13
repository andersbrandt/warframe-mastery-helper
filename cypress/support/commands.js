// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.LocalStorage.clear = function (keys, ls, rs) {
  return;
};

Cypress.Commands.add("login", () => {
    cy.visit("setuser-test.php");
    cy.visit("helper/index.php");
    cy.viewport(1300, 600);
    cy.wait(100);
    cy.get("#help-placeholder")
      .find(".close-reveal-modal")
      .click({ force: true });
    cy.get("#help-placeholder").should("not.be.visible");
});
