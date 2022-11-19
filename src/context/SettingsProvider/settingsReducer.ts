import {
  SettingName,
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

    case SettingsReducerTypes.UPDATE_SETTING: {
      if (typeof payload?.isActive !== 'boolean') return state;

      const index = state.outputValidation.findIndex(
        (setting) => setting.settingName === payload.settingName
      );
      const updatedState = state.outputValidation;
      updatedState[index].isActive = payload.isActive;
      return {
        ...state,
        outputValidation: updatedState,
      };
    }

    default:
      return state;
  }
};

export default reducer;
