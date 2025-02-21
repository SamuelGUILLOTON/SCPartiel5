export default class Rule801Validator {
        isValid(patient, medication) {
        if (medication !== 'X') return true;
        const whiteBloodCellLimit = (patient.protocol === 'Gamma' && !(patient.recurrence && patient.recurrence > 2019)) ? 1500 : 2000;
        return patient.whiteBloodCells > whiteBloodCellLimit;
    }
}
