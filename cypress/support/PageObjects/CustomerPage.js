/// <reference types="Cypress" />

var firstName = "[name='firstName']"
var email = "[name='email']"
var phone = "[name='phone']"
var billingAddress = "[data-testid*='BillingAddress']"
var comment = "[name='comment']"



class CustomerPage {


    emailArea() {
        return cy.get(email)
    }
    firstNameArea() {
        return cy.get(firstName)
    }
    phoneArea() {
        return cy.get(phone)
    }
    billingAddressArea() {
        return cy.get(billingAddress)
    }
    commentArea() {
        return cy.get(comment)
    }


    fillTheForm(customerName, customerEmail, customerPhone) {
        this.firstNameArea()
            .type(customerName)
            .should('have.attr', 'maxlength', '100')
            .and('have.value', customerName)

        this.emailArea()
            .type(customerEmail)
            .should('have.attr', 'type', 'email')
            .and('have.value', customerEmail)
        this.phoneArea()
            .focus().clear()
            .type(customerPhone)
            .should('have.attr', 'type', 'phone')
            //.and('have.value', customerPhone)
            .type('{enter}')
    }
    updateEmail(emailAddress) {
        this.emailArea().clear()
        this.emailArea().type(emailAddress).should('have.value', emailAddress).type('{enter}')
    }

    fillTheNonMandatoryAreas(customerEmail, customerPhone, customerComment) {
        this.emailArea()
            .type(customerEmail)
            .should('have.attr', 'type', 'email')
            .and('have.value', customerEmail)
        this.phoneArea()
            .focus().clear()
            .type(customerPhone)
            .should('have.attr', 'type', 'phone')
        this.commentArea()
            .type(customerComment)
            .should('have.attr', 'type', 'text')
            .and('have.value', customerComment)
            .type('{enter}')
    }


}

export default CustomerPage