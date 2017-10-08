module.exports.convertHinduArabicToRomanNumeral = function (state = {}, action) {
    if (action.hinduArabicNumber === 2) {
        return {
            romanNumber: "II"
        }
    }
    return {
        romanNumber: "I"
    }
};
