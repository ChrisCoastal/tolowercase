import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import { ReactComponent as CheckIcon } from 'src/assets/check.svg';
import { ReactComponent as CopyIcon } from 'src/assets/content_copy.svg';
import useInputsContext from 'src/hooks/useInputsContext';

const OutputField = () => {
  const { state, dispatch } = useInputsContext();
  const [isFocus, setIsFocus] = useState();
  const [isTouched, setIsTouched] = useState();
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState<boolean>(false);

  function validate(condition: (input: string) => boolean) {
    return condition(inputValue);
  }

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value;
    dispatch({ type: InputsReducerTypes.INPUT, payload: value });
    console.log(value);
  }

  function copyText() {
    setCopied(true);
    navigator.clipboard.writeText(state.output);
  }

  useEffect(() => {
    const copiedTimer = setTimeout(() => {
      setCopied(false);
    }, 1800);
    return () => clearTimeout(copiedTimer);
  }, [copied]);

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
          endDecorator={
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              <Typography level="body3" sx={{ ml: 'auto' }}>
                {state.output.length} character(s)
              </Typography>
              <IconButton variant="outlined" color="neutral" onClick={copyText}>
                {!copied ? <CopyIcon /> : <CheckIcon />}
              </IconButton>
            </Box>
          }
        />
      </FormControl>
    </Box>
  );
};

export default OutputField;
