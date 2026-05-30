# Cypress Topics Summary

---

S.No Topic Description

---

1 Cypress + Mocha `describe()` = Test Suite, `it()` = Test Case
Framework

2 `cy.visit()` Used to browse/open application URL.

3 Assertions `cy.get('.products').should('have.length',4)`

4 Element Visibility `cy.get('.products:visible').should('have.length',4)`
Check

5 `cypress.config.js` Configure specPattern, screenshots, videos, folders,
retries, etc.

6 `get()`, `find()`, `get()` searches page level, `find()` searches within
`eq()` parent element, `eq(2)` selects the 3rd element.

7 `each()` Iterates through all matching elements.

8 `cy.wrap()` Converts jQuery element into Cypress chainable object.

9 Cypress Asynchronous Commands are queued and executed sequentially by
Nature Cypress.

10 Manual Promise Use `.then()` to access returned values and perform
Handling actions.

11 jQuery `text()` Access element text inside `.then()`.

12 Alias Reuse locators using `.as()` and `@alias`.

13 `console.log()` vs Browser console vs Cypress Test Runner logs.
`cy.log()`

14 Locators ID, Class, Tag+Class, Attribute locators.

15 Web Elements Testing Dropdowns, Dynamic Dropdowns, Checkboxes, Radio
Buttons.

16 Visible / Invisible `be.visible`, `not.be.visible`.
Checks

17 Alerts & Handle using `window:alert` and `window:confirm`.
Confirmations

18 Child Tabs Handling Use `invoke('removeAttr','target')` and `cy.origin()`.

19 Web Tables Iterate rows and validate values.

20 Mouse Hover Use `invoke('show')` or `click({force:true})`.

21 iFrame Handling Use `cy.frameLoaded()` and `cy.iframe()`.

22 End-to-End (E2E) Flow Product selection, cart validation, checkout.

23 Fixtures Read test data using `cy.fixture()`.

24 Page Object Model Reusable and maintainable automation framework.
(POM)

25 Mochawesome Reporter HTML reports with screenshots and logs.

26 Cypress Cloud Record runs using `--record --key`.
Integration

27 `package.json` Reusable execution commands.
Scripts

28 Jenkins Integration CI/CD execution of Cypress tests.

29 BDD Framework `cypress-cucumber-preprocessor`.

30 Cucumber HTML Reports Generate HTML reports from Cucumber results.

---

## Quick Commands Reference

Feature Example

---

Open URL `cy.visit('https://example.com')`
Assertion `should('have.length',4)`
Alias `cy.get('.products').as('products')`
Iterate Elements `each(($el,index)=>{})`
Handle Promise `.then((el)=>{})`
Wrap Element `cy.wrap($el)`
Dropdown `.select('option2')`
Checkbox `.check()`
Alert `cy.on('window:alert', callback)`
Child Tab `.invoke('removeAttr','target')`
iFrame `cy.frameLoaded()` + `cy.iframe()`
Fixture `cy.fixture('example')`
Cloud Run `npx cypress run --record --key <key>`
Jenkins Run `npm ci && npx cypress verify && npm run test`
Mochawesome `npm install --save-dev cypress-mochawesome-reporter`
Cucumber `npm install --save-dev cypress-cucumber-preprocessor`
