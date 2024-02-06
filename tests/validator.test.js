const Validator = require('../src/validator');

describe('Validator', () => {
    let validator;

    beforeEach(() => {
        validator = new Validator();
    });

    describe('validate()', () => {
        test('should return true for a valid object against schema', () => {
            // Arrange
            const schema = {
                name: 'string',
                age: 'number'
            };
            const obj = {
                name: 'John',
                age: 30
            };

            // Act
            const isValid = validator.validate(schema, obj);

            // Assert
            expect(isValid).toBe(true);
        });

        test('should return false for an invalid object against schema', () => {
            // Arrange
            const schema = {
                name: 'string',
                age: 'number'
            };
            const obj = {
                name: 'John',
                age: 'thirty'
            };

            // Act
            const isValid = validator.validate(schema, obj);

            // Assert
            expect(isValid).toBe(false);
        });

        test('should return false for missing properties', () => {
            // Arrange
            const schema = {
                name: 'string',
                age: 'number'
            };
            const obj = {
                name: 'John'
            };

            // Act
            const isValid = validator.validate(schema, obj);

            // Assert
            expect(isValid).toBe(false);
        });

        test('should return false for invalid schema type', () => {
            // Arrange
            const schema = {
                name: 'string',
                age: 'invalidType'
            };
            const obj = {
                name: 'John',
                age: 30
            };

            // Act
            const isValid = validator.validate(schema, obj);

            // Assert
            expect(isValid).toBe(false);
        });
    });
});
