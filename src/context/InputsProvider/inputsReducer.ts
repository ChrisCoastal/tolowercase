import {
  AppState,
  InputsReducerActions,
  InputsReducerTypes,
} from 'src/@types/types';

const reducer = (state: AppState, action: InputsReducerActions): AppState => {
  const { type, payload } = action;

  switch (type) {
    case InputsReducerTypes.INPUT: {
      return { ...state, input: payload };
    }

    case InputsReducerTypes.OUTPUT: {
      return { ...state, output: payload };
    }

    default:
      return state;
  }
};

export default reducer;
