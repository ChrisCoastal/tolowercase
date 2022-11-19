import { OutputType, SettingActionType, ShortcutName } from 'src/@types/types';

export function checkInvisibleChar(input: string): boolean {
  console.log(input);
  // TODO:
  return true;
}

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

export function validateLowerCase(
  output: OutputType,
  actionType: SettingActionType
) {
  const validatedOutput = output;
  if (actionType === SettingActionType.WARN)
    validatedOutput.warn =
      validatedOutput.value.toUpperCase() !== validatedOutput.value;
  if (actionType === SettingActionType.REMOVE)
    validatedOutput.value.replaceAll(/[\p{Ll}]/g, '');
  if (actionType === SettingActionType.REPLACE)
    validatedOutput.value = validatedOutput.value.toUpperCase();

  return validatedOutput;
}

export function validateUpperCase(
  output: OutputType,
  actionType: SettingActionType
) {
  const validatedOutput = output;
  if (actionType === SettingActionType.WARN)
    validatedOutput.warn =
      validatedOutput.value.toLowerCase() !== validatedOutput.value;
  if (actionType === SettingActionType.REMOVE)
    validatedOutput.value.replaceAll(/[\p{Lu}\p{Lt}]/g, '');
  if (actionType === SettingActionType.REPLACE)
    validatedOutput.value = validatedOutput.value.toLowerCase();

  return validatedOutput;
}
