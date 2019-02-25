import React from "react";
import { shallow } from "enzyme";
import App from '../App';
import Header from "../Header";

const correctCards = [{
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
];

describe("Header", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header correctCards={correctCards} />);
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
