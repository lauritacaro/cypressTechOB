describe('Test case to search something', () => {
  
  it('Search Apple', () => {
    cy.visit('https://google.es');
    cy.get('[id="L2AGLb"]').click();
    cy.get('input[name="q"]').type("Apple{enter}");

    cy.get('#result-stats').then(($element) => {

      const txt = $element.text()

      const numtxt = txt.replace(/\D/g, "");
      const num = Number(numtxt);


      expect(num).to.be.greaterThan(100000);
      expect(num).to.not.be.lessThan(10000)
    })

  })
})