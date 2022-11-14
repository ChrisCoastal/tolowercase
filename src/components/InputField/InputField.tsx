import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import { inputBoxSx } from 'src/utils/muiSx';

import { InputDiv } from './InputField.styles';

const InputField = () => {
  const { state, dispatch } = useInputsContext();
  const [isFocus, setIsFocus] = useState();
  const [isTouched, setIsTouched] = useState();
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [placeholder, setPlaceholder] = useState('enter text');

  const inputConst = highlightUpperCase(state.input);

  function validate(condition: (input: string) => boolean) {
    return condition(inputValue);
  }

  function highlightUpperCase(input: string) {
    let highlighted = ``;
    for (const char of input) {
      if (char.match(/[A-Z]/))
        highlighted += `<span style="color: #eb2929 !important">${char}</span>`;
      else highlighted += `${char}`;
    }

    return highlighted;
  }

  function removePlaceholder() {
    setPlaceholder;
  }

  function handleContent(event: ChangeEvent<HTMLDivElement>) {
    console.log(event);

    const value = event.currentTarget.innerText;
    dispatch({ type: InputsReducerTypes.INPUT, payload: value });
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
        <Box sx={{ position: 'relative' }}>
          <InputDiv
            contentEditable={true}
            suppressContentEditableWarning={true}
            onInput={handleContent}
            onFocus={() => setPlaceholder('')}
            dangerouslySetInnerHTML={{ __html: inputConst }}
          >
            {/* {inputConst} */}
          </InputDiv>

          <Textarea
            placeholder="enter text"
            onChange={handleInputChange}
            value={state.input}
            minRows={3}
            maxRows={3}
            // startDecorator={}
            sx={{ color: `` }}
            endDecorator={
              <Box sx={{ display: 'flex', gap: 0.5 }}>
                <Typography level="body3" sx={{ ml: 'auto' }}>
                  {state.input.length} character
                  {state.input.length !== 1 ? 's' : ' '}
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
