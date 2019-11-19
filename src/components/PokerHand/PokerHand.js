class PokerHand {
  constructor(cards) {
    this.cards = cards;

  }

  getOutcome = () => {
    if (this.flush() && this.street() === 1){
      return `royalFlush`;
    } else if (this.flush() && this.street()=== 2){
      return `streetFlush`;
    } else if (this.care()){
      return `care`;
    } else if (this.partsAndTripletAndFullhouse() === 4){
      return `fullHouse`;
    } else if (this.flush()){
      return `flush`;
    } else if (this.street()){
      return `street`;
    } else if (this.partsAndTripletAndFullhouse() === 7){
      return `set`;
    } else if (this.partsAndTripletAndFullhouse() === 8){
      return `twoPairs`
    } else if (this.partsAndTripletAndFullhouse() === 9){
      return `pair`
    } else {
      return `highCard`;
    }
  };

  partsAndTripletAndFullhouse = () =>{
    //Одна пара , две пары , триплет, фулл хаус
    const cards = [...this.cards];
    const combination = cards.filter((elem, index, currentMass) => 1 < currentMass.filter(element => element.ranks === elem.ranks).length)

    if (combination.length === 2){
      return 9;
    } else if (combination.length === 4) {
      return 8;
    } else if (combination.length === 5) {
      return 4;
    } else if (combination.length === 3 ) {
      return 7;
    }

    return false;
  }

  flush(){
    //Flush
    const cards = [...this.cards];
    const combination = cards.filter(elem => cards[0].suit === elem.suit)
    if (combination.length === 5){
      return true;
    }
    return false;
  }

  street(){
    //Street
    const cards = [...this.cards];
    const combination = cards.sort((a,b) => a.weight - b.weight);
    let total = combination.filter((elem,index,currentMass) => {
      if (index < currentMass.length -1 ){
        if (!((elem.weight + 1) - currentMass.find(element => element.weight === currentMass[index+1].weight).weight)){
          return true;
        }
      }
    }).length;

    //Если комбинация от туза до 4
    if(combination[3].weight === 4 && combination[4].weight=== 13){
      total++;
    }
    
    if (total === 4 ){
      //Проверка для роялфлеша
      if (combination[0].weight === 9 && combination[4].weight === 13){
        return 1;   
      } else {
        //ПРосто стрит
        return 2;
      }
    }
    return false;
  }

  care(){
    //care
    const cards = [...this.cards];
    const combination = cards.filter((elem, index, currentMass) => 1 < currentMass.filter(element => element.ranks === elem.ranks).length)
    const check = combination.filter(elem => elem.ranks === combination[0].ranks);

    if (check.length === 4){
      return true;
    }
    return false;
  }

}

export default PokerHand;
