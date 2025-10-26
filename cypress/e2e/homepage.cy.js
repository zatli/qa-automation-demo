/// <reference types="cypress" />

describe('Example Domain QA Automation Demo', () => {
    const URL = 'https://example.com';

    // --- E2E Test Flow ---
    it('should successfully load the homepage and verify the main content', () => {
        // 1. Visit the target website
        cy.visit(URL);

        // 2. Assert the page title is correct
        cy.title().should('include', 'Example Domain');

        // 3. Assert the main heading element is visible and contains the expected text
        cy.get('h1')
          .should('be.visible')
          .and('have.text', 'Example Domain');

        // 4. Verify the instructional link is present
        cy.get('a')
          .should('have.attr', 'href', 'https://www.iana.org/domains/example')
          .and('contain.text', 'More information...');
    });

    // --- API Test Flow (using cy.request) ---
    // This simulates a programmatic check of the service without rendering the UI,
    // demonstrating ability to test non-UI components (e.g., microservices, endpoints).
    it('should confirm the website service is healthy via cy.request()', () => {
        cy.request('GET', URL).then((response) => {
            // 1. Assert the HTTP status code is 200 (Success)
            expect(response.status).to.eq(200);

            // 2. Assert the response body contains expected text (basic content check)
            expect(response.body).to.include('Example Domain');

            // 3. Assert the server sent back the correct content type header
            expect(response.headers['content-type']).to.include('text/html');

            // 4. Assert response time is acceptable (a good QA metric)
            expect(response.duration).to.be.lessThan(500); // Response should be fast
        });
    });
});