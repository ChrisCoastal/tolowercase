import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import React, { ChangeEvent, useState } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';

const OutputField = () => {
  const { state, dispatch } = useInputsContext();
  const [isFocus, setIsFocus] = useState();
  const [isTouched, setIsTouched] = useState();
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  function validate(condition: (input: string) => boolean) {
    return condition(inputValue);
  }

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value;
    dispatch({ type: InputsReducerTypes.INPUT, payload: value });
    console.log(value);
  }

  return (
    <Box
      sx={{
        py: 2,
        display: 'grid',
        gap: 2,
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: 400,
      }}
    >
      <FormControl>
        <FormLabel>lowercase</FormLabel>
        <Textarea
          placeholder="enter text"
          onChange={handleInputChange}
          value={state.output}
          readOnly={true}
          minRows={3}
          maxRows={3}
        />
      </FormControl>
    </Box>
  );
};

export default OutputField;
