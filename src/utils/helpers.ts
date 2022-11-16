import { INVISIBLE, URI_RESERVED, URI_UNSAFE } from './constants';

export function checkInvisibleChar(input: string): boolean {
  console.log(input);
  // TODO:
  return true;
}

export function checkEmoji(input: string): boolean {
  return /\p{Extended_Pictographic}/u.test(input);
}
