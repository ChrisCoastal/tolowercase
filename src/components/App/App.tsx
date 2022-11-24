import React, { useEffect, useState } from 'react';
import { SettingsReducerTypes } from 'src/@types/types';
import FieldsContainer from 'src/components/FieldsContainer/FieldsContainer';
import Hero from 'src/components/Hero/Hero';
import InputField from 'src/components/InputField/InputField';
import Nav from 'src/components/Nav/Nav';
import OutputField from 'src/components/OutputField/OutputField';
import SettingsDrawer from 'src/components/SettingsDrawer/SettingsDrawer';
import useDrawer from 'src/hooks/useDrawer';
import useSettingsContext from 'src/hooks/useSettingsContext';
import { getUserAgent } from 'src/utils/helpers';

import Floaters from '../Floaters/Floaters';
import { AppContainer, Div } from './App.styles';

function App() {
  const [copyOutput, setCopyOutput] = useState<boolean>(false);
  const { dispatchSettings } = useSettingsContext();
  const { isVisible, setIsVisible } = useDrawer();

  useEffect(() => {
    const userAgent = getUserAgent();
    dispatchSettings({
      type: SettingsReducerTypes.SET_USER_AGENT,
      payload: { userAgent },
    });
  }, []);

  return (
    <AppContainer className="App">
      <Nav setIsVisible={setIsVisible} />
      <SettingsDrawer setIsVisible={setIsVisible} isVisible={isVisible} />
      <FieldsContainer>
        <InputField />
        <OutputField copyOutput={copyOutput} setCopyOutput={setCopyOutput} />
      </FieldsContainer>
      <Floaters />
    </AppContainer>
  );
}

export default App;
