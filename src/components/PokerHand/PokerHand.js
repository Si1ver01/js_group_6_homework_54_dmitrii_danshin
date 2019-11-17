class PokerHand {
  constructor(cards) {
    this.cards = cards;

  }

  getOutcome = () => {
    if (this.flush() === 5 && this.street() === 1){
      return `royalFlush`;
    } else if (this.flush() === 5 && this.street()=== 2){
      return `streetFlush`;
    } else if (this.care() === 3){
      return `care`;
    } else if (this.partsAndTripletAndFullhouse() === 4){
      return `fullHouse`;
    } else if (this.flush() === 5){
      return `flush`;
    } else if (this.street() === 2){
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
    // console.log("Я получил ", cards);

    const combination = cards.filter((elem, index, currentMass) => {
      if (1 < currentMass.filter(element => element.ranks === elem.ranks).length) {
        return true;
      }
    }).sort((a,b) => a.ranks.charCodeAt() - b.ranks.charCodeAt());
    // console.log("Комбинации - ",combination);


    if (combination.length === 2){
      // console.log('У вас пара' , combination[0].ranks);
      return 9;
    } else if (combination.length === 4) {
      // console.log('У вас две пары из ',combination[0].ranks , ' и ' , combination[2].ranks);
      return 8;
    } else if (combination.length === 5) {
      // console.log("У вас фулхаус из " , combination[0].ranks, ' и ' , combination[4].ranks);
      return 4;
    } else if (combination.length === 3 ) {
      // console.log("У вас триплет из " , combination[0].ranks);
      return 7;
    }

    return false;
  }

  flush(){
    //Flush
    const cards = [...this.cards];
    const combination = cards.filter((elem,index,currentMass) => {
      if (cards[0].suit === elem.suit){
        return true;
      }
    })
    if (combination.length === 5){
      // console.log('У вас флеш из ' , combination[0].suit);
      return 5;
    }
    return false;
  }

  street(){
    //Street
    const cards = [...this.cards];
    const combination = cards.sort((a,b) => a.weight - b.weight);
    let total = combination.filter((elem,index,currentMass) => {
      if (index < currentMass.length -1 ){
        // console.log((elem.weight + 1) - currentMass.find(element => element.weight === currentMass[index+1].weight).weight)
        if (!((elem.weight + 1) - currentMass.find(element => element.weight === currentMass[index+1].weight).weight)){
          return true;
        }
      }
    }).length;

    if(combination[3].weight === 4 && combination[4].weight=== 13){
      total++;
      combination.splice(0,0,...combination.splice(4,1));
    }
    
    // console.log(combination , ' combination')
    // console.log(total, 'total');
    if (total === 4 ){
      if (combination[0].weight === 9 && combination[4].weight === 13){
        // console.log('У вас Роял стрит от ',combination[0].raks , ' до ' , combination[4].raks); 
        return 1;   
      } else {
        // console.log('У вас стрит от ',combination[0].raks , ' до ' , combination[4].raks);    
        return 2;
      }
    }
    return false;
  }

  care(){
    //care
    const cards = [...this.cards];
    // console.log("Я получил ", cards);

    const combination = cards.filter((elem, index, currentMass) => {
      if (1 < currentMass.filter(element => element.ranks === elem.ranks).length) {
        return true;
      }
    });

    const check = combination.filter(elem => elem.ranks === combination[0].ranks);

    if (check.length === 4){
      // console.log('У вас карэ из ', check[0].ranks);
      return 3;
    }
    return false;
  }

}

export default PokerHand;
