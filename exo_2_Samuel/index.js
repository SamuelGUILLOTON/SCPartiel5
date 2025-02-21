import PrescriptionValidator from "./PrescriptionValidator.js"

const stock = { W: 10, X: 5, Y: 3, Z: 3 };
const validator = new PrescriptionValidator(stock);

const patientFalse = {
    whiteBloodCells: 1800,
    protocol: 'Gamma',
    recurrence: 2020,
    geneticMarkers: ['BRCA1']
};

const patientTrue = {
    whiteBloodCells: 3000,
    protocol: 'Gamma',
    recurrence: 2020,
    geneticMarkers: ['BRCA1']
};

console.log(validator.validatePrescription(patientFalse, ['X', 'Y', 'Z'], 'Wednesday'));

console.log(validator.validatePrescription(patientTrue, ['X'], 'Wednesday'));