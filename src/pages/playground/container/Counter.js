import React, {Component} from "react";
import CounterOutput from "pages/playground/container/CounterOutput";
import CounterControl from "pages/playground/container/CounterControl";
import {connect} from "react-redux";
import ACTIONS from '../../../reducers/example/exReducerTypes';
import {withStyles} from "@material-ui/core";

const styles = {
    root:{
      display:'flex',
      flexDirection:'column',
      flexGrow:1
    },
    control: {
        display: 'flex',
        justifyContent: 'center'
    }
}

const Counter = (props) => {

    const {onIncrementCounter,onDecrementCounter,onAddCounter,onSubtractCounter,counter} = props
    return (
        <div style={styles.root}>
                <CounterOutput value={counter}/>
            <div style={styles.control}>
                <CounterControl label="Increment" clicked={onIncrementCounter}/>
                <CounterControl label="Decrement" clicked={onDecrementCounter}/>
                <CounterControl label="Add 10" clicked={onAddCounter}/>
                <CounterControl label="Subtract 5" clicked={onSubtractCounter}/>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: ACTIONS.INCREMENT}),
        onDecrementCounter: () => dispatch({type: ACTIONS.DECREMENT}),
        onAddCounter: () => dispatch({type: ACTIONS.ADD}),
        onSubtractCounter: () => dispatch({type: ACTIONS.SUBTRACT})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);