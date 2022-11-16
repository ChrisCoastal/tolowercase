import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import { BAD_WORDS } from 'src/utils/constants';
import { inputBoxSx } from 'src/utils/muiSx';

import InputActions from '../InputActions/InputActions';
import { InputDiv } from './InputField.styles';

const InputField = () => {
  const { state, dispatch } = useInputsContext();
  // const [prevInputLength, setPrevInputLength] = useState<number | null>(0);
  const [descUppercase, setDescUppercase] = useState<string>('');
  // const inputConst = highlightUpperCase(state.input);
  const numUppercase = state.input.match(/[A-Z]/g)?.length;
  // if (state.input.length === 0 && state.input.length !== prevInputLength)
  //   setAdj(selectAdj());
  // function highlightUpperCase(input: string) {
  //   let highlighted = ``;
  //   for (const char of input) {
  //     if (char.match(/[A-Z]/))
  //       highlighted += `<span style="color: #eb2929 !important">${char}</span>`;
  //     else highlighted += `${char}`;
  //   }

  //   return highlighted;
  // }

  // useEffect(() => {
  //   setAdj(selectAdj())
  // }, [])

  function selectDesc() {
    const random = Math.floor(Math.random() * BAD_WORDS.length);
    const desc = BAD_WORDS[random];
    return desc;
  }

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value;
    dispatch({ type: InputsReducerTypes.INPUT, payload: value });
    console.log(value);
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
          <FormLabel sx={{ alignSelf: 'baseline', paddingLeft: '0.5rem' }}>
            input
          </FormLabel>
          <InputActions setDescUppercase={setDescUppercase} />
        </Box>
        <Textarea
          placeholder="enter text"
          onChange={handleInputChange}
          value={state.input}
          minRows={3}
          maxRows={3}
          // startDecorator={}
          sx={{ color: `` }}
          endDecorator={
            <Box
              sx={{
                display: 'flex',
                // justifyContent: 'space-between',
                width: '100%',
                gap: 2,
              }}
            >
              <Typography level="body3" sx={{ ml: '4px' }}>
                {state.input.length} character
                {state.input.length !== 1 ? 's' : ' '}
              </Typography>
              <Typography level="body3" sx={{ mr: '4px' }}>
                {numUppercase || 0} uppercase
              </Typography>
            </Box>
          }
        />
      </FormControl>
    </Box>
  );
};

export default InputField;
