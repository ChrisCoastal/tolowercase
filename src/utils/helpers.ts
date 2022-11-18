import { ShortcutName } from 'src/@types/types';

import { INVISIBLE, URI_RESERVED, URI_UNSAFE } from './constants';

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
function keyDownHandler(keyDownEvent: KeyboardEvent): void {
  console.log(keyDownEvent, keyDownEvent.key, keyDownEvent.ctrlKey);
  if (keyDownEvent.metaKey) getShortcut(keyDownEvent);
}

function getShortcut(keyDownEvent: KeyboardEvent): ShortcutName | void {
  switch (keyDownEvent.key) {
    case 'c': {
      const isSelection = window.getSelection()?.toString().length;
      keyDownEvent.metaKey && !isSelection && console.log('copy');
      return ShortcutName.COPY;
    }
    case 'm': {
      keyDownEvent.preventDefault();
      keyDownEvent.metaKey && console.log('open');
      return ShortcutName.OPEN_DRAWER;
    }
    default:
      return;
  }
}
