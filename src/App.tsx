import React from 'react';
import FieldsContainer from 'src/components/FieldsContainer/FieldsContainer';
import InputField from 'src/components/InputField/InputField';
import Nav from 'src/components/Nav/Nav';
import OutputField from 'src/components/OutputField/OutputField';
import OutputVerification from 'src/components/OutputVerification/OutputVerification';

function App() {
  return (
    <div className="App">
      <Nav />
      <FieldsContainer>
        <InputField />
        <OutputField />
        <OutputVerification />
      </FieldsContainer>
    </div>
  );
}

export default App;
