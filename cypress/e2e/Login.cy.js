describe('empty spec', () => {
    it('login', () => {
      cy.visit('http://payfi-testing-staging.s3-website-eu-west-1.amazonaws.com/')
      cy.get('#amount').type(20000)
      cy.contains('Pay with Payfi').click()
    })
  })

  //#root > div > div > form > div:nth-child(2) > button
