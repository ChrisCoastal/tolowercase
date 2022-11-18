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
    case SettingsReducerTypes.INVISIBLE: {
      if (typeof payload?.isActive !== 'boolean') return state;
      return {
        ...state,
        inputSettings: {
          ...state.inputSettings,
          invisibleChar: {
            ...state.inputSettings.invisibleChar,
            isActive: payload.isActive,
          },
        },
      }; //TODO:
    }
    default:
      return state;
  }
};

export default reducer;
