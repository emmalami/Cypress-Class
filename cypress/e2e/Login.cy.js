Cypress.on('uncaught:exception', (err, runnable) => {
    // we expect a Tauri error about the window
    // and don't want to fail the test so we return false
    if (err.message.includes('window.__TAURI_IPC__ is not a function')) {
      return false;
    }
    // we still want to ensure there are no other unexpected
    // errors, so we let them fail the test
  });
  it('passes', () => {
    cy.visit('http://admin-staging.payfi.ng/')
  })
