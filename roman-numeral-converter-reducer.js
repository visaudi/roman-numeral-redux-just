module.exports.convertHinduArabicToRomanNumeral = function (state = {}, action) {
    function buildRomanNumeral (startingCharacterPair, number) {
        return startingCharacterPair.romanNumeral + repeatNumeralI(number - startingCharacterPair.hinduArabicNumeral);
    }
    function buildNumeralBeforeNewCharacter (newCharacter) {
        return "I" + newCharacter;
    }
    function repeatNumeralI (number) {
        if (number === 10) {
            return "X";
        }
        if (number > 3) {
            if (number > 5 && number < 9) {
                return buildRomanNumeral({
                    romanNumeral: "V",
                    hinduArabicNumeral: 5
                }, number);
            }	
            if (number === 5) {
                return "V";
            }
            if (number === 9) {
                return buildNumeralBeforeNewCharacter("X"); 
            }
            return buildNumeralBeforeNewCharacter("V"); 
        }
        if (number > 1) {
            return buildRomanNumeral({
                romanNumeral: "I",
                hinduArabicNumeral: 1
            }, number);
        }
        return "I";
    }
    return {
        romanNumber: repeatNumeralI(action.hinduArabicNumber) 
    }
};
