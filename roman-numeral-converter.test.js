const {
    convertHinduArabicToRomanNumeral
} = require("./roman-numeral-converter-reducer");

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

it("translates '6' to 'VI'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 6
    })).toEqual({
        romanNumber: "VI"
    });
});

it("translates '7' to 'VII'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 7
    })).toEqual({
        romanNumber: "VII"
    });
});
it("translates '8' to 'VIII'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 8
    })).toEqual({
        romanNumber: "VIII"
    });
});

it("translates '9' to 'IX'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 9
    })).toEqual({
        romanNumber: "IX"
    });
});

it("translates '10' to 'X'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 10
    })).toEqual({
        romanNumber: "X"
    });
});

it("translates '11' to 'XI'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 11
    })).toEqual({
        romanNumber: "XI"
    });
});

it("translates '13' to 'XIII'", function () {
    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 13
    })).toEqual({
        romanNumber: "XIII"
    });
});
