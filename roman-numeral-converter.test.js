const {convertHinduArabicToRomanNumeral} = require("./roman-numeral-converter-reducer");

it("translates a Hindu Arabic numeral to its Roman numeral equivalent.", function () {

    expect(convertHinduArabicToRomanNumeral({}, {
        type: "INTEGER_TO_ROMAN",
        hinduArabicNumber: 1 
    })).toEqual({
        romanNumber: "I"
    });;

});
