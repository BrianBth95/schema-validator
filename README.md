
# Validator Project

## Overview
The Validator project provides a simple utility for validating objects against a schema. It includes a `Validator` class that allows you to define a schema and validate objects against it.

## Solution Approach
The `Validator` class leverages JavaScript's object-oriented features and the `Map` data structure for efficient type validation. It supports various data types such as strings, numbers, arrays, objects, booleans, null, and undefined.

## Frameworks Used
- JavaScript
- Jest (for unit testing)

## Installation
To run the Validator project locally, follow these steps:

1. Clone the repository:
   git clone <repository-url>

2. Navigate to the project directory:
   cd validator-project

3. Install dependencies:
   npm install

## Running the Project
To run the project and execute the unit tests, use the following command:
npm test

This will trigger Jest to run all the test files, including `validator.test.js`, to ensure the correctness of the `Validator` class.

## Test Scenarios
The unit tests defined in `validator.test.js` cover various scenarios to validate the functionality of the `Validator` class. These scenarios include:
- Validating objects against a schema.
- Handling missing properties in objects.
- Handling invalid schema types.
- Validating provided examples (`bars.js`, `cars.js`, `person.js`) located in the `src/examples` directory, where each appropriate unit test uses the corresponding JavaScript file for testing.