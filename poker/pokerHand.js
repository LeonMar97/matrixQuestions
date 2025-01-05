




function compareHands(handF, handS){







}

class PokerHand{
    static VALUE_ORDER = "  23456789TJQKA"; 


    constructor(hand) {
        this.cards = hand.split(""); 
        this.sortedValues = this.cards
          .map((v) => PokerHand.VALUE_ORDER.indexOf(v)) 
          .sort((a, b) => b - a); 
      }

    getCountObj() {
        const counts = {};
        this.cards.forEach((v) => (counts[v] = (counts[v] || 0) + 1));
        return counts;
      }
      

      isStraight() {
        for (let i = 0; i < this.sortedValues.length - 1; i++) {
            if (this.sortedValues[i] - this.sortedValues[i + 1] !== 1) return false;
        }
        return true;
    }
     
    


    evaluateRank() {
        const valueCounts = Object.values(this.getValueCounts());


    if (valueCounts.includes(4)) return 7; // Four of a Kind
    if (this.isStraight()) return 6; // Straight
    if (valueCounts.includes(3) && valueCounts.includes(2)) return 5; // Full House
    if (valueCounts.includes(3)) return 4; // Three of a Kind
    if (valueCounts.filter((count) => count === 2).length === 2) return 3; // Two Pair
    if (valueCounts.includes(2)) return 2; // One Pair
    return 1; // High Card
    }

}

