describe("GUI", () => {

  it("Login", () => {
    //
    //  Login
    //
    cy.login();
  })

  it("Assert search", () => {
    //
    //  Search 1 item by name
    //
    cy.get("#search").should("have.length", 1).and("be.visible");
    cy.get("#search").type("Adarza Kavat");
    cy.get("ul#all-items").find("li:visible").should("have.length", 1);
    cy.get("#search-indicator-value").should("have.text", "1");
    cy.get("#search-indicator-string").should("have.text", "Searching for Adarza Kavat. ");

    //
    //  Search weapon category
    //
    cy.get("#search").clear().type("Pistol");
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(70);
    });

    //
    //  Search weapon type
    //
    cy.get("#search").clear().type("Secondary");
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(110);
    });

    //
    //  Search weapon acquisition
    //
    cy.get("#search").clear().type("Bio Lab (Dojo)");
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(15);
    });

    // 
    //  Clear search button
    // 
    cy.get("#search").clear().type("Adarza Kavat");
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.equal(1);
    });
    cy.get("#search-clear").click();
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(500);
    });

    // 
    //  Clear filter button
    // 
    cy.get("#search").clear().type("Adarza Kavat");
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.equal(1);
    });
    cy.get("#filter-clear").click();
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(500);
    });
  });

  it("Assert filter", () => {
    //
    //  Default state for filter
    //
    cy.get("#filter").find(".filter-status:checked").should("have.value", "all");

    //
    //  Filter ranked
    //
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(500);
    });
    cy.get("#filter").contains("Ranked").click();
    cy.get("#filter").find(".filter-status:checked").should("have.value", "ranked");
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.equal(1);
    });
    cy.get('[data-name="Acceltra"]').should("be.visible");
    cy.get("#search-indicator-value").should("have.text", "1");

    //
    //  Filter unranked
    //
    cy.get("#filter").contains("Unranked").click();
    cy.get("#filter").find(".filter-status:checked").should("have.value", "unranked");
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(500);
    });
    cy.get('[data-name="Acceltra"]').should("not.be.visible");

    //
    //  Filter all
    //
    cy.get("#filter").contains("All").click();
    cy.get("#filter").find(".filter-status:checked").should("have.value", "all");
    cy.get("ul#all-items").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(500);
    });
    cy.get('[data-name="Acceltra"]').should("be.visible");
  });

  it("Assert modal behaviour", () => {
    //
    //  Modal behaviour
    //

    // 
    // Default state
    //
    cy.get("#help-modal").should("not.be.visible");
    cy.get("#help-placeholder").should("not.be.visible");
    //cy.get(".reveal-modal-bg").should("not.be.visible").and("have.length", 0);

    //
    // Open modal
    //
    cy.get(".top-bar-section").contains("Help").click();
    cy.get("#help-modal").should("be.visible");
    cy.get("#help-placeholder").should("be.visible");
    cy.get(".reveal-modal-bg").should("have.length", 1);

    //
    //  Close modal Help with close button
    //
    cy.get("#help-placeholder").find(".close-reveal-modal").should("be.visible").click();
    cy.get("#help-modal").should("not.be.visible");
    cy.get("#help-placeholder").should("not.be.visible");

    //
    //  Close modal Help with escape
    //
    cy.get(".top-bar-section").contains("Help").click();
    cy.get("#help-modal").should("be.visible");
    cy.get("body").type("{esc}");
    cy.get("#help-modal").should("not.be.visible");

    //
    //  Close modal Help by clicking background
    //
    cy.get(".top-bar-section").contains("Help").click();
    cy.get("#help-modal").should("be.visible");
    cy.get(".reveal-modal-bg").click({force: true});
    cy.get("#help-modal").should("not.be.visible");
  });

  it("Assert modal Help", () => {
    //
    //  Modal Help
    //
    cy.get("#help-modal").should("not.be.visible");
    cy.get(".top-bar-section").contains("Help").click();
    cy.get("#help-modal").should("be.visible");
    cy.get(".legend-icon.icon-check-empty").should("be.visible");
    cy.get("#legend-image").should("be.visible");
    cy.get("ul#help-modal-unique-items-list").should("be.visible");
    cy.get("ul#help-modal-unique-items-list").find("li").should("have.length", 36);
    cy.get("#help-placeholder").find(".close-reveal-modal").should("be.visible").click();
    cy.get("#help-modal").should("not.be.visible");
  });

  it("Assert modal Statistics", () => {
    //
    //  Modal Statistics
    //
    cy.get("#stats-modal").should("not.be.visible");
    cy.get(".top-bar-section").contains("Statistics").click();
    cy.get("#stats-modal").should("be.visible");
    cy.get("#stats-placeholder").find(".close-reveal-modal").click({force:true});
    cy.get("#stats-modal").should("not.be.visible");
  });

  it("Assert modal item", () => {
    //
    //  Modal item
    //
    cy.get("#item-info-placeholder").should("not.be.visible");
    cy.get('[data-name="Acceltra"]').find(".name").should("be.visible").click();
    cy.get("#item-info-placeholder").should("be.visible");
    cy.get("#item-info-placeholder").find("img.thumbnail").should("be.visible");
    cy.get("#item-info-placeholder").find(".data").should("be.visible");
    cy.get("#item-info-placeholder").find(".close-reveal-modal").click();
    cy.get("#item-info-placeholder").should("not.be.visible");
    //TODO assert search for type
    //TODO assert search for category
    //TODO assert search for acquisition
  });

  it("Assert modal News", () => {
    //
    //  Modal News
    //
    cy.get("#news-modal").should("not.be.visible");
    cy.get(".top-bar-section").contains("News").click();
    cy.get("#news-modal").should("be.visible");
    cy.get("ul#news-list").should("be.visible");
    cy.get("ul#news-list").find("li:visible").should(($elements) => {
      expect($elements.length).to.be.greaterThan(15);
    });
    cy.get("#news-modal").find(".close-reveal-modal").click({ force: true });
    cy.get("#news-modal").should("not.be.visible");
  });

  it("Assert modal User", () => {
    //
    //  Modal User
    //
    cy.get("#user-modal").should("not.be.visible");
    cy.get(".top-bar-section").contains("TEST").click();
    cy.get("#user-modal").should("be.visible");
    cy.get("#user-modal").find(".close-reveal-modal").click({ force: true });
    cy.get("#user-modal").should("not.be.visible");
  });

  it("Assert media queries", () => {
    //
    //  Desktop view
    //
    cy.viewport(1300, 600);
    cy.get("#search").type("Afuris");
    cy.get("ul#all-items").find("li:visible").should("have.length", 1);
    cy.get("ul#all-items").find("li:visible").find(".acquisition").should("be.visible");
    cy.get("ul#all-items").find("li:visible").find(".mastery-rank").should("be.visible");

    //
    //  Mobile view
    //
    cy.viewport(600, 600);
    cy.get("ul#all-items").find("li:visible").find(".acquisition").should("not.be.visible");
    cy.get("ul#all-items").find("li:visible").find(".mastery-rank").should("not.be.visible");
  });

});
