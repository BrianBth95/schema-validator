class Validator {
    #typeValidator;

    constructor() {
        // Check if the value is a string
        this.#typeValidator = new Map([
            ['string', value => typeof value === 'string'],
            // Check if the value is a number and not NaN
            ['number', value => typeof value === 'number' && !isNaN(value)],
            // Check if the value is an array
            ['array', value => Array.isArray(value)],
            // Check if the value is an object (excluding arrays) and not null
            ['object', value => typeof value === 'object' && value !== null && !Array.isArray(value)],
            // Check if the value is a boolean
            ['boolean', value => typeof value === 'boolean'],
            // Check if the value is null
            ['null', value => value === null],
            // Check if the value is undefined
            ['undefined', value => value === undefined]
        ]);
    }
    
    /**
     * Validates an object against a schema.
     * @param {object} schema - The schema object containing property types.
     * @param {object} obj - The object to validate.
     * @returns {boolean} - True if the object is valid against the schema, false otherwise.
     * @throws {Error} - If a property defined in the schema is missing in the object.
     * @throws {Error} - If an invalid schema type is encountered.
     */
    validate(schema, obj) {
        try {
            for (const [key, type] of Object.entries(schema)) {
                if (!Object.prototype.hasOwnProperty.call(obj, key)) {
                    throw new Error(`Missing property: ${key}`);
                }
                const validator = this.#typeValidator.get(type);
                if (!validator) {
                    throw new Error(`Invalid schema type: ${type}`);
                }
                if (!validator(obj[key])) {
                    return false;
                }
            }
            return true;
        } catch (error) {
            console.error("Validation error:", error.message);
            return false;
        }
    }
}

module.exports = Validator;