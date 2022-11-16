import React from 'react';
import FieldsContainer from 'src/components/FieldsContainer/FieldsContainer';
import InputField from 'src/components/InputField/InputField';
import Nav from 'src/components/Nav/Nav';
import OutputField from 'src/components/OutputField/OutputField';
import OutputVerification from 'src/components/OutputVerification/OutputVerification';
import SettingsDrawer from 'src/components/SettingsDrawer/SettingsDrawer';
import useDrawer from 'src/hooks/useDrawer';

import { AppContainer } from './App.styles';

function App() {
  const { isVisible, setIsVisible } = useDrawer();

  return (
    <AppContainer className="App">
      <Nav setIsVisible={setIsVisible} />
      <SettingsDrawer setIsVisible={setIsVisible} isVisible={isVisible} />
      <FieldsContainer>
        <InputField />
        <OutputField />
        <OutputVerification />
      </FieldsContainer>
    </AppContainer>
  );
}

export default App;
