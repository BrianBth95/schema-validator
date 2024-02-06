const Validator = require('../src/validator');
const { barSchema, barObj, barObjF } = require('../src/examples/bars');

describe('Bars Example', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('should validate barObj as true', () => {
        // Arrange & Act
        const isValid = validator.validate(barSchema, barObj);

        // Assert
        expect(isValid).toBe(true);
    });

    test('should validate barObjF as false', () => {
        // Arrange & Act
        const isValid = validator.validate(barSchema, barObjF);

        // Assert
        expect(isValid).toBe(false);
    });
});
