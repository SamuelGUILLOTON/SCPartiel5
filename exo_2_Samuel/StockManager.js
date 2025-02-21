export default class StockManager {
    constructor(stock) {
        this.stock = stock;
    }

    hasSufficientStock(medication, requestedDoses, day) {
        const emergencyReserve = 3;
        const weekendSafetyMargin = ['Saturday', 'Sunday'].includes(day) ? 1.2 : 1;
        return this.stock[medication] >= (emergencyReserve + requestedDoses * weekendSafetyMargin);
    }
}

