import { connect } from 'react-redux'
import { addCountB } from '../actions'
import CounterB from '../components/CounterB'

const AddCountB = connect(
    (state) => ({ count: state.counterB.count }),
    { addCountB }
)(CounterB)

export default AddCountB
