/// <reference types="cypress" />

interface ApiResponse {
    status: number;
    body: string;
    headers: { [key: string]: string };
    duration: number;
}

describe('Example Domain QA Automation Demo', () => {
    // Note: The base URL is now set in cypress.config.js
    const API_ENDPOINT = '/'; 

    // --- E2E Test Flow ---
    it('should successfully load the homepage and verify the main content', () => {
        // cy.visit() now defaults to the baseUrl defined in the config
        cy.visit(API_ENDPOINT);

        // Assert the page title is correct
        cy.title().should('include', 'Example Domain');

        // Assert the main heading element is visible and contains the expected text
        cy.get('h1')
          .should('be.visible')
          .and('have.text', 'Example Domain');

        // Verify the instructional link is present
        cy.get('a')
          .should('have.attr', 'href', 'https://www.iana.org/domains/example')
          .and('contain.text', 'More information...');
    });

    // --- API Test Flow (using cy.request) ---
    it('should confirm the website service is healthy via cy.request()', () => {
        // We cast the response to the defined TypeScript interface
        cy.request<ApiResponse>('GET', API_ENDPOINT).then((response) => {
            
            // Assert the HTTP status code is 200 (Success)
            expect(response.status).to.eq(200);

            // Assert the response body contains expected text
            expect(response.body).to.include('Example Domain');

            // Assert the server sent back the correct content type header
            expect(response.headers['content-type']).to.include('text/html');

            // Assert response time is acceptable
            expect(response.duration).to.be.lessThan(500); 
        });
    });
});