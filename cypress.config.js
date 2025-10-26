const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Configure E2E testing
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'https://example.com', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: false,
  reporter: 'spec',
});
module.exports = {}; 
