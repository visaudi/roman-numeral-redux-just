module.exports.convertHinduArabicToRomanNumeral = function (state = {}, action) {
    const romanToHinduArabicConversion = {
        "1": "I",
        "5": "V",
        "10": "X" 
    };

    function buildRomanNumeral (startingCharacterPair, number) {
        return startingCharacterPair.romanNumeral + repeatNumeralI(number - startingCharacterPair.hinduArabicNumeral);
    }
    function buildNumeralBeforeNewCharacter (newCharacter) {
        return "I" + newCharacter;
    }
    function repeatNumeralI (number) {
        const romanCharacter = romanToHinduArabicConversion[number.toString()];
        if (romanCharacter) {
            return romanCharacter;
        }
        if (number > 3) {
            if (number > 5 && number < 9) {
                return buildRomanNumeral({
                    romanNumeral: "V",
                    hinduArabicNumeral: 5
                }, number);
            }	
            if (number === 9) {
                return buildNumeralBeforeNewCharacter("X"); 
            }
            return buildNumeralBeforeNewCharacter("V"); 
        }
        return buildRomanNumeral({
            romanNumeral: "I",
            hinduArabicNumeral: 1
        }, number);
    }
    return {
        romanNumber: repeatNumeralI(action.hinduArabicNumber) 
    }
};
