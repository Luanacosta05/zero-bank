import credential from '../fixtures/credentials.json';
import loc from './locators.js'



Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.get(loc.login.signinButton).click()
    cy.get(loc.login.emailField).type(credential.email)
    cy.get(loc.login.passwordField).type(credential.password)
    cy.get(loc.login.btnLogin).click()    
})


Cypress.Commands.add('homepage', () => {
        cy.get('.brand').click()

    })


Cypress.Commands.add('feedback', (name, email, subject, comment) => {
    cy.visit('http://zero.webappsecurity.com/')
    cy.get(loc.feedback.feedbackButton).click()
    cy.get(loc.feedback.name).type(credential.name)
    cy.get(loc.feedback.email).type(credential.email)
    cy.get(loc.feedback.subject).type('Teste')
    cy.get(loc.feedback.comment).type('Teste')


    })



  