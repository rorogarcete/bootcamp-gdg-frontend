import React from 'react';
import PropTypes from 'prop-types';
// import { FaEraser } from 'react-icons/fa';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const ItemListing = ({ items, removeItem }) => (
  <ListGroup>
    {items.map(item => (
      <ListGroupItem key={item.id}>
        {item.name}
        <Button color="danger" onClick={removeItem.bind(this, item.id)}>
          {/* <FaEraser /> */}
        </Button>
      </ListGroupItem>
    ))}
  </ListGroup>
);

ItemListing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  removeItem: PropTypes.func.isRequired
};

export default ItemListing;
