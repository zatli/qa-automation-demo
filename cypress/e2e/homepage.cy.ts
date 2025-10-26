import { DocumentationContent } from '../support/types';

describe('Example Domain QA Automation Demo', () => {
  let content: DocumentationContent;

  
  beforeEach(() => {
    // Load the JSON data from the fixture file
    cy.fixture('content.json').then((data) => {
      // TypeScript uses the imported interface for type safety
      content = data as DocumentationContent;
    });
  });

  it('should successfully load the homepage and verify the main content', () => {
    cy.visit('/');

    // E2E Test 1: Verify Page Title
    cy.title().should('eq', content.pageTitle);

    // E2E Test 2: Verify Main Heading (h1)
    cy.get('h1')
      .should('be.visible')
      .and('have.text', content.mainHeading);

    // E2E Test 3: Verify Documentation Link (The one that was failing due to 'www.')
    cy.get('p > a')
      .should('be.visible')
      .and('have.attr', 'href', content.documentationLink);
  });

  it('should confirm the website service is healthy via cy.request()', () => {
    // API Test: Use cy.request to hit the base URL and check the status code
    cy.request({
      url: '/', // The request automatically uses the baseUrl set in cypress.config.js
      failOnStatusCode: false // Don't fail the test if the status is not 2xx/3xx
    }).then((response) => {
      // Assertions to prove service health
      expect(response.status).to.eq(200);
      expect(response.duration).to.be.lessThan(1000); // Check response time is under 1 second
      expect(response.headers['content-type']).to.include('text/html');
    });
  });
});

// NOTE: In a real project, this interface would live in cypress/support/types.ts
export interface DocumentationContent {
  pageTitle: string;
  mainHeading: string;
  documentationLink: string;
}