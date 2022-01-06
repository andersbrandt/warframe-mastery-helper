describe("API", () => {

  it("Assert API", () => {
    //
    //  Login
    //
    cy.login();

    //
    //  Assert item data for Acceltra (Regular)
    //
    cy.get(".item.item-checked").should("have.length", "1").and("be.visible");
    cy.get('[data-name="Acceltra"]').should("have.length", 1);
    cy.window().then((win) => {
      let acceltraData = win.app.item.getDataByName("Acceltra");
      expect(acceltraData.name).to.equal("Acceltra");
      expect(acceltraData.checked).to.equal(true);
      expect(acceltraData.unobtainable).to.equal(false);
      expect(acceltraData.trigger).to.equal("Auto");
      expect(acceltraData.category).to.equal("Rifle");
      expect(acceltraData.type).to.equal("Primary");
      expect(acceltraData.component).to.equal(false);
      expect(acceltraData.uniqueName).to.equal("/Lotus/Weapons/Tenno/LongGuns/SapientPrimary/SapientPrimaryWeapon");
      expect(acceltraData.wikiaUrl).to.equal("https://warframe.fandom.com/wiki/Acceltra");
    });

    //
    // Assert getItemByName for Skana Prime (Unobtainable)
    //
    // cy.get('[data-name="Skana Prime"]').should("have.length", 1);
    // cy.window().then((win) => {
    //   let skanaPrimeData = win.app.item.getDataByName("Skana Prime");
    //   expect(skanaPrimeData.name).to.equal("Skana Prime");
    //   expect(skanaPrimeData.checked).to.equal(false);
    //   expect(skanaPrimeData.unobtainable).to.equal(true);
    // });

    //
    //  Assert 'Acceltra' are checked
    //
    cy.get('[data-name="Acrid"]').find(".icon-check-empty").should("have.length", 1).and("be.visible");
    cy.window().then((win) => {
      let data = win.app.storage.list();
      expect(data).to.eql(["Acceltra"]);
    });
    cy.get("#checked-items-value").should("have.text", "1");
    
    //
    //  Check an additional item 'Acrid'
    //
    cy.get('[data-name="Acrid"]').find(".icon-check-empty").click({force: true});
    cy.window().then((win) => {
      let data = win.app.storage.list();
      expect(data).to.eql(["Acceltra", "Acrid"]);
    });
    cy.get("#checked-items-value").should("have.text", "2");

    //
    //  Uncheck item 'Acrid'
    //
    cy.get('[data-name="Acrid"]').find(".icon-check").click({force: true});
    cy.window().then((win) => {
      let data = win.app.storage.list();
      expect(data).to.eql(["Acceltra"]);
    });
    cy.get("#checked-items-value").should("have.text", "1");
  })
});
