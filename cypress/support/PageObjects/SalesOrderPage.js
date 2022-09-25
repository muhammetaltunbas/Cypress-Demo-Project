/// <reference types="Cypress" />
import * as config from '../../common/configuration'
import * as helper from '../../common/general-helpers'

var searchCustomer = "[placeholder*='Search']"
var seacrBtnParent = "[role*='combobox']"





class SalesOrderPage {

    addCustomer()
    {
        cy.get(seacrBtnParent).find(searchCustomer).type(config.customerName)
        helper.clickByContains('Create new')
    }

    
    


}

export default SalesOrderPage