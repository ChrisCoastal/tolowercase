import {
  SettingId,
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

    case SettingsReducerTypes.ACTION: {
      const index = state.outputValidation.findIndex(
        (setting) => setting.id === payload.id
      );
      if (index === -1) {
        console.error('no index found');
        return state;
      }
      const updatedState = state.outputValidation;
      updatedState[index].curAction = payload.curAction;
      return {
        ...state,
        outputValidation: updatedState,
      };
    }

    case SettingsReducerTypes.LENGTH: {
      const index = state.outputValidation.findIndex(
        (setting) => setting.id === payload.id
      );
      if (index === -1) {
        console.error('no index found');
        return state;
      }
      const updatedState = state.outputValidation;
      updatedState[index].targetLength = payload.targetLength;
      return {
        ...state,
        outputValidation: updatedState,
      };
    }

    case SettingsReducerTypes.MODIFIER: {
      const index = state.outputValidation.findIndex(
        (setting) => setting.id === payload.id
      );
      if (index === -1) {
        console.error('no index found');
        return state;
      }

      if (typeof payload.modifierValue === 'boolean') {
        const updatedState = state.outputValidation;
        updatedState[index].modifier.value = payload.modifierValue;
        return {
          ...state,
          outputValidation: updatedState,
        };
      }
      return state;
    }

    default:
      return state;
  }
};

export default reducer;
