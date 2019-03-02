import React from 'react';
import PropTypes from 'prop-types';
import { FaEraser } from 'react-icons/fa';
import { ListGroup, ListGroupItem, Button } from 'reactstrap';

const ItemListing = ({ items, removeItem }) => (
  <ListGroup>
    {items.length == 0 && <h3 style={styles.emptyList}>No hay ningún item</h3>}
    {items.map(item => (
      <ListGroupItem key={item.id}>
        {item.name}
        <Button
          color="danger"
          onClick={removeItem.bind(this, item.id)}
          style={{ marginLeft: 10 }}
        >
          <FaEraser />
        </Button>
      </ListGroupItem>
    ))}
  </ListGroup>
);

ItemListing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  removeItem: PropTypes.func.isRequired
};

const styles = {
  emptyList: {
    color: 'lightgrey',
    fontWeight: 'bold',
    marginTop: 160
  }
};

export default ItemListing;
