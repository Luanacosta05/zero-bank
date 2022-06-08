import './commands'

Cypress.Screenshot.defaults({
    screenshotOnRunFailure: true
});

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
});

Cypress.on("fail", (error, runnable) => {
    debugger;
    throw error;
});