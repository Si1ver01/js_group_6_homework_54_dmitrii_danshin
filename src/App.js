import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.jsx";
import BetButton from './components/BetButton/BetButton.jsx'
import CardGenerator from "./components/CarGenerator/CardGenerator.js";
import PokerHand from "./components/PokerHand/PokerHand.js";
import GetWin from './components/GetWin/GetWin.js'
import WinTable from './components/WinTable/WinTable.jsx'
import DrawBtn from './components/DrawBtn/DrawBtn.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.deck = null;
    this.state = {
      cards: null,
      quantityDraw: 0,
      drawing: false,
      drawBetButton : true ,
      drawCard : false ,
      combination : null,
      bet: null,
      money : 100,
    };
  }

  betting = number => {
    const bet = number;
    this.deck = new CardGenerator();
    const cards = this.deck.getMoreCards(5);
    const combination = new PokerHand(cards).getOutcome();
    const drawing = !this.state.drawing;
    const drawBetButton = !this.state.drawBetButton;
    this.setState({bet,cards,combination,drawing,drawBetButton,drawCard:true})
  }

  selectCard = index => {
    const cards = [...this.state.cards];
    cards[index].selected = !cards[index].selected;
    const quantityDraw = cards.filter(elem => elem.selected).length;
    this.setState({ cards, quantityDraw });
  };

  drawCard = () => {
    const cards = [...this.state.cards];
    const newCards = cards.map(elem => elem.selected ? this.deck.getOneCard() : elem)
    const bet = this.state.bet;
    const combination = new PokerHand(newCards).getOutcome();
    let money = this.state.money;
    const moneyWin = new GetWin(bet,combination).сountMoney();
    money += moneyWin;
    this.setState({
      cards: newCards,
      drawing: false,
      combination ,
      money,
      drawBetButton : true
    });
  };

  pickWin = () => {
    const bet = this.state.bet;
    let money = this.state.money;
    const moneyWin = new GetWin(bet,this.state.combination).сountMoney();
    money += moneyWin;
    this.setState({
      drawing: false,
      money,
      drawBetButton : true
    });
  }

  render() {
    return (
      <div className="App py-5">
        <WinTable bet={this.state.bet} combination={this.state.combination}/>
        <p className='my-1'>Money : {this.state.money} <i className="fas fa-dollar-sign green-text"></i></p>
        
        {this.state.drawBetButton ? <BetButton betting={this.betting}/> : null}
        {this.state.drawCard ?<CardList
          cards={this.state.cards}
          selectCard={this.selectCard}
          combination={this.state.combination}
          drawCard={this.state.drawCard}
        /> : null}

        <DrawBtn quantityDraw={this.state.quantityDraw} drawCard={this.drawCard} drawing={this.state.drawing} pickWin={this.pickWin}/>
      </div>
    );
  }
}

export default App;
