import React from "react";
import BtnAnswer from "../BtnAnswer";
import MockData from '../mockData';
import { shallow } from "enzyme";

const answer = ["Hyper Text Markup Language"]
const onChangeCard = jest.fn();


describe("Answer Button", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BtnAnswer key={answer}
                 answer={answer}
                 onChangeCard={onChangeCard}
                 />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should invoke the onChangeCard method when button is clicked", () => {
    wrapper.find("button").simulate("click", { preventDefault: () => {} });
    expect(onChangeCard).toBeCalled();
  });

});
