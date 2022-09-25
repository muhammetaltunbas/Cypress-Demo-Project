import * as helper from '../../../common/general-helpers'
import * as config from '../../../common/configuration'
import LoginPage from '../../../support/PageObjects/LoginPage'
import HomePage from '../../../support/PageObjects/HomePage'
import CustomerPage from '../../../support/PageObjects/CustomerPage'
import ContactsPage from '../../../support/PageObjects/ContactsPage'
import SalesOrderPage from '../../../support/PageObjects/SalesOrderPage'
var loginPage = new LoginPage()
var homePage = new HomePage()
var customerPage = new CustomerPage()
var contactsPage = new ContactsPage()
var salesOrderPage = new SalesOrderPage()

beforeEach(() => {

    helper.visitPage(Cypress.env('baseUrl') + '/login/')
    loginPage.login(config.username, config.password)
    helper.verifyPage(config.loginPageTitle)
})


describe('Functionality of Customer Feature', function () {

    it('Create A Customer By Using Global + Sign Button', function () {
        homePage.clickPlusButton()
        homePage.clickAddCustomerButton()
        helper.verifyPage(config.customerPageTitle)
        customerPage.fillTheForm(config.customerName, config.email, config.phoneNumber)
        homePage.checkIfProcessIsSuccess()
        homePage.goContactsPage()
        helper.verifyPage(config.contactsPageTitle)
        contactsPage.filterCustomer(config.customerName)
        helper.validateIfElementVisible(config.customerName)
        contactsPage.deleteCustomer(config.customerName)
        
    })

    it('Create A Customer Via Sales Order', function () {
        homePage.clickPlusButton()
        homePage.clickSalesOrderButton()
        helper.verifyUrl(config.salesOrderPageUrl)
        salesOrderPage.addCustomer()
        homePage.checkIfProcessIsSuccess()
        homePage.goContactsPage()
        helper.verifyPage(config.contactsPageTitle)
        contactsPage.filterCustomer(config.customerName)
        helper.validateIfElementVisible(config.customerName)
        contactsPage.deleteCustomer(config.customerName)

    })


    it('Update Customer Email Address', function () {

        homePage.clickPlusButton()
        homePage.clickAddCustomerButton()
        helper.verifyPage(config.customerPageTitle)
        customerPage.fillTheForm(config.customerName, config.email, config.phoneNumber)
        homePage.checkIfProcessIsSuccess()
        homePage.goContactsPage()
        helper.verifyPage(config.contactsPageTitle)
        contactsPage.filterCustomer(config.customerName)
        helper.validateIfElementVisible(config.customerName)
        helper.clickByContains(config.customerName)
        customerPage.updateEmail(config.updatedEmailAddress)
        homePage.goContactsPage()
        helper.verifyPage(config.contactsPageTitle)
        helper.validateIfElementVisible(config.updatedEmailAddress)
        contactsPage.deleteCustomer(config.customerName)

    })

    it('Check Email Area By Using InValid Email Addess', function () {

        homePage.clickPlusButton()
        homePage.clickAddCustomerButton()
        helper.verifyPage(config.customerPageTitle)
        customerPage.fillTheForm(config.customerName, config.inValidEmail, config.phoneNumber)
        homePage.checkIfProcessIsFail()
        homePage.goContactsPage()
        helper.verifyPage(config.contactsPageTitle)
        contactsPage.filterCustomer(config.customerName)
        helper.validateIfElementNotVisible(config.inValidEmail)
        contactsPage.deleteCustomer(config.customerName)
    })
   
    it('Verify If DisplayName Area Is Must', function () {
        
        homePage.clickPlusButton()
        homePage.clickAddCustomerButton()
        helper.verifyPage(config.customerPageTitle)
        customerPage.fillTheNonMandatoryAreas(config.email,config.phoneNumber,config.customerComment)
        homePage.checkIfProcessIsFail()
        homePage.goContactsPage()
        helper.verifyPage(config.contactsPageTitle)
        contactsPage.filterCustomerforNegativeCases(config.customerComment)
        helper.validateIfElementNotVisible(config.customerComment)

    })

    

})

afterEach(() => {

    homePage.logOut()
    helper.verifyPage(config.mainPageTitle)
    cy.clearCookies()

})