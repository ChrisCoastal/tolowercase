import React, { useEffect } from 'react';
import FieldsContainer from 'src/components/FieldsContainer/FieldsContainer';
import InputField from 'src/components/InputField/InputField';
import Nav from 'src/components/Nav/Nav';
import OutputField from 'src/components/OutputField/OutputField';
import SavedField from 'src/components/SavedField/SavedField';
import SettingsDrawer from 'src/components/Settings/SettingsDrawer/SettingsDrawer';
import useDrawer from 'src/hooks/useDrawer';
import useShortcut from 'src/hooks/useShortcut';
import useUserAgent from 'src/hooks/useUserAgent';

import { AppContainer } from './App.styles';

function App() {
  const { isVisible, setIsVisible } = useDrawer();
  const { keyDownHandler } = useShortcut();
  const { getUserAgent } = useUserAgent();

  useEffect(() => {
    getUserAgent();
  }, []);

  return (
    <AppContainer className="App" onKeyDown={keyDownHandler}>
      <Nav setIsVisible={setIsVisible} />
      <SettingsDrawer setIsVisible={setIsVisible} isVisible={isVisible} />
      <FieldsContainer>
        <InputField />
        <OutputField />
        <SavedField />
      </FieldsContainer>
    </AppContainer>
  );
}

export default App;
