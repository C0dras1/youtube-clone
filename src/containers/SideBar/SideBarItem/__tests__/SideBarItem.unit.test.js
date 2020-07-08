import React from 'react';
import {shallow} from 'enzyme';
import {SideBarItem} from '../SideBarItem';

const location = {
  pathname: '/feed/trending',
};

describe('SideBarItem', () => {
  test('renders SideBarItem without path', () => {
    const wrapper = shallow(<SideBarItem location={location} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('renders highlighted SideBarItem', () => {
    const wrapper = shallow(
    <SideBarItem highlighted icon='fire' label='Trending' location={location} path={'/feed/trending'} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('renders non-highlighted SideBarItem', () => {
    const wrapper = shallow(
    <SideBarItem icon='fire' label='Trending' location={location} />
    );
    expect(wrapper).toMatchSnapshot();
  });
})