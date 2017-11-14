import { connect } from 'react-redux'
import { addCountA } from '../actions'
import CounterA from '../components/CounterA'

// function mapStateToProps(state) {
//   console.log(state);
//   return {
//     // propsを通して取得する際に使う名前: Storeのstateの値

//     count: state.counterA.count
//   };
// }

const AddCountA = connect(
    (state) => ({ count: state.counterA.count }),
//    mapStateToProps,
    { addCountA }
)(CounterA)

export default AddCountA
