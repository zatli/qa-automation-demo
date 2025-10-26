QA Automation Demo: Cypress, TypeScript & CI/CD

[![Cypress CI Status](https://github.com/zatli/qa-automation-demo/actions/workflows/ci.yml/badge.svg)](https://github.com/zatli/qa-automation-demo/actions/workflows/ci.yml)

Project Overview

This project serves as a minimal, professional demonstration of modern QA automation skills, covering essential End-to-End (E2E) testing, API service checks, and continuous integration using Cypress and GitHub Actions.

Goal: To test the stability and core content of https://example.com.

Technology Stack

Testing Framework: Cypress

Language: TypeScript

CI/CD: GitHub Actions

Data: Fixture files (.json)

Prerequisites

Node.js (LTS version)

Git

How to Run Locally

Clone the repository:

  git clone https://github.com/zatli/qa-automation-demo

  cd qa-automation-demo



Install dependencies:

  npm install



Run E2E tests in headless mode (terminal):

  npx cypress run



Open Cypress Test Runner (to see the browser running the tests):

  npx cypress open



CI/CD Pipeline

The ci.yml workflow automatically runs the tests on every push to the main branch.

Artifacts: If a test fails, the workflow is configured to upload screenshots and video recordings of the failure as build artifacts, which is a key debugging feature.
