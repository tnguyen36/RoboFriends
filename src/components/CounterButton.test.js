import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import React from 'react';
import CounterButton from './CounterButton';

it('expect to render CounterButton component', () => {
    const mockColor = 'red'
    
    const tree = renderer.create(<CounterButton color={mockColor} />).toJSON();
    expect(tree).toMatchSnapshot();
})

it('correctly increments the counter', () => {
    const mockColor = 'red'
    const wrapper = shallow(<CounterButton color={mockColor} />);
    wrapper.find('[id="counter"]').simulate('click');
    expect(wrapper.state().count).toEqual(1);
    expect(wrapper.props().color).toEqual('red');
})
