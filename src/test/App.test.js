import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../App';
import MockData from "../mockData";
import { shallow } from "enzyme";

const cards = MockData.cards
// let allInventory = mockData.distributor[0].inventory;
// const mockFunc = jest.fn();

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <App
        player={true}
      />
    );
  });

  it('renders without crashing', () => {
    // const div = document.createElement('div');
    // ReactDOM.render(<App />, div);
    // ReactDOM.unmountComponentAtNode(div);
  });

  it("should match snapshot when all data is passed correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  //
  // it("should display the products in a given category", () => {
  //   wrapper.find(".closed").simulate("click", { preventDefault: () => {} });
  //   expect(mockFunc).toBeCalled();
  // });
});
