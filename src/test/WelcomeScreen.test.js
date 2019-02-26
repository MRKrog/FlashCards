import React from "react";
import WelcomeScreen from "../WelcomeScreen";
import App from "../App";
import { shallow } from "enzyme";

const startQuiz = jest.fn();
const localStorageExist = App.localStorageExist;

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


});
