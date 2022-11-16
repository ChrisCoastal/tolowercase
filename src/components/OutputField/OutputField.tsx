import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { InputsReducerTypes } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import CheckIcon from 'src/icons/CheckIcon/CheckIcon';
import CopyIcon from 'src/icons/CopyIcon/CopyIcon';

const OutputField = () => {
  const { state, dispatch } = useInputsContext();
  const [copied, setCopied] = useState<boolean>(false);

  function handleInputChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const value = event.currentTarget.value;
    dispatch({ type: InputsReducerTypes.INPUT, payload: value });
    console.log(value);
  }

  function copyOutput() {
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
        paddingTop: 2,
        paddingBottom: 1,
        flexWrap: 'wrap',
        width: '100%',
        maxWidth: '48rem',
      }}
    >
      <FormControl>
        <FormLabel sx={{ paddingLeft: '0.5rem' }}>lowercase</FormLabel>
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
              <Tooltip title="copy" size="sm" placement="top">
                <IconButton
                  variant="plain"
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
              </Tooltip>
            </Box>
          }
        />
      </FormControl>
    </Box>
  );
};

export default OutputField;
