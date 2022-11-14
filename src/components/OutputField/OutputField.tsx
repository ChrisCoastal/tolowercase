import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import CheckIcon from 'src/components/CheckIcon/CheckIcon';
import CopyIcon from 'src/components/CopyIcon/CopyIcon';
import useInputsContext from 'src/hooks/useInputsContext';

const OutputField = () => {
  const { state, dispatch } = useInputsContext();
  const [isFocus, setIsFocus] = useState();
  const [isTouched, setIsTouched] = useState();
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [copied, setCopied] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(false);

  function validate(condition: (input: string) => boolean) {
    return condition(inputValue);
  }

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value;
    dispatch({ type: InputsReducerTypes.INPUT, payload: value });
    console.log(value);
  }

  function copyOutput() {
    setCopied(true);
    navigator.clipboard.writeText(state.output);
  }

  function saveOutput() {
    setSaved(true);
    console.log(state.output);
  }

  useEffect(() => {
    const copiedTimer = setTimeout(() => {
      setCopied(false);
    }, 1800);
    return () => clearTimeout(copiedTimer);
  }, [copied]);

  useEffect(() => {
    const savedTimer = setTimeout(() => {
      setSaved(false);
    }, 1800);
    return () => clearTimeout(savedTimer);
  }, [saved]);

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
          onChange={handleInputChange}
          value={state.output}
          readOnly={true}
          minRows={3}
          maxRows={3}
          endDecorator={
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                width: '100%',
                gap: 0.2,
              }}
            >
              <Typography level="body3" sx={{ ml: '4px' }}>
                {state.input.length} character
                {state.input.length !== 1 ? 's' : ' '}
              </Typography>
              <IconButton
                variant="soft"
                color="neutral"
                size="sm"
                onClick={copyOutput}
              >
                {!copied ? (
                  <CopyIcon height="24" width="24" />
                ) : (
                  <CheckIcon height="24" width="24" />
                )}
              </IconButton>
            </Box>
          }
        />
      </FormControl>
    </Box>
  );
};

export default OutputField;
