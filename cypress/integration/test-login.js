describe("Login", () => {
  it("Assert login", () => {
    cy.clearCookies();
    cy.visit("index.php");
    // 1300 x 600  
    cy.viewport(1300, 600);
    cy.get(".button")
        .first()
        .should("contain", "Login with Google account");
    // Visit test login-page
    cy.visit("setuser-test.php");
    // Visit test start-page
    cy.visit("index.php");
    cy.get(".button")
      .first()
      .should("contain", " Continue to app");
    // Visit /helper
    cy.visit("helper/index.php");
    cy.get("#user-name")
      .should("contain", "TEST");
    cy.window()
      .its("user.firstName")
      .should("equal", "TEST");
    cy.window()
      .its("user.uid")
      .should("equal", "10000000-0000-0000-0000-000000000000");    
    });    
});
