/// <reference types="Cypress" />
import * as helper from '../../common/general-helpers'

var plusBtn = "#globalAdd"
var popup = "[data-testid*='closeFailureDialogButton']"
var account = "[data-testid*='userInfoContainer']"
var logOutBtn = "[id*='logout']"
var customerBtn = "[id*='customer']"
var contactsPageBtn = "[id='contactsTab']"
var salesOrderBtn = "[id='add-sales']"
var label = "[class*='katana-label']"


class HomePage {


    clickPlusButton() {
        return helper.clickElementByForcing(plusBtn)
    }
    logOut() {
        helper.clickElementByForcing(account)
        helper.clickByContains('Logout')
    }
    closeErrorPopup() {
        return cy.get(popup)
    }
    clickAddCustomerButton() {
        return helper.clickElement(customerBtn)
    }

    goContactsPage() {
        return helper.clickElement(contactsPageBtn)
    }
    clickSalesOrderButton() {
        return helper.clickElement(salesOrderBtn)
    }

    registrationInfo() {
        return cy.get(label)
    }

    checkIfProcessIsSuccess() {
        this.registrationInfo().should('have.text', 'All changes saved')
    }

    checkIfProcessIsFail() {
        this.registrationInfo().should('have.text', 'Not saved')
    }


}

export default HomePage