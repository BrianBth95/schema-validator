
const Validator = require('../src/validator');
const { carSchema, carObj, carObjF } = require('../src/examples/cars');

describe('Cars Example', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    test('should validate carObj as true', () => {
        // Arrange & Act
        const isValid = validator.validate(carSchema, carObj);

        // Assert
        expect(isValid).toBe(true);
    });

    test('should validate carObjF as false', () => {
        // Arrange & Act
        const isValid = validator.validate(carSchema, carObjF);

        // Assert
        expect(isValid).toBe(false);
    });
});
