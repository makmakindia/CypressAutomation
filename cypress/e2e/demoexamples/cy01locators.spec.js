/// <reference types="cypress"/>

//mocha testing framework
describe('My First Test Suite',function(){

    it('My First test',function(){

        // write test cases here 

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // cy.get('.product:visible').should('have.length',4); // one way of resolving assertion using jquery method approach
        cy.get('.products').as('productsLocator')
        cy.get('@productsLocator').find('.product').should('have.length',4);

        cy.get('@productsLocator').find('.product')
          .each(($e1,indexedDB,$list)=>{
          
            const textval = $e1.find('h4.product-name').text();
            if(textval.includes("Cashews"))
            {
                
                $e1.find('button').click();

            }

        })
    })
})