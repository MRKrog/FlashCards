import React from "react";
import WelcomeScreen from "../WelcomeScreen";
import { shallow } from "enzyme";

const startQuiz = jest.fn();
const localStorageExist = false;

describe("<WelcomeScreen>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WelcomeScreen localStorageExist={localStorageExist}
                     startQuiz={startQuiz}
                    />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke the startQuiz method when button is clicked", () => {
    wrapper.find("button").simulate("click", { preventDefault: () => {} });
    expect(startQuiz).toBeCalled();
  });

  it("should match the continue snapshot when localStorage equals true", () => {
    const localStorageExist = true;
    let wrapperContinue = shallow(
      <WelcomeScreen localStorageExist={localStorageExist}
                     startQuiz={startQuiz}
                    />
    );
    expect(wrapperContinue).toMatchSnapshot();
  });

});
