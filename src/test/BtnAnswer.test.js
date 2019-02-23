import React from "react";
import BtnAnswer from "../BtnAnswer";
import MockData from '../mockData';
import { shallow } from "enzyme";

const cards = MockData.cards;

describe("Answer Button", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BtnAnswer />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {

  });

});
