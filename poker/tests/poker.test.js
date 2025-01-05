
const { compareHands } = require('./main'); 

describe('Poker Hand Comparison', () => {
    test('High card comparison', () => {
        const handL = "KKQQT";  
        const handR = "TJQKA";  
        expect(compareHands(handL, handR)).toBe(-1);  
    });

    test('Two Pair comparison', () => {
        const handL = "KKQQT";  
        const handR = "TJQKA";  
        expect(compareHands(handL, handR)).toBe(1);  
    });

    test('Straight comparison', () => {
        const handL = "23456";  
        const handR = "34567";  
        expect(compareHands(handL, handR)).toBe(-1);  
    });

    test('Four of a Kind comparison', () => {
        const handL = "KKKKT";  
        const handR = "23456";  
        expect(compareHands(handL, handR)).toBe(1);  
    });

    test('Full House comparison', () => {
        const handL = "33322";  
        const handR = "33344";  
        expect(compareHands(handL, handR)).toBe(-1);  
    });
});
