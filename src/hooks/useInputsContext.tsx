import React, { useContext } from 'react';
import { InputsContext } from 'src/context/InputsProvider/InputsProvider';

const useInputsContext = () => useContext(InputsContext);

export default useInputsContext;
