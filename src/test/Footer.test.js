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

  
});
