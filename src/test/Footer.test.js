import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Footer from "../Footer";

const resetQuiz = jest.fn();
const currentPlayer = App.currentPlayer;

describe("Footer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Footer resetQuiz={resetQuiz}
                              currentPlayer={currentPlayer}
      />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });


  it("should match snapshot when props currentPlayer is equal to true and show the reset game btn", () => {
    const truePlayer = true;
    let wrapperContinue = shallow(
      <Footer resetQuiz={resetQuiz}
              currentPlayer={truePlayer}
            />
    );
    expect(wrapperContinue).toMatchSnapshot();
  });

  it("should invoke the resetQuiz method when button is clicked", () => {
    const truePlayer = true;
    let wrapperContinue = shallow(
      <Footer resetQuiz={resetQuiz}
              currentPlayer={truePlayer}
            />
    );
    wrapperContinue.find("button").simulate("click", { preventDefault: () => {} });
    expect(resetQuiz).toBeCalled();
  });

});
