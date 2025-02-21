export default class Rule666Validator {
    constructor(stockManager) {
        this.stockManager = stockManager;
    }

    isValid(medication, requestedDoses, day) {
        return medication !== 'W' || this.stockManager.hasSufficientStock(medication, requestedDoses, day);
    }
}