Cypress.on('uncaught:exception',(err,runnable) =>{
  return false
})

/// <reference types="cypress" />

describe('MyTestSuite', () => {
  it('PositivescenarioTestCaseId -01', () => {
    cy.visit('https://cypress.io/')
    cy.title().should('eq','JavaScript Component Testing and E2E Testing Framework | Cypress')
   
  })
})
