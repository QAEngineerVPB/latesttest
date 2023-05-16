/// <reference types="cypress" />

describe('forwardnbackwards', () => {
    it('Alert-01', () => {
     cy.visit('https://demo.nopcommerce.com/')
    cy.title().should('eq','nopCommerce demo store')
cy.wait(1000)
//Search
cy.get('#small-searchterms').should('be.visible').should('be.enabled').type("HP Spectre XT Pro UltraBook")
cy.get('#small-search-box-form > button').click()
cy.title().should('eq','nopCommerce demo store. Search')

// go back to home screen
cy.go(-1)
cy.title().should('eq','nopCommerce demo store')
//register
cy.get('.ico-register').contains('Reg').click()
cy.title().should('eq','nopCommerce demo store. Register')

cy.get('.ico-wishlist').contains('Wish').click()
cy.title().should('eq','nopCommerce demo store. Wishlist')

cy.go(-2)
cy.title().should('eq','nopCommerce demo store')

cy.go(1)
cy.title().should('eq','nopCommerce demo store. Register')

cy.reload() //page reload

})
})