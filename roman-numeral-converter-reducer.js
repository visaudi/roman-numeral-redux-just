module.exports.convertHinduArabicToRomanNumeral = function (state = {}, action) {
    function repeatNumeralI (number) {
        if (number === 4) {
            return "IV";
        }
        if (number > 1) {
            return "I" + repeatNumeralI(number - 1);
        }
        return "I";
    }
    return {
        romanNumber: repeatNumeralI(action.hinduArabicNumber) 
    }
};
