import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, useState } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import { inputBoxSx } from 'src/utils/muiSx';

const InputField = () => {
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
    <Box sx={inputBoxSx}>
      <FormControl>
        <FormLabel>Input</FormLabel>
        <Textarea
          placeholder="enter text"
          onChange={handleInputChange}
          value={state.input}
          minRows={3}
          maxRows={3}
          // startDecorator={}
          endDecorator={
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <Typography level="body3" sx={{ ml: 'auto' }}>
                {state.input.length} character(s)
              </Typography>
            </Box>
          }
        />
      </FormControl>
    </Box>
  );
};

export default InputField;
