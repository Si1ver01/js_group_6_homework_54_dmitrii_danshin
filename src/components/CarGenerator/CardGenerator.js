
class CardGenerator {
  constructor(){
    this.cards = [];
    this.rank = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    this.weight = [1,2,3,4,5,6,7,8,9,10,11,12,13]
    this.suit = ["h","d","k","s"];
    for (let index = 0; index < 13; index++) {
      for (let subIndex = 0; subIndex < 4; subIndex++) {
        this.cards.push({'ranks':this.rank[index],'suit': this.suit[subIndex],'weight': this.weight[index],'selected': false})
      }
    }
  }

  getOneCard(){
    const randomNubmer = Math.floor(Math.random()*this.cards.length);
    const randomCard = this.cards[randomNubmer];
    this.cards.splice(randomNubmer,1);
    return randomCard;
  }

  getMoreCards(quantity){
    const pickCards = []
    for (let index = 0; index < quantity; index++) {
      pickCards.push(this.getOneCard());
    }
    return pickCards;
  }
}

export default CardGenerator;