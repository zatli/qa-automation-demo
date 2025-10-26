/// <reference types="cypress" />

// Define a simple interface for the API response structure to show TypeScript use
interface ApiResponse {
    status: number;
    body: string;
    headers: { [key: string]: string };
    duration: number;
}

// Define the shape of the data we expect from the content.json fixture
interface ContentFixture {
    mainHeading: string;
    linkText: string;
    linkHref: string;
}

describe('Example Domain QA Automation Demo', () => {
    // Note: The base URL is now set in cypress.config.js
    const API_ENDPOINT = '/'; 
    let content: ContentFixture;

    // Use a beforeEach hook to load the fixture data before any test runs
    beforeEach(() => {
        // Load the content.json file and cast it to our ContentFixture interface
        cy.fixture<ContentFixture>('content.json').then((fixtureData) => {
            content = fixtureData;
        });
    });

    // --- E2E Test Flow ---
    it('should successfully load the homepage and verify the main content', () => {
        // cy.visit() now defaults to the baseUrl defined in the config
        cy.visit(API_ENDPOINT);

        // 1. Assert the page title is correct (using hardcoded value, as page titles are often simple)
        cy.title().should('include', 'Example Domain');

        // 2. Assert the main heading element is visible and uses data from the fixture
        cy.get('h1')
          .should('be.visible')
          .and('have.text', content.mainHeading); // <- Uses fixture data

        // 3. Verify the instructional link is present and uses data from the fixture
        cy.get('a')
          .should('have.attr', 'href', content.linkHref) // <- Uses fixture data
          .and('contain.text', content.linkText);        // <- Uses fixture data
    });

    // --- API Test Flow (using cy.request) ---
    it('should confirm the website service is healthy via cy.request()', () => {
        // We cast the response to the defined TypeScript interface
        cy.request<ApiResponse>('GET', API_ENDPOINT).then((response) => {
            
            // Assert the HTTP status code is 200 (Success)
            expect(response.status).to.eq(200);

            // Assert the response body contains expected text (using fixture data here too!)
            expect(response.body).to.include(content.mainHeading); // <- Uses fixture data

            // Assert the server sent back the correct content type header
            expect(response.headers['content-type']).to.include('text/html');

            // Assert response time is acceptable
            expect(response.duration).to.be.lessThan(500); 
        });
    });
});