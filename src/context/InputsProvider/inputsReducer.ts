import {
  AppState,
  InputsReducerActions,
  InputsReducerTypes,
} from 'src/@types/types';

const reducer = (state: AppState, action: InputsReducerActions): AppState => {
  const { type, payload } = action;

  switch (type) {
    case InputsReducerTypes.INPUT: {
      // const output = payload.toLowerCase();
      return { ...state, input: payload };
    }

    case InputsReducerTypes.OUTPUT: {
      return { ...state, output: payload };
    }

    // case InputsReducerTypes.REMOVE: {
    //   const toRemove = state.prev.findIndex((item) => item.id === payload);
    //   //TODO:
    //   return { ...state }; // TODO:
    // }
    default:
      return state;
  }
};

export default reducer;
