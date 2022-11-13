import React from 'react';
import FieldsContainer from 'src/components/FieldsContainer/FieldsContainer';
import InputField from 'src/components/InputField/InputField';
import OutputField from 'src/components/OutputField/OutputField';

function App() {
  return (
    <div className="App">
      <FieldsContainer>
        <InputField />
        <OutputField />
      </FieldsContainer>
    </div>
  );
}

export default App;
