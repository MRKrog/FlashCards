import React from "react";
import CardContainer from "../CardContainer";
import MockData from '../mockData';
import { shallow } from "enzyme";

const cards = MockData.cards;


describe("CardContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <CardContainer singleCard={card} />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
