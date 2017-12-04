import { connect } from 'react-redux'
import { updateData } from '../actions'
import SearchButton from '../components/SearchButton'

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     // propsを通して取得する際に使う名前: Storeのstateの値

//     channels: state.channels
//   };
// }
var dataObj = require('../resources/data2.json');
var channels = dataObj['items'];

const SearchContainer = connect(
    null,
    { updateData }
)(SearchButton)


export default SearchContainer//connect(null, mapDispatchToProps)(SerchButton)

