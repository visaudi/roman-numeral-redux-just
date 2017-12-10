const {
    convertHinduArabicToRomanNumeral
} = require("./roman-numeral-converter-reducer");


describe("'I's that increase by one and end at three.", function () {
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

describe("I's that increase by one beginning at six and ending in eight", function() {
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

it("translates '14' to XIV", function () {
    expect(convertHinduArabicToRomanNumeral({},{
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 14
    })).toEqual({
        romanNumber: "XIV"
    });
});

it("translates '19' to XIX", function () {
    expect(convertHinduArabicToRomanNumeral({},{
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 19
    })).toEqual({
        romanNumber: "XIX"
    });
});

it("translates '20' to XX", function () {
    expect(convertHinduArabicToRomanNumeral({},{
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 20
    })).toEqual({
        romanNumber: "XX"
    });
});

it("translates '24' to XXIV", function () {
    expect(convertHinduArabicToRomanNumeral({},{
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 24
    })).toEqual({
        romanNumber: "XXIV"
    });
});

it("translates '30' to XXX", function () {
    expect(convertHinduArabicToRomanNumeral({},{
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 30
    })).toEqual({
        romanNumber: "XXX"
    });
});

it("translates '36' to XXXVI", function () {
    expect(convertHinduArabicToRomanNumeral({},{
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 36
    })).toEqual({
        romanNumber: "XXXVI"
    });
});

it("translates '40' to XL", function () {
    expect(convertHinduArabicToRomanNumeral({},{
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 40
    })).toEqual({
        romanNumber: "XL"
    });
});
