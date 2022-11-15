import {
  SettingsReducerActions,
  SettingsReducerTypes,
  SettingsState,
} from 'src/@types/types';

const reducer = (
  state: SettingsState,
  action: SettingsReducerActions
): SettingsState => {
  const { type, payload } = action;

  switch (type) {
    case SettingsReducerTypes.UPDATE: {
      return { ...state }; //TODO:
    }
    default:
      return state;
  }
};

export default reducer;
