import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Tooltip from '@mui/joy/Tooltip';
import Typography from '@mui/joy/Typography';
import React, { FC, useEffect } from 'react';
import { InputsReducerTypes, OutputType, SettingId } from 'src/@types/types';
import useInputsContext from 'src/hooks/useInputsContext';
import useSettingsContext from 'src/hooks/useSettingsContext';
import CheckIcon from 'src/icons/CheckIcon/CheckIcon';
import CopyIcon from 'src/icons/CopyIcon/CopyIcon';
import VerifiedIcon from 'src/icons/VerifiedIcon/VerifiedIcon';
import WarnIcon from 'src/icons/WarnIcon/WarnIcon';

type OutputFieldProps = {
  copyOutput: boolean;
  setCopyOutput: React.Dispatch<React.SetStateAction<boolean>>;
};

const OutputField: FC<OutputFieldProps> = ({ copyOutput, setCopyOutput }) => {
  const { inputsState, dispatchInputs } = useInputsContext();
  const { settingsState } = useSettingsContext();
  const charDiff = inputsState.output.value.length - inputsState.input.length;

  function validateOutput(input: string) {
    let validatedOutput: OutputType = {
      value: input,
      warn: false,
      warnDetail: [],
    };

    settingsState.outputValidation.forEach((setting) => {
      if (!setting.isActive) return;
      if (setting.id === SettingId.LENGTH)
        validatedOutput = setting.validate(
          validatedOutput,
          setting.curAction,
          setting.targetLength!
        );
      else
        validatedOutput = setting.validate(validatedOutput, setting.curAction);
    });

    return validatedOutput;
  }

  function inputChangeHandler() {
    const output = validateOutput(inputsState.input);
    console.log(output);

    dispatchInputs({ type: InputsReducerTypes.OUTPUT, payload: output });
  }

  function copyOutputHandler() {
    setCopyOutput(true);
    navigator.clipboard.writeText(inputsState.output.value);
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

  function checkWarningTip() {
    return `not passing: ${inputsState.output.warnDetail.join(', ')}`;
  }

  const checks = (
    <Tooltip title={checkWarningTip()} size="sm" placement="top">
      <Typography
        color="neutral"
        level="body3"
        sx={{ mr: '4px' }}
        startDecorator={
          inputsState.output.warn ? (
            <WarnIcon height="18" width="18" />
          ) : (
            <VerifiedIcon height="18" width="18" color="#6cf5a7" />
          )
        }
      >
        {inputsState.output.warn ? 'validation warning' : 'validation passing '}
      </Typography>
    </Tooltip>
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
        <FormLabel sx={{ paddingLeft: '0.5rem', color: '#fff' }}>
          output
        </FormLabel>
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
                <Typography color="neutral" level="body3" sx={{ ml: '4px' }}>
                  {inputsState.output.value?.length} character
                  {inputsState.output.value?.length !== 1 ? 's' : ' '}
                </Typography>
                <Typography color="neutral" level="body3" sx={{ mr: '4px' }}>
                  {charDiff <= 0
                    ? `${Math.abs(charDiff)} removed`
                    : `${Math.abs(charDiff)} added`}
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
                    <CheckIcon height="24" width="24" color="#6cf5a7" />
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
