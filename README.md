# Cypress Automation Notes

## Overview

This document contains basic Cypress automation concepts, commands, configurations, assertions, locators, and examples.


# Summary

This README contains:

* Cypress basics
* Mocha framework structure
* Assertions
* Locators
* Cypress commands
* Asynchronous handling
* Alias usage
* Logging
* Configuration setup
* Web element testing

---

# 1. Cypress + Mocha Framework

Cypress uses the **Mocha Framework** for structuring tests.

```javascript
describe('Test Suite', () => {

  it('Test Case', () => {

  })

})
```

* `describe()` → Test Suite
* `it()` → Test Case

---

# 2. `cy.visit()`

Used to open/browse a portal URL.

```javascript
cy.visit('https://example.com')
```

---

# 3. Assertions

Used to validate expected behavior.

```javascript
cy.get('.products').should('have.length', 4)
```

---

# 4. Element Visibility Check (jQuery)

Check visible elements using jQuery selector.

```javascript
cy.get('.products:visible').should('have.length', 4)
```

---

# 5. `cypress.config.js` Configurations

```javascript
specPattern: 'cypress/e2e/demoexamples/*.spec.js',

screenshotOnRunFailure: true,

screenshotsFolder: 'cypress/failure/screenshots',

video: true,

videoCompression: 32,

videosFolder: 'cypress/videos'
```

Run Cypress:

```bash
npx cypress run
```

---

# 6. `get()` vs `find()` vs `eq()`

```javascript
cy.get('.products')
  .find('.product')
  .eq(2)
```

### Notes

* `get()` → Searches from entire page scope
* `find()` → Searches within a specific area
* `eq(2)` → Selects the 3rd element (index starts from 0)

---

# 7. `each()` Function

Iterates through listed elements.

```javascript
cy.get('.products')
  .find('.product')
  .each(($e1, index, $list) => {

  })
```

---

# 8. `cy.wrap()`

Used to wrap non-Cypress objects and resolve automation promises.

```javascript
cy.wrap($e1)
  .find('button')
  .click()
```

---

# 9. Cypress Asynchronous Nature

Cypress executes commands asynchronously similar to JavaScript execution flow.

* Executes commands in sequence
* Handles internal waiting automatically

---

# 10. Manual Promise Handling using `then()`

```javascript
cy.get('.brand').then(function(logoelement) {
  cy.log(logoelement.text())
})
```

Used to manually resolve values from Cypress commands.

---

# 11. `cy.log()` with jQuery `text()`

```javascript
cy.log(logoelement.text())
```

### Notes

* `text()` is a jQuery command
* Cypress supports jQuery methods
* Errors like `text() is not a function` happen if object type is incorrect

---

# 12. Alias in Cypress

```javascript
cy.get('.products').as('productsLocator')

cy.get('@productsLocator')
  .find('.product')
```

Aliases are used to reuse locators.

---

# 13. `console.log()` vs `cy.log()`

| Command         | Output Location          |
| --------------- | ------------------------ |
| `console.log()` | Browser DevTools Console |
| `cy.log()`      | Cypress Test Runner      |

---

# 14. Locators in Cypress

```javascript
/*
Attribute            Locator

1. id                #idname
                     or tagname#idname

2. class             .classname
                     Replace spaces with .

3. Tagname           tagname.classname

4. Attribute         tagname[Attribute="Value"]
*/
```

---

# 15. Web Elements Testing

Common web element interactions:

```javascript
cy.get('input').type('Hello')

cy.get('button').click()

cy.get('checkbox').check()

cy.get('radio').check()

cy.get('dropdown').select('Option')
```

---

