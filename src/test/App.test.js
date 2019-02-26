import React from 'react';
import App from '../App';
import MockData from "../mockData";
import { shallow } from "enzyme";

const mockData = MockData.cards;

// jest.mock()
// let allInventory = mockData.distributor[0].inventory;
// const mockFunc = jest.fn();

const exampleCard = {
      "id": 101,
      "category": "html",
      "question": "What does HTML stand for?",
      "correctAnswer": "Hyper Text Markup Language",
      "answers": [
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Material Language",
      "Hyper Text Markup Language"]
    }

describe("<App>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );

    wrapper.setState({
      currentPlayer: false,
      originCards: [],
      allCards: mockData,
      correctCards: [],
      currCardIndex: 0,
      localStorageExist: false,
      cardsLeft: 0
    })
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have the following default state", () => {
    expect(wrapper.state()).toEqual({
      currentPlayer: false,
      originCards: [],
      allCards: mockData,
      correctCards: [],
      currCardIndex: 0,
      localStorageExist: false
    });
  });

  it("should change the state of current player to true when startQuiz is invoked", () => {
    expect(wrapper.state("currentPlayer")).toEqual(false);
    wrapper.instance().startQuiz();
    expect(wrapper.state("currentPlayer")).toEqual(true);
  });

  it("should increase the current state of currCardIndex when changeCardIndex paramater is invoked", () => {
    expect(wrapper.state("currCardIndex")).toEqual(0);
    wrapper.instance().changeCardIndex(1);
    expect(wrapper.state("currCardIndex")).toEqual(1);
  });

  it("should increase the length of the current state of correctCards to one when handleChangeCard is invoked", () => {
    let currentCard = exampleCard.correctAnswer;

    expect(wrapper.state("correctCards")).toEqual([]);
    wrapper.instance().handleChangeCard(currentCard);
    expect(wrapper.state("correctCards")).toHaveLength(1);
  });

  it("should invoke changeCardIndex when the handleChangeCard method is called", () => {
    let currentCard = exampleCard.correctAnswer;

    wrapper.instance().changeCardIndex = jest.fn();
    wrapper.instance().handleChangeCard(currentCard);
    expect(wrapper.instance().changeCardIndex).toHaveBeenCalled();
  });

  it("should match the snapshot where CardContainer is rendered", () => {
    const newWrapper = shallow(<App />)
    newWrapper.instance().startQuiz();
    expect(newWrapper.state("currentPlayer")).toEqual(true);


    expect(newWrapper).toMatchSnapshot();


  });

});
