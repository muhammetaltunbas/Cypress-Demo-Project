/// <reference types="Cypress" />

import * as helper from '../../common/general-helpers'
var nameFilter = "[data-testid='nameFilterInput']"
var delCheckbox = "[col-id='checkbox']"
var deleteBtn = "[data-testid='confirmDeleteButton']"
var commentFilter = "[data-testid='commentFilterInput']"




class ContactsPage {


    filterCustomer(name) {
        return helper.sendKey(nameFilter,name)
    }
    filterCustomerforNegativeCases(name)
    {
        helper.clearArea(nameFilter)
        helper.sendKey(commentFilter,name)
        helper.clearArea(commentFilter)
    }

    deleteCustomer(name) {
        helper.clickElementMultiple(delCheckbox)
        helper.clickByContains('Bulk actions')
        helper.clickByContains('Delete')
        helper.clickElementByForcing(deleteBtn)
        helper.validateIfElementNotVisible(name)
        helper.clearArea(nameFilter)
    }
}

export default ContactsPage