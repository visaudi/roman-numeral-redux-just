module.exports.convertHinduArabicToRomanNumeral = function (state = {}, action) {
    const romanToHinduArabicConversion = {
        "1": "I",
        "5": "V",
        "10": "X",
        "50": "L"
    };

    function buildRomanNumeral(hinduArabicNumberToConvert, number) {
        return romanToHinduArabicConversion[hinduArabicNumberToConvert] + repeatNumeral(number - hinduArabicNumberToConvert);
    }

    function buildNumeralBeforeNewCharacter(newCharacter) {
        return "I" + newCharacter;
    }

    function repeatNumeral(number) {
        const romanCharacter = romanToHinduArabicConversion[number.toString()];
        if (romanCharacter) {
            return romanCharacter;
        }
        if (number > 5 && number < 9) {
            return buildRomanNumeral(5, number);
        }
        if(number === 40) {
            return "XL";
        }
        if (number > 10) {
            return buildRomanNumeral(10, number);
        }

        const nextRomanNumberEquivalent = number + 1;
        const nextPotentialRomanNumeral = romanToHinduArabicConversion[nextRomanNumberEquivalent.toString()];
        if (nextPotentialRomanNumeral) {
            return buildNumeralBeforeNewCharacter(nextPotentialRomanNumeral);
        }
        return buildRomanNumeral(1, number);
    }
    return {
        romanNumber: repeatNumeral(action.hinduArabicNumber)
    }
};
