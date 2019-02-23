import React from "react";
import BtnAnswer from "../BtnAnswer";
import MockData from '../mockData';
import { shallow } from "enzyme";

const cards = MockData.cards;
const answers = MockData.cards.answers;


describe("Answer Button", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BtnAnswer answers={answers} />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {

  });

});
