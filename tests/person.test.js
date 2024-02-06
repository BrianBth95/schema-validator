// people.test.js

const Validator = require('../src/validator');
const { personSchema, personObj, personObjF } = require('../src/examples/persons');

describe('People Example', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('should validate personObj as true', () => {
        // Arrange & Act
        const isValid = validator.validate(personSchema, personObj);

        // Assert
        expect(isValid).toBe(true);
    });

    test('should validate personObjF as false', () => {
        // Arrange & Act
        const isValid = validator.validate(personSchema, personObjF);

        // Assert
        expect(isValid).toBe(false);
    });
});
