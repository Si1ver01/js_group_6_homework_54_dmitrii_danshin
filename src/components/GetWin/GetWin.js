class GetWin {
  constructor(bet,combination){
    this.bet  = bet;
    this.combination = combination;
    this.combinationList = {
      royalFlush: 10,
      streetFlush: 9,
      care: 8,
      fullHouse: 7,
      flush: 6,
      street: 5,
      set: 4,
      twoPairs: 3,
      pair: 2,
      highCard : 0
    };
  }

  сountMoney(){
    const bet = this.bet;
    const multiplayer = this.combinationList[this.combination];
    const result = bet * multiplayer;
    console.log(result , 'Count Money()');
    if (result){
      return result;
    } else {
      return -bet;
    }
  }

}

export default GetWin;