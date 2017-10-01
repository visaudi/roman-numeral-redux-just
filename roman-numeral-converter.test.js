const {convertRomanToHinduArabicNumeral} = require("./roman-numeral-converter-reducer");

it("translates a Hindu-Arabic numeral to its Roman numeral equivalent.", function () {

    expect(convertRomanToHinduArabicNumeral({}, {
        type: "ROMAN_TO_INTEGER",
        hinduArabicNumber: "i"
    })).toEqual({
        romanNumber: 1
    });;

});
