const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Configure E2E testing
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // This is the base URL for tests that use cy.visit('/')
    baseUrl: 'https://example.com', 
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  // General configuration settings
  video: false, // Turn off video recording for faster CI runs
  reporter: 'spec', // Use the clean spec reporter
});