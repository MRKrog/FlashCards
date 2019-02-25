import React from "react";
import CardContainer from "../CardContainer";
import MockData from '../mockData';
import { shallow } from "enzyme";

const currentCard = {
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

const onChangeCard = jest.fn();

describe("CardContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardContainer currentCard={currentCard}
                     onChangeCard={onChangeCard}
                    />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
