import React from 'react';
import App from '../App';
import MockData from "../mockData";
import { shallow } from "enzyme";

const mockData = MockData.cards;

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
  let allData = MockData.cards;
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
      localStorageExist: false
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
    const cardWrapper = shallow(<App />)
    cardWrapper.instance().startQuiz();
    expect(cardWrapper.state("currentPlayer")).toEqual(true);
    expect(cardWrapper).toMatchSnapshot();
  });

  it("should match the snapshot where FinalScreen is rendered", () => {
    const finalWrapper = shallow(<App />)
    finalWrapper.setState({
      allCards: mockData,
      currCardIndex: 30
    })
    expect(finalWrapper).toMatchSnapshot();
  });

  it("should change its state when resetQuiz is invoked", () => {
    let dataMock = MockData.cards;
    wrapper.instance().resetQuiz();
    expect(wrapper.state()).toEqual({
      currentPlayer: false,
      originCards: [],
      allCards: [],
      correctCards: [],
      currCardIndex: 0,
      localStorageExist: false
    });
  });

  it("should update the state of originCards with 30 total cards from allCards and update the that localStorageExist to true", () => {
    wrapper.instance().getFromLocalStorage();
    expect(wrapper.state("originCards")).toHaveLength(30);
    expect(wrapper.state("localStorageExist")).toEqual(false);
  });

  it("should remove the number of cards in localStorage which store in correctCards from allCards array when removeCorrectCards is invoked", () => {
    wrapper.setState({
      correctCards: [{
          "id": 102,
          "category": "html",
          "question": "How do you insert a comment in HTML?",
          "correctAnswer": "<!-- A SAMPLE COMMENT -->",
          "answers": [
          "<*-- A SAMPLE COMMENT --*>",
          "<?-- A SAMPLE COMMENT -->",
          "<!-- A SAMPLE COMMENT -->",
          "<-- A SAMPLE COMMENT --!>"]
        },
        {
          "id": 103,
          "category": "html",
          "question": "How do you insert a copyright symbol on a browser page?",
          "correctAnswer": "&copy;",
          "answers": [
          "&copy;",
          "&copyRight;",
          "&copy!",
          "&copySymbol;"]
      }]
    })
    expect(wrapper.state("allCards")).toHaveLength(30);
    wrapper.instance().removeCorrectCards();
    expect(wrapper.state("allCards")).toHaveLength(28);
  });

});
