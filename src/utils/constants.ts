import {
  SettingActionType,
  SettingId,
  SettingModifierInputType,
  SettingsState,
  ThemeSetting,
} from 'src/@types/types';

import {
  validateInvisible,
  validateLength,
  validateToLowerCase,
  validateTrim,
  validateUriReserved,
} from './helpers';

export const INVISIBLE = [
  '0009',
  '0020',
  '00A0',
  '00AD',
  '034F',
  '061C',
  '115F',
  '1160',
  '17B4',
  '17B5',
  '180E',
  '2000',
  '2001',
  '2002',
  '2003',
  '2004',
  '2005',
  '2006',
  '2007',
  '2008',
  '2009',
  '200A',
  '200B',
  '200C',
  '200D',
  '200E',
  '200F',
  '202F',
  '205F',
  '2060',
  '2061',
  '2062',
  '2063',
  '2064',
  '206A',
  '206B',
  '206C',
  '206D',
  '206E',
  '206F',
  '3000',
  '2800',
  '3164',
  'FEFF',
  'FFA0',
  '1D159',
  '1D173',
  '1D174',
  '1D175',
  '1D176',
  '1D177',
  '1D178',
  '1D179',
  '1D17A',
];

// export const INVISIBLE = [
//   'u0009',
//   'u0020',
//   'u00A0',
//   'u00AD',
//   'u034F',
//   'u061C',
//   'u115F',
//   'u1160',
//   'u17B4',
//   'u17B5',
//   'u180E',
//   'u2000',
//   'u2001',
//   'u2002',
//   'u2003',
//   'u2004',
//   'u2005',
//   'u2006',
//   'u2007',
//   'u2008',
//   'u2009',
//   'u200A',
//   'u200B',
//   'u200C',
//   'u200D',
//   'u200E',
//   'u200F',
//   'u202F',
//   'u205F',
//   'u2060',
//   'u2061',
//   'u2062',
//   'u2063',
//   'u2064',
//   'u206A',
//   'u206B',
//   'u206C',
//   'u206D',
//   'u206E',
//   'u206F',
//   'u3000',
//   'u2800',
//   'u3164',
//   'uFEFF',
//   'uFFA0',
//   'u1D159',
//   'u1D173',
//   'u1D174',
//   'u1D175',
//   'u1D176',
//   'u1D177',
//   'u1D178',
//   'u1D179',
//   'u1D17A',
// ];

export const URI_RESERVED = [
  ':',
  '/',
  '?',
  '#',
  '[',
  ']',
  '@',
  '!',
  '$',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  ';',
  '=',
];

export const URI_UNSAFE = ['"', '<', '>', '%', '{', '}', '|', '\\', '^', '`'];

export const BAD_WORDS = [
  'disobedient',
  'annoying',
  'misbehaved',
  'wayward',
  'defiant',
  'unruly',
  'insubordinate',
  'delinquent',
  'disorderly',
  'mutinous',
  'fractious',
  'recalcitrant',
  'errant',
  'wild',
  'wicked',
  'obstreperous',
  'troublesome',
  'attention-seeking',
  'exasperating',
  'incorrigible',
  'rude',
  'impolite',
  'mischievous',
  'rascally',
  'brattish',
  'scampish',
  'crude',
  'obscene',
  'rude',
  'bawdy',
  'dirty',
  'filthy',
  'indecent',
  'improper',
  'unseemly',
  'offensive',
  'naughty',
  'saucy',
  'boorish',
  'loutish',
  'oafish',
  'brutish',
  'uncouth',
  'unsavory',
  'crass',
  'unrefined',
  'unsophisticated',
  'tasteless',
  'cloddish',
  'slobbish',
  'yobbish',
];

export const SETTINGS_TEXT = {
  toLowerCase: {
    label: 'uppercase',
    helperText: 'optionally replace with lowercase',
  },
  trim: {
    label: 'outer whitespace',
    helperText: 'start/end whitespace and terminators',
  },
  invisibleChar: {
    label: 'invisible characters',
    helperText: 'uncommon non-visible/empty characters',
  },
  uriReserved: {
    label: 'uri reserved characters',
    helperText: 'optionally encode as UTF-8',
  },
  outputLength: { label: 'length', helperText: 'specify output length' },
  findReplace: { label: 'find', helperText: '' },
};

// export const SETTINGS_REPLACE = {
//   characterCase: {},
//   invisibleChar: {},
//   uriReserved: {},
//   uriUnsafe: {},
//   outputLength: {},
//   trim: {},
//   findReplace: {},
// };

export const INITIAL_SETTINGS_STATE = {
  userAgent: '',
  theme: ThemeSetting.LIGHT,
  outputValidation: [
    {
      id: SettingId.TO_LOWERCASE,
      label: SETTINGS_TEXT.toLowerCase.label,
      helperText: SETTINGS_TEXT.toLowerCase.helperText,
      isActive: true,
      validate: validateToLowerCase,
      validActions: [
        SettingActionType.WARN,
        SettingActionType.REMOVE,
        SettingActionType.REPLACE,
      ],
      curAction: SettingActionType.REPLACE,
    },
    {
      id: SettingId.TRIM,
      label: SETTINGS_TEXT.trim.label,
      helperText: SETTINGS_TEXT.trim.helperText,
      isActive: false,
      validate: validateTrim,
      validActions: [
        SettingActionType.WARN,
        SettingActionType.REMOVE,
        SettingActionType.REPLACE,
      ],
      curAction: SettingActionType.WARN,
      replaceValue: '',
    },
    {
      id: SettingId.INVISIBLE,
      label: SETTINGS_TEXT.invisibleChar.label,
      helperText: SETTINGS_TEXT.invisibleChar.helperText,
      isActive: false,
      validate: validateInvisible,
      validActions: [SettingActionType.WARN, SettingActionType.REMOVE],
      curAction: SettingActionType.WARN,
    },
    {
      id: SettingId.URI_RESERVED,
      label: SETTINGS_TEXT.uriReserved.label,
      helperText: SETTINGS_TEXT.uriReserved.helperText,
      isActive: false,
      validate: validateUriReserved,
      validActions: [
        SettingActionType.WARN,
        SettingActionType.REMOVE,
        SettingActionType.REPLACE,
      ],
      curAction: SettingActionType.WARN,
    },
    {
      // length setting keeps curAction constant
      // only targetLength is updated
      id: SettingId.LENGTH,
      label: SETTINGS_TEXT.outputLength.label,
      helperText: SETTINGS_TEXT.outputLength.helperText,
      isActive: false,
      validate: validateLength,
      validActions: [SettingActionType.WARN],
      curAction: SettingActionType.WARN,
      targetLength: 33,
      sliderSetting: {
        min: 1,
        max: 100,
        step: 1,
        labelDisplay: 'on',
        marks: [
          { label: '1', value: 1 },
          { label: '50', value: 50 },
          { label: '100', value: 100 },
        ],
        sliderWidth: 90,
      },
      modifier: {
        inputType: SettingModifierInputType.CHECKBOX,
        value: false,
      },
    },

    // {
    //   id: SettingId.FIND,
    //   label: SETTINGS_TEXT.findReplace.label,
    //   helperText: SETTINGS_TEXT.findReplace.helperText,
    //   isActive: false,
    //   actionType: SettingActionType.WARN,
    // },
  ],
} as SettingsState;
