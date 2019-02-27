import React from 'react';
import FinalScreen from '../FinalScreen';
import App from '../App';
import { shallow } from "enzyme";


const correctCardsExample = {
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
const finalBtn = jest.fn();

describe("<FinalScreen>", () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <FinalScreen correctCards={correctCardsExample}
                   finalBtn={finalBtn} />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke the resetQuiz method when button is clicked", () => {
    wrapper.find("button").simulate("click", { preventDefault: () => {} });
    expect(finalBtn).toBeCalled();
  });


});
