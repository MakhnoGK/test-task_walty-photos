export {};

describe('Main page tests', () => {
  it('should visit main page', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Walty');
    cy.get('.sc-hKgILt.jaYWgj').contains('tulips');
  });

  it('should handle tag input', () => {
    cy.get('input').type('flower{enter}');

    cy.url().should('include', '/flower');
    cy.get('[data-testid=tag-element]');
  });

  it('should remove tag', () => {
    cy.get('[data-testid=tag-clean-element').click();
    cy.url().should((url: any) => {
      expect(url).to.equal('http://localhost:3000/');
    });
  });

  it('should go to tag', () => {
    cy.get('.sc-eCssSg.lcRtdq').then((links) => {
      links[0].click();
      cy.url().should('include', '/roses');
      cy.get('[data-testid=tag-element]');
    });
  });
});
