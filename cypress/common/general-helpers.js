export const verifyPage = (pageTitle) => cy.title().should('eq', pageTitle)
export const verifyUrl = (pageUrl) => cy.url().should('eq', pageUrl)

export function clickElement(element) {
  cy.get(element).click()
}

export function clickElementByForcing(element) {
  cy.get(element).click({ force: true })
}

export function clickElementMultiple(element) {
  cy.get(element).click({ multiple: true })
}

export function visitPage (url)
{
  return cy.visit(url)
}

export function sendKey(element,key)
{
  return cy.get(element).clear().type(key)
}
export function clearArea(element)
{
  cy.get(element).clear()
}
export function validateIfElementExistsInDom(element) {
  cy.get('body')
    .then($body => {
      expect($body.find(element).length > 0).to.be.true
    })
}

export function validateIfElementVisible(name) {
  return cy.contains(name).should('be.visible')

}
export function validateIfElementNotVisible(name) {
  return cy.contains(name).should('not.exist')

}

export function clickByContains(name) {
  return cy.contains(name).click({
    force: true
  })

}
