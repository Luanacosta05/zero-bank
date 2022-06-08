/// <reference types="cypress" />
import '../support/commands';
import loc from '../support/locators.js';
import credential from '../fixtures/credentials.json';
import { loginMessage } from '../support/data/messages/login.message';


describe("Smoke Test", () => {

    it('wrong credentials', () => {
        cy.login(credential.email, credential.wrongPassword)
        cy.get(loc.message.wrongCredentialsDiv).should('contain', loginMessage.wrongCredentialsMessage)
        cy.homepage()
    });

    it('Send Feedback', () => {
        cy.feedback()
        cy.get(loc.feedback.SendMessage).click()
        cy.get(loc.feedback.feedbackReturn).should('contain',loginMessage.feedbackMessageReturn)
        cy.homepage()

     });

     it('Test the Clean Button on feedback session', () => {
        cy.feedback()
        cy.get(loc.feedback.cleanButton).click()
        cy.get(loc.feedback.name).should('have.value', '')
        cy.get(loc.feedback.email).should('have.value', '')

    
     });

     it('Visit internal links', () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get(loc.homepage.onlineBanking).click()
        cy.homepage()
        cy.get(loc.homepage.chekingAccountActivity).click()
        cy.homepage()
        cy.get(loc.homepage.transferFundsLink).click
        cy.homepage()
        cy.get(loc.homepage.moneyMap).click()
        cy.homepage()
        cy.get(loc.homepage.moneyMap).click
        cy.homepage()
        cy.get('#online-banking').click()
        cy.title().should('be.equal', 'Zero - Free Access to Online Banking')

     });

});