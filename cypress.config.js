const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Configure E2E testing
  e2e: {
    // This defines where Cypress looks for your test files (correctly targets .ts and .js in the e2e folder)
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // This is the base URL for tests that use cy.visit('/')
    baseUrl: 'https://example.com', 
    // FIX: Explicitly disable the support file to fix the CI error, 
    // since we are not using custom commands in this simple demo.
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  // General configuration settings
  video: false, // Turn off video recording for faster CI runs
  reporter: 'spec', // Use the clean spec reporter
});