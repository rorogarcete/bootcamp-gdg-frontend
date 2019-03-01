import { connect } from 'react-redux';
import Basic from 'components/Basic/Basic';
import {
  addItem,
  removeItem,
  resetItems,
  searchItem
} from '../actions/actions';

const mapStateToProps = state => state;

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(addItem(item)),
    removeItem: id => dispatch(removeItem(id)),
    resetItems: () => dispatch(resetItems()),
    searchItem: keyword => dispatch(searchItem(keyword))
  };
};

const BasicContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Basic);

export default BasicContainer;
