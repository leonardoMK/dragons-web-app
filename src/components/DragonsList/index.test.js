import React from 'react';
import { shallow } from 'enzyme';
import DragonsList from '.';
import DragonsListItem from '../DragonListItem';
import Loader from '../Loader';

const mockDragons = [
  {
    id: 0,
    name: 'Dragon',
    type: 'GOT',
  },
  {
    id: 1,
    name: 'Dragon 1',
    type: 'GOT1',
  },
  {
    id: 2,
    name: 'Dragon 2',
    type: 'GOT2',
  },
];

describe('<DragonsList />', () => {
  it('Should render dragons list', () => {
    const wrapper = shallow(<DragonsList dragons={mockDragons} />);
    expect(wrapper.find(DragonsListItem).length).toEqual(3);
  });

  it('Should render Loader', () => {
    const wrapper = shallow(<DragonsList isLoading />);
    expect(wrapper.find(DragonsListItem).length).toEqual(0);
    expect(wrapper.find(Loader).length).toEqual(1);
  });

  it('Should render Error', () => {
    const wrapper = shallow(<DragonsList error="Erro ao buscar dados" />);
    expect(wrapper.find(DragonsListItem).length).toEqual(0);
    expect(wrapper.find(Loader).length).toEqual(0);
    expect(wrapper.text()).toEqual('Erro ao buscar dados');
  });
});
