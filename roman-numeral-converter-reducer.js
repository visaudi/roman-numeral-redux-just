module.exports.convertHinduArabicToRomanNumeral = function (state = {}, action) {
    const romanToHinduArabicConversion = {
        "1": "I",
        "5": "V",
        "10": "X"
    };

    function buildRomanNumeral(hinduArabicNumberToConvert, number) {
        return romanToHinduArabicConversion[hinduArabicNumberToConvert] + repeatNumeralI(number - hinduArabicNumberToConvert);
    }

    function buildNumeralBeforeNewCharacter(newCharacter) {
        return "I" + newCharacter;
    }

    function repeatNumeralI(number) {
        const romanCharacter = romanToHinduArabicConversion[number.toString()];
        if (romanCharacter) {
            return romanCharacter;
        }
        if (number > 5 && number < 9) {
            return buildRomanNumeral(5, number);
        }
        if (number === 11) {
            return "XI"
        }
        const nextRomanNumberEquivalent = number + 1;
        const nextPotentialRomanNumeral = romanToHinduArabicConversion[nextRomanNumberEquivalent.toString()];
        if (nextPotentialRomanNumeral) {
            return buildNumeralBeforeNewCharacter(nextPotentialRomanNumeral);
        }
        return buildRomanNumeral(1, number);
    }
    return {
        romanNumber: repeatNumeralI(action.hinduArabicNumber)
    }
};
