import {
  SettingsReducerAction,
  SettingsReducerTypes,
  SettingsState,
} from 'src/@types/types';

const reducer = (
  state: SettingsState,
  action: SettingsReducerAction
): SettingsState => {
  const { type, payload } = action;

  switch (type) {
    case SettingsReducerTypes.SET_USER_AGENT: {
      if (typeof payload?.userAgent !== 'string') return state;
      return { ...state, userAgent: payload.userAgent };
    }
    case SettingsReducerTypes.UPDATE: {
      return { ...state }; //TODO:
    }
    default:
      return state;
  }
};

export default reducer;
