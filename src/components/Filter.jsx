import React from 'react';
import { Input, Menu } from 'semantic-ui-react';

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => (
  <Menu secondary>
    <Menu.Item
      active={filterBy === 'all'}
      onClick={setFilter.bind(this, 'all')}>
      All
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_high'}
      onClick={setFilter.bind(this, 'price_high')}>
      Price (High)
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'price_low'}
      onClick={setFilter.bind(this, 'price_low')}>
      Price (Low)
    </Menu.Item>
    <Menu.Item
      active={filterBy === 'author'}
      onClick={setFilter.bind(this, 'author')}>
      Publisher
    </Menu.Item>
    <Menu.Item>
      <Input
        icon="search"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
        placeholder="Type to search..."
      />
    </Menu.Item>
  </Menu>
);

export default Filter;
