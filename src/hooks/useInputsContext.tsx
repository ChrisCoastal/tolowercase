import React, { useContext } from 'react';
import { InputsContext } from 'src/context/InputsProvider';

const useInputsContext = () => useContext(InputsContext);

export default useInputsContext;
