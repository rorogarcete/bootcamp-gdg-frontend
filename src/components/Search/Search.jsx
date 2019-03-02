import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Button, Input, Row, Col } from 'reactstrap';

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }

  search = () => {
    this.props.searchItem(this.state.keyword);
  };

  render = () => {
    return (
      <div>
        <Row>
          <Col>
            <Input
              placeholder="Qué desea buscar?"
              value={this.state.keyword}
              onChange={e => this.setState({ keyword: e.target.value })}
              style={styles.input}
            />
          </Col>
          <Col>
            <Button onClick={this.search}>
              {' '}
              <FaSearch />{' '}
            </Button>
          </Col>
        </Row>
      </div>
    );
  };
}

const styles = {
  input: {
    width: 300
  }
};
