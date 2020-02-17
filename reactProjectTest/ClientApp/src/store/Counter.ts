import { Action, Reducer } from 'redux';

// -----------------
// STATE - This defines the type of data maintained in the Redux store.

export interface CounterState {
    count: number;
}

enum ActionType {
    IncrementCount = "INCREMENT_COUNT",
    DecrementCount = "DECREMENT_COUNT",
    SetCount = "SET_COUNT",
}

// -----------------
// ACTIONS - These are serializable (hence replayable) descriptions of state transitions.
// They do not themselves have any side-effects; they just describe something that is going to happen.
// Use @typeName and isActionType for type detection that works even after serialization/deserialization.

interface IncrementCountAction { type: ActionType.IncrementCount }
interface DecrementCountAction { type: ActionType.DecrementCount }

interface SetCountAction {
    type: ActionType.SetCount;
    count: number;
}


// Declare a 'discriminated union' type. This guarantees that all references to 'type' properties contain one of the
// declared type strings (and not any other arbitrary string).
export type CounterAction = IncrementCountAction | DecrementCountAction | SetCountAction;

// ----------------
// ACTION CREATORS - These are functions exposed to UI components that will trigger a state transition.
// They don't directly mutate state, but they can have external side-effects (such as loading data).

export const actionCreators = {
    increment: (): IncrementCountAction => ({ type: ActionType.IncrementCount }),
    decrement: (): DecrementCountAction => ({ type: ActionType.DecrementCount }),
    setCount: (newCount: number): SetCountAction => ({ type: ActionType.SetCount, count: newCount }),
};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<CounterState> = (state: CounterState | undefined, action: CounterAction): CounterState => {
    if (state === undefined) {
        return { count: 0 };
    }

    //const action = incomingAction as ConterAction;
    switch (action.type) {
        case 'INCREMENT_COUNT':
            return { count: state.count + 1 };
        case 'DECREMENT_COUNT':
            return { count: state.count - 1 };
        case ActionType.SetCount:
            return { count: action.count };
        default:
            return state;
    }
};
