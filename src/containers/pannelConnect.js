import { connect } from 'react-redux'
//import { addCountA } from '../actions'
import Pannel from '../components/Pannel'

function mapStateToProps(state) {
  console.log(state);
  return {
    // propsを通して取得する際に使う名前: Storeのstateの値

    channels: state.channels
  };
}

// const Pannel = connect(
//     (state) => ({}),
// //    mapStateToProps,
//     {  }
// )(Pannel)
// export default Pannel

console.log("あああああ");

export default connect(mapStateToProps)(Pannel)

