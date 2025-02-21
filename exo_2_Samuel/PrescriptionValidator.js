import StockManager from './StockManager.js';
import Rule801Validator from './Rule801Validator.js';
import Rule327Validator from './Rule327Validator.js';
import Rule666Validator from './Rule666Validator.js';

export default class PrescriptionValidator {
    constructor(stock) {
        this.stockManager = new StockManager(stock);
        this.validators = [
            new Rule801Validator(),
            new Rule327Validator(),
            new Rule666Validator(this.stockManager)
        ];
    }

    validatePrescription(patient, medications, day) {
        return this.validators.every(validator => {
            if (validator instanceof Rule327Validator) {
                return validator.isValid(patient, medications, day);
            }
            return medications.every(med => validator.isValid(patient, med, day));
        });
    }
}
