import React from "react";
import MockData from "../mockData";
import Card from "../Card";
import { shallow } from "enzyme";

const cards = MockData.cards
const answerArray = MockData.cards.answers;

describe("Card", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Card singleCard={cards} />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

});
