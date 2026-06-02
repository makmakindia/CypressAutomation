// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("JWTlogin", () => {
  cy.request({
    method: "POST",
    url: "https://rahulshettyacademy.com/api/ecom/auth/login",
    body: {
      userEmail: "mkarun1122@gmail.com",
      userPassword: "Nerfly96*",
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    Cypress.env("token", response.body.token);
  });
});
