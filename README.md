QA Automation Demo Project (Cypress E2E \& API)



This repository serves as a minimal, high-quality demonstration of modern QA automation practices, covering End-to-End (E2E) UI testing, HTTP API status checks, and Continuous Integration (CI) using GitHub Actions.



The project is built to test the public, stable website https://example.com.



🛠️ Tech Stack



Test Runner: Cypress



Language: JavaScript (ES6+)



Package Manager: npm



CI/CD: GitHub Actions



📂 Project Structure



.

├── .github/workflows

│   └── ci.yml             # GitHub Actions Workflow

├── cypress

│   └── e2e

│       └── homepage.cy.js # Main test suite (E2E and API)

├── cypress.config.js      # Cypress Configuration

├── README.md              # This file

└── package.json           # Dependencies





⚙️ Setup and Installation



Clone the Repository:



git clone \[your-repo-url]

cd \[repo-name]





Install Dependencies:

You only need to install Cypress as a dependency.



npm install cypress --save-dev





▶️ How to Run Tests



1\. Run Tests in the Headless Terminal (Recommended)



This is the standard way to execute tests in CI environments and locally for fast runs.



npx cypress run --spec "cypress/e2e/homepage.cy.js"





2\. Run Tests in the Cypress UI



Use the Cypress Test Runner GUI for developing and debugging tests.



npx cypress open





Select E2E Testing and choose homepage.cy.js to run the suite.



🚀 Continuous Integration (CI)



The project is configured with a basic GitHub Actions workflow (.github/workflows/ci.yml).



Tests run automatically on every push to the repository (on any branch).



The job installs dependencies, runs the cypress run command, and outputs the results directly in the Actions tab.



This demonstrates zero-to-one CI setup for immediate test feedback.

