import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList/CardList.jsx";
import CardGenerator from "./components/CarGenerator/CardGenerator.js";
import PokerHand from "./components/PokerHand/PokerHand.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.deck = new CardGenerator();
    this.cards = this.deck.getMoreCards(5);
    // this.combination = new PokerHand(this.cards).getOutcome();
    this.state = {
      cards: this.cards,
      quantityDraw: 0,
      drawing: true,
      combination: new PokerHand(this.cards).getOutcome()
    };
    console.log('Конструктор - зис кард', this.cards)
    console.log('Конструктор - стейт кард ',this.state.cards);
  }

  selectCard = index => {
    const cards = [...this.state.cards];
    cards[index].selected = !cards[index].selected;
    const quantityDraw = cards.filter(elem => elem.selected).length;
    this.setState({ cards, quantityDraw });
  };

  drawCard = () => {
    const cards = [...this.state.cards];
    const newCards = cards.filter(elem => !elem.selected);
    newCards.splice(
      newCards.length,
      0,
      ...this.deck.getMoreCards(5 - newCards.length)
    );
    console.log(newCards);
    this.setState({
      cards: newCards,
      drawing: false,
      combination: new PokerHand(newCards).getOutcome()
    });
  };

  render() {
    console.log(this.state.cards);
    console.log(this.deck);
    console.log(this.state.combination, "----Комбинация----");
    return (
      <div className="App py-5">
        <CardList
          cards={this.state.cards}
          selectCard={this.selectCard}
          combination={this.state.combination}
        />
        {this.state.drawing ? (
          <button className="btn btn-primary my-2" onClick={this.drawCard}>
            Draw card ({this.state.quantityDraw})
          </button>
        ) : null}
      </div>
    );
  }
}

export default App;
