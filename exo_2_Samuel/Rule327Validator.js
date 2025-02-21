export default class Rule327Validator {
    isValid(patient, medications, day) {
        if (!(medications.includes('Y') && medications.includes('Z'))) return true;
        return patient.geneticMarkers.includes('BRCA1') || day === 'Wednesday';
    }
}