import {
  SettingId,
  SettingsReducerAction,
  SettingsReducerTypes,
  SettingsState,
  SettingValue,
} from 'src/@types/types';

const reducer = (
  state: SettingsState,
  action: SettingsReducerAction
): SettingsState => {
  const { type, payload } = action;

  switch (type) {
    case SettingsReducerTypes.SET_USER_AGENT: {
      return { ...state, userAgent: payload.userAgent };
    }

    case SettingsReducerTypes.IS_ACTIVE: {
      const index = state.outputValidation.findIndex(
        (setting) => setting.id === payload.id
      );
      if (index === -1) {
        console.error('no index found');
        return state;
      }
      const updatedState = state.outputValidation;
      updatedState[index].isActive = payload.isActive;
      return {
        ...state,
        outputValidation: updatedState,
      };
    }

    case SettingsReducerTypes.VALUE: {
      const index = state.outputValidation.findIndex(
        (setting) => setting.id === payload.id
      );
      if (index === -1) {
        console.error('no index found');
        return state;
      }
      const updatedState = state.outputValidation;
      updatedState[index].value = payload.value;
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
