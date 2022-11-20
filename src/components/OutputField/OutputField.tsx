import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import React, { FC, useEffect } from 'react';
import { InputsReducerTypes, OutputType } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import useSettingsContext from 'src/hooks/useSettingsContext';
import CheckIcon from 'src/icons/CheckIcon/CheckIcon';
import CopyIcon from 'src/icons/CopyIcon/CopyIcon';
import VerifiedIcon from 'src/icons/VerifiedIcon/VerifiedIcon';

type OutputFieldProps = {
  copyOutput: boolean;
  setCopyOutput: React.Dispatch<React.SetStateAction<boolean>>;
};

const OutputField: FC<OutputFieldProps> = ({ copyOutput, setCopyOutput }) => {
  const { inputsState, dispatchInputs } = useInputsContext();
  const { settingsState } = useSettingsContext();
  const numUppercase = inputsState.input.match(/[\p{Lu}\p{Lt}]/g)?.length;

  function inputChangeHandler() {
    const output = validateOutput(inputsState.input);

    dispatchInputs({ type: InputsReducerTypes.OUTPUT, payload: output });
  }

  function copyOutputHandler() {
    setCopyOutput(true);
    navigator.clipboard.writeText(inputsState.output.value);
  }

  function validateOutput(input: string) {
    let validatedOutput: OutputType = {
      value: input,
      warn: false,
      warnDetail: [],
    };

    settingsState.outputValidation.forEach((setting) => {
      if (!setting.isActive) return;
      validatedOutput = setting.validate(validatedOutput, setting.actionType);
    });

    return validatedOutput;
  }

  useEffect(() => {
    inputChangeHandler();
  }, [inputsState.input]);

  useEffect(() => {
    const copiedTimer = setTimeout(() => {
      setCopyOutput(false);
    }, 1800);
    return () => clearTimeout(copiedTimer);
  }, [copyOutput]);

  const checks = (
    <Typography
      level="body3"
      sx={{ mr: '4px' }}
      startDecorator={<VerifiedIcon height="18" width="18" />}
    >
      all checks passing
    </Typography>
  );

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
          value={inputsState.output.value}
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
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  gap: 2,
                }}
              >
                <Typography level="body3" sx={{ ml: '4px' }}>
                  {inputsState.input?.length} character
                  {inputsState.input?.length !== 1 ? 's' : ' '}
                </Typography>
                <Typography level="body3" sx={{ mr: '4px' }}>
                  {numUppercase || 0} replaced
                </Typography>
                {Boolean(inputsState.output.value?.length) && checks}
              </Box>
              <Tooltip title="copy" size="sm" placement="top">
                <IconButton
                  variant="plain"
                  color="neutral"
                  size="sm"
                  onClick={copyOutputHandler}
                >
                  {!copyOutput ? (
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
