describe("Start Page", () => {
  it('Assert start-page"', () => {
    cy.clearCookies();
    cy.visit("index.php");
    // 1300 x 600  
    cy.viewport(1300, 600);
    cy.get("#box-header")
        .find("img")
        .should("be.visible")
        .title()
        .should("contain", "Warframe Mastery Helper");
    cy.get("h2")
        .first()
        .should("contain", "Warframe Mastery Tracker");
    cy.get(".button")
        .first()
        .should("contain", "Login with Google account");
    cy.get("#news-list")
        .find("li")
        .should("have.length", "3");
    cy.get("h2").contains("Login")
        .should("have.length", "1");
    cy.get("h2").contains("News")
        .should("have.length", "1");
    cy.get("h2").contains("Tips")
        .should("have.length", "1");
    cy.get("h2").contains("Legend")
        .should("have.length", "1");
    cy.get("#legend-image")
        .should("be.visible");
    cy.get("h2").
        contains("Privacy Policy & Disclaimer")
        .should("have.length", "1");
    cy.get("#wrapper-weapons").find("img")
        .should("have.length", "7")
        .and("be.visible");
    // 900 x 600  
    cy.viewport(900, 600);
    cy.get("#wrapper-weapons")
      .find("img:visible")
      .should("have.length", "6")
      .and("be.visible");
    // 600 x 600  
    cy.viewport(600, 600);
    cy.get("#wrapper-weapons")
      .find("img:visible")
      .should("have.length", "0")
      .and("not.be.visible");
  });
});
