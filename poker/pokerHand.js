
function compareHands(handF, handS){

    const hand1 = new PokerHand(handF);
    const hand2 = new PokerHand(handS);
  
    const rank1 = hand1.evaluateRank();
    const rank2 = hand2.evaluateRank();
  
    if (rank1 !== rank2) return rank1 > rank2 ? 1 : -1;
  
    else{
        return hand1.compareTieBreaker(hand2)
    }
    

}

class PokerHand{
    static VALUE_ORDER = "  23456789TJQKA"; 
    constructor(hand) {
        this.cards = hand.split(""); 
        this.sortedValues = this.cards
          .map((v) => PokerHand.VALUE_ORDER.indexOf(v)) 
          .sort((a, b) => b - a); 

          this.handComponents = {
            pairs: [],
            triplet: null,
            quad: null,
            kicker: this.sortedValues[0],
          };
        this.evaluateHandComponents();


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
     
    evaluateHandComponents() {
        const valueCounts = this.getCountObj();
    
        for (const [value, count] of Object.entries(valueCounts)) {
          if (count === 4) {
            this.handComponents.quad = value; 
          } else if (count === 3) {
            this.handComponents.triplet = value; 
          } else if (count === 2) {
            this.handComponents.pairs.push(value);
          } 
        }
    
        this.handComponents.pairs.sort((a, b) => PokerHand.VALUE_ORDER.indexOf(b) - PokerHand.VALUE_ORDER.indexOf(a)); 
      }
    


    evaluateRank() {
        const valueCounts = Object.values(this.getCountObj());
        if (valueCounts.includes(4)) return 7; // Four of a Kind
        if (this.isStraight()) return 6; // Straight
        if (valueCounts.includes(3) && valueCounts.includes(2)) return 5; // Full House
        if (valueCounts.includes(3)) return 4; // Three of a Kind
        if (valueCounts.filter((count) => count === 2).length === 2) return 3; // Two Pair
        if (valueCounts.includes(2)) return 2; // One Pair
        return 1; // High Card
    }

    compareTieBreaker(otherHand) {
        const rank = this.evaluateRank();
    
        if (rank === 7) {
          if (this.handComponents.quad > otherHand.handComponents.quad) return 1;
          if (this.handComponents.quad < otherHand.handComponents.quad) return -1;
        }
    
        if (rank === 6) {
          if (this.sortedValues[0] > otherHand.sortedValues[0]) return 1;
          if (this.sortedValues[0] < otherHand.sortedValues[0]) return -1;
        }
    
        if (rank === 5) {
          if (this.handComponents.triplet > otherHand.handComponents.triplet) return 1;
          if (this.handComponents.triplet < otherHand.handComponents.triplet) return -1;
          if (this.handComponents.pairs[0] > otherHand.handComponents.pairs[0]) return 1;
          if (this.handComponents.pairs[0] < otherHand.handComponents.pairs[0]) return -1;
        }
    
        if (rank === 4) {
         
          if (this.handComponents.triplet > otherHand.handComponents.triplet) return 1;
          if (this.handComponents.triplet < otherHand.handComponents.triplet) return -1;
          
        }
    
        if (rank === 3) {

          if (this.handComponents.pairs[0] > otherHand.handComponents.pairs[0]) return 1;
          if (this.handComponents.pairs[0] < otherHand.handComponents.pairs[0]) return -1;
          if (this.handComponents.pairs[1] > otherHand.handComponents.pairs[1]) return 1;
          if (this.handComponents.pairs[1] < otherHand.handComponents.pairs[1]) return -1;
        }
    
        if (rank === 2) {
          if (this.handComponents.pairs[0] > otherHand.handComponents.pairs[0]) return 1;
          if (this.handComponents.pairs[0] < otherHand.handComponents.pairs[0]) return -1;
        }
    
        
         if (this.handComponents.kicker>otherHand.handComponents.kicker){
            return 1;

         }
         else if (this.handComponents.kicker<otherHand.handComponents.kicker){
            return -1;
         }
        return 0; // Tie
      }


}

let handL="KKQQT"
let handR="TJQKA"

console.log(compareHands(handL,handR))

