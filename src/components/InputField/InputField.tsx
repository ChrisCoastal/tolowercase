import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import InputActions from 'src/components/InputActions/InputActions';
import useInputsContext from 'src/hooks/useInputsContext';

import { InputDiv } from './InputField.styles';

const InputField = () => {
  const { inputsState, dispatchInputs } = useInputsContext();
  const numUppercase = inputsState.input.match(/[A-Z]/g)?.length;

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value;
    dispatchInputs({ type: InputsReducerTypes.INPUT, payload: value });
  }

  return (
    <Box sx={{ py: 2, flexWrap: 'wrap', width: '100%', maxWidth: '48rem' }}>
      <FormControl>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
          }}
        >
          <FormLabel
            sx={{ alignSelf: 'center', paddingLeft: '0.5rem', color: '#fff' }}
          >
            input
          </FormLabel>
          <InputActions />
        </Box>
        <Box sx={{ position: 'relative' }}>
          <InputDiv></InputDiv>

          <Textarea
            placeholder="enter text"
            onChange={handleInputChange}
            value={inputsState.input}
            minRows={3}
            maxRows={3}
            sx={{ color: `` }}
            endDecorator={
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  gap: 2,
                  opacity: '0.9',
                }}
              >
                <Typography level="body3" sx={{ ml: '4px' }}>
                  {inputsState.input.length} character
                  {inputsState.input.length !== 1 ? 's' : ' '}
                </Typography>
                <Typography level="body3" sx={{ mr: '4px' }}>
                  {numUppercase || 0} uppercase
                </Typography>
              </Box>
            }
          />
        </Box>
      </FormControl>
    </Box>
  );
};

export default InputField;
