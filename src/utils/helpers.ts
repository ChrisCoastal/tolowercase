import {
  OutputType,
  ReplaceValue,
  SettingActionType,
  ShortcutName,
} from 'src/@types/types';

import { INVISIBLE, URI_RESERVED } from './constants';

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

// Shortcuts
// function keyDownHandler(keyDownEvent: KeyboardEvent): void {
//   console.log(keyDownEvent, keyDownEvent.key, keyDownEvent.ctrlKey);
//   if (keyDownEvent.metaKey) getShortcut(keyDownEvent);
// }

// function getShortcut(keyDownEvent: KeyboardEvent): ShortcutName | void {
//   switch (keyDownEvent.key) {
//     case 'c': {
//       const isSelection = window.getSelection()?.toString().length;
//       keyDownEvent.metaKey && !isSelection && console.log('copy');
//       return ShortcutName.COPY;
//     }
//     case 'm': {
//       keyDownEvent.preventDefault();
//       keyDownEvent.metaKey && console.log('open');
//       return ShortcutName.OPEN_DRAWER;
//     }
//     default:
//       return;
//   }
// }

// Output Validation

// export function validateLowerCase(
//   output: OutputType,
//   actionType: SettingActionType
// ) {
//   const validatedOutput = output;
//   if (actionType === SettingActionType.WARN)
//     validatedOutput.warn =
//       validatedOutput.value.toUpperCase() !== validatedOutput.value;
//   if (actionType === SettingActionType.REMOVE)
//     validatedOutput.value.replaceAll(/[\p{Ll}]/g, '');
//   if (actionType === SettingActionType.REPLACE)
//     // validatedOutput.value = validatedOutput.value.toUpperCase();
//     validatedOutput.value = getUpperCase(validatedOutput.value);

//   return validatedOutput;
// }

// function getUpperCase(input: string) {
//   let output = '';
//   for (let i = 0; i < input.length; i++) {
//     // /[\p{Lu}\p{Lt}]/.test(input.charAt(i))
//     /[A-Z]/.test(input.charAt(i))
//       ? (output += input.charAt(i).toLowerCase())
//       : (output += input.charAt(i));
//   }
//   return output;
// }

export function validateToLowerCase(
  output: OutputType,
  actionType: SettingActionType
) {
  const validatedOutput = output;
  if (actionType === SettingActionType.WARN)
    validatedOutput.warn =
      validatedOutput.value.toLowerCase() !== validatedOutput.value;
  if (actionType === SettingActionType.REMOVE) {
    validatedOutput.value = validatedOutput.value.replaceAll(/[A-Z]/g, '');
  }
  if (actionType === SettingActionType.REPLACE)
    validatedOutput.value = validatedOutput.value.toLowerCase();
  // validatedOutput.value = getLowerCase(validatedOutput.value);

  return validatedOutput;
}

//FIXME:
// function getLowerCase(input: string) {
//   let output = '';
//   for (let i = 0; i < input.length; i++) {
//     /[a-z]/.test(input.charAt(i))
//       ? (output += input.charAt(i).toLowerCase())
//       : (output += input.charAt(i));
//   }
//   return output;
// }

export function validateTrim(
  output: OutputType,
  actionType: SettingActionType,
  replaceValue: ReplaceValue = ['', '']
) {
  const validatedOutput = output;

  if (actionType === SettingActionType.WARN) {
    validatedOutput.warn =
      validatedOutput.value.trim() !== validatedOutput.value;
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
  // const regexUriReserved = new RegExp(URI_RESERVED.join('|'), 'gi');
  const regexUriReserved = new RegExp(
    /^([!#$&-;=?-[]_a-z~]|%[0-9a-fA-F]{2})+$/,
    'gi'
  );

  if (actionType === SettingActionType.WARN) {
    validatedOutput.warn = regexUriReserved.test(validatedOutput.value);
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
