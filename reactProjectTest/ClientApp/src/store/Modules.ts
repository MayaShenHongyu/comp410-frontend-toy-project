import { Action, Reducer } from 'redux';



export interface ModulesState {
}

enum ActionType {
}

// ACTIONS



// ACTION CREATERS

export const actionCreators = {

};

// ----------------
// REDUCER - For a given state and action, returns the new state. To support time travel, this must not mutate the old state.

export const reducer: Reducer<ModulesState> = (state: ModulesState | undefined, action: ConterAction): ModulesState => {
    if (state === undefined) {
        return {
            /* Defualt state */
        };
    }

};
