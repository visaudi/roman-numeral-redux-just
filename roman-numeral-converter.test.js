const {convertHinduArabicToRomanNumeral} = require("./roman-numeral-converter-reducer");

it("translates a Hindu Arabic numeral to its Roman numeral equivalent.", function () {

    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 1 
    })).toEqual({
        romanNumber: "I"
    });

});

it("translates '2' to 'II'.", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 2
    })).toEqual({
        romanNumber: "II"
    });
});

it("translates '3' to 'III'.", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 3
    })).toEqual({
        romanNumber: "III"
    });
});

it("translates '4' to 'IV'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
	hinduArabicNumber: 4
    })).toEqual({
        romanNumber: "IV"
    });
});

it("translates '5' to 'V'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 5
    })).toEqual({
        romanNumber: "V"
    });
});

