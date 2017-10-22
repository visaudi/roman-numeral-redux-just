module.exports.convertHinduArabicToRomanNumeral = function (state = {}, action) {
    function repeatNumeralI (number) {
        if (number > 3) {
            if (number === 5) {
                return "V";
            }
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
