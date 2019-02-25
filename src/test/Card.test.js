import React from "react";
import MockData from "../mockData";
import Card from "../Card";
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

const answers = currentCard.answers
const question = currentCard.question;
const onChangeCard = jest.fn();

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card key={currentCard.id}
            currentCard={currentCard}
            onChangeCard={onChangeCard}
            />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
