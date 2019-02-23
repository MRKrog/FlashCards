import React from 'react';
import App from '../App';
import MockData from "../mockData";
import { shallow } from "enzyme";

const mockData = MockData;

// let allInventory = mockData.distributor[0].inventory;
// const mockFunc = jest.fn();


describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should have the following default state", () => {
    expect(wrapper.state()).toEqual({
      player: true,
      allCards: mockData.cards,
      correctCards: [],
      wrongCards: [],
      currCardIndex: 0
    });
  })

});
