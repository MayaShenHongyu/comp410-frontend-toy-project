import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { IApplicationState } from '../store';
import * as CounterStore from '../store/Counter';
import { Dispatch } from 'redux';

//type CounterProps =
//    CounterStore.CounterState &
//    typeof CounterStore.actionCreators &
//    RouteComponentProps<{}>;

type CounterProps = ICounterStateProps & ICounterDispatchProps;

interface ICounterStateProps {
    count: number;
}

interface ICounterDispatchProps {
    setCount: (count: number) => void;
    increment: () => void;
    decrement: () => void;
}

//exercise two
class Counter extends React.PureComponent<CounterProps> {
    public render() {
        return (
            <React.Fragment>
                <h1>Counter</h1>

                <p>This is a simple example of a React component.</p>

                <p aria-live="polite">Current count: <strong>{this.props.count}</strong></p>

                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.setCount(this.props.count + 1); }}>
                    Increment
                </button>
                
                <button type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => { this.props.setCount(0); }}>
                    Reset
                </button>
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state: IApplicationState): ICounterStateProps => {
    return {
        count: state.counter.count
    }
};

const mapDispatchToProps = (dispatch: Dispatch<CounterStore.ConterAction>): ICounterDispatchProps => {
    return {
        setCount: (count: number) => dispatch(CounterStore.actionCreators.setCount(count)),
        increment: () => dispatch(CounterStore.actionCreators.increment()),
        decrement: () => dispatch(CounterStore.actionCreators.decrement()),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Counter);
