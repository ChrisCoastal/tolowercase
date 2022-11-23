import { OutputType, ReplaceValue, SettingActionType } from 'src/@types/types';

import { INVISIBLE, URI_RESERVED, URI_UNSAFE } from './constants';

export function checkEmoji(input: string): boolean {
  return /\p{Extended_Pictographic}/u.test(input);
}

// User Agent
export function getUserAgent() {
  let userAgent = 'windows'; // default to windows as there is no 'Meta' key
  const clientUserAgent = window.navigator.userAgent.toLowerCase();
  if (clientUserAgent.includes('macintosh')) userAgent = 'mac';
  if (clientUserAgent.includes('ios') || clientUserAgent.includes('android'))
    userAgent = 'mobile';

  return userAgent;
}

export function isSliderRange(isRange: number | number[]): boolean {
  if (Array.isArray(isRange)) return true;
  else return false;
}

export function validateToLowerCase(
  output: OutputType,
  actionType: SettingActionType
) {
  const validatedOutput = output;
  if (actionType === SettingActionType.WARN)
    validatedOutput.warn =
      validatedOutput.value.toLowerCase() !== validatedOutput.value;
  validatedOutput.warn && validatedOutput.warnDetail.push('uppercase');
  if (actionType === SettingActionType.REMOVE) {
    validatedOutput.value = validatedOutput.value.replaceAll(/[A-Z]/g, '');
  }
  if (actionType === SettingActionType.REPLACE)
    validatedOutput.value = validatedOutput.value.toLowerCase();

  return validatedOutput;
}

export function validateTrim(
  output: OutputType,
  actionType: SettingActionType,
  replaceValue: ReplaceValue = ['', '']
) {
  const validatedOutput = output;

  if (actionType === SettingActionType.WARN) {
    validatedOutput.warn =
      validatedOutput.value.trim() !== validatedOutput.value;
    validatedOutput.warn && validatedOutput.warnDetail.push('outer whitespace');
  }
  if (actionType === SettingActionType.REMOVE) {
    validatedOutput.value = validatedOutput.value.trim();
  }
  if (actionType === SettingActionType.REPLACE) {
    validatedOutput.value =
      replaceValue[0] + validatedOutput.value.trim() + replaceValue[1];
  }

  return validatedOutput;
}

export function validateInvisible(
  output: OutputType,
  actionType: SettingActionType
) {
  const validatedOutput = output;
  const regexInvisible = new RegExp(INVISIBLE.join('|'), 'i');

  if (actionType === SettingActionType.WARN) {
    for (let i = 0; i < validatedOutput.value.length; i++) {
      const code = validatedOutput.value
        .codePointAt(i)
        ?.toString(16)
        .padStart(4, '0');

      if (code && regexInvisible.test(code)) {
        validatedOutput.warn = true;
      }
    }
    validatedOutput.warn &&
      validatedOutput.warnDetail.push('invisible characters');
  }
  if (actionType === SettingActionType.REMOVE) {
    let validChar = '';
    for (let i = 0; i < validatedOutput.value.length; i++) {
      const code = validatedOutput.value
        .codePointAt(i)
        ?.toString(16)
        .padStart(4, '0');

      if (code && !regexInvisible.test(code)) {
        validChar = validChar + validatedOutput.value[i];
      }
    }
    validatedOutput.value = validChar;
  }

  return validatedOutput;
}

export function validateUriReserved(
  output: OutputType,
  actionType: SettingActionType
) {
  const validatedOutput = output;
  const regexUriReserved = new RegExp('gi');

  if (actionType === SettingActionType.WARN) {
    validatedOutput.warn =
      validatedOutput.value !== encodeURIComponent(validatedOutput.value);

    validatedOutput.warn && validatedOutput.warnDetail.push('uri reserved');
  }
  if (actionType === SettingActionType.REMOVE) {
    validatedOutput.value = validatedOutput.value.replaceAll(
      regexUriReserved,
      ''
    );
  }
  if (actionType === SettingActionType.REPLACE) {
    validatedOutput.value = encodeURIComponent(validatedOutput.value);
    //
  }
  return validatedOutput;
}

export function validateLength(
  output: OutputType,
  actionType: SettingActionType,
  targetLength: number | number[]
) {
  const validatedOutput = output;
  const isRange = isSliderRange(targetLength);
  console.log(isRange, targetLength);

  if (actionType === SettingActionType.WARN) {
    const validLength = isRange
      ? (targetLength as number[])
      : ([targetLength, targetLength] as number[]);
    if (
      validatedOutput.value.length < validLength[0] ||
      validatedOutput.value.length > validLength[1]
    )
      validatedOutput.warn = true;
    validatedOutput.warn && validatedOutput.warnDetail.push('invalid length');
  }
  if (actionType === SettingActionType.REMOVE) {
    isRange
      ? (validatedOutput.value = validatedOutput.value.slice(
          (targetLength as number[])[0],
          (targetLength as number[])[1]
        ))
      : (validatedOutput.value = validatedOutput.value.slice(
          0,
          targetLength as number
        ));
  }

  return validatedOutput;
}
