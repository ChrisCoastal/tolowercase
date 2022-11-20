import React, { useEffect, useState } from 'react';
import { SettingsReducerTypes } from 'src/@types/types';
import FieldsContainer from 'src/components/FieldsContainer/FieldsContainer';
import InputField from 'src/components/InputField/InputField';
import Nav from 'src/components/Nav/Nav';
import OutputField from 'src/components/OutputField/OutputField';
import SavedField from 'src/components/SavedField/SavedField';
import SettingsDrawer from 'src/components/SettingsDrawer/SettingsDrawer';
import useDrawer from 'src/hooks/useDrawer';
// import useInputsContext from 'src/hooks/useInputsContext';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { getUserAgent } from 'src/utils/helpers';

import { AppContainer } from './App.styles';

function App() {
  const [copyOutput, setCopyOutput] = useState<boolean>(false);
  // const { state: inputsState, dispatch: inputsDispatch } = useInputsContext();
  const { dispatchSettings } = useSettingsContext();
  const { isVisible, setIsVisible } = useDrawer();

  // function keyDownHandler(event: KeyboardEvent): ShortcutName | void {
  //   console.log(event, event.key, event.ctrlKey);
  //   if ((event.metaKey || event.ctrlKey) && event.altKey && event.shiftKey)
  //     switch (event.key) {
  //       case 'Ç': {
  //         const isSelected = window.getSelection()?.toString();
  //         if (!isSelected?.length) {
  //           console.log('copied', inputsState.output);
  //           navigator.clipboard.writeText(inputsState.output);
  //         }
  //         if (isSelected?.length) navigator.clipboard.writeText(isSelected);
  //         copyToClipboard(window.getSelection()?.toString() || '');
  //         return ShortcutName.COPY;
  //       }
  //       default:
  //         return;
  //     }
  // }

  useEffect(() => {
    const userAgent = getUserAgent();
    dispatchSettings({
      type: SettingsReducerTypes.SET_USER_AGENT,
      payload: { userAgent },
    });
  }, []);

  // useEffect(() => {
  //   document.addEventListener('keydown', keyDownHandler);
  //   return () => document.removeEventListener('keydown', keyDownHandler);
  // }, []);

  return (
    <AppContainer className="App">
      <Nav setIsVisible={setIsVisible} />
      <SettingsDrawer setIsVisible={setIsVisible} isVisible={isVisible} />
      <FieldsContainer>
        <InputField />
        <OutputField copyOutput={copyOutput} setCopyOutput={setCopyOutput} />
        {/* <SavedField /> */}
      </FieldsContainer>
    </AppContainer>
  );
}

export default App;
