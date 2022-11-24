import { extendTheme } from '@mui/joy/styles';

export const globalTheme = extendTheme({
  cssVarPrefix: 'tolowercase',
  colorSchemes: {
    light: {
      palette: {
        primary: {
          '50': '#4c241e',
          '100': '#663028',
          '200': '#99493c', // slider background
          '300': '#b35546',
          '400': '#e66d5a',
          '500': '#ff7964', // slider pip
          '600': '#ff8674',
          '700': '#ff9483',
          '800': '#ffa193',
          '900': '#ffafa2',
          // base: '#66deb4',
          // light: '#84E4C3',
          // dark: '#479B7D',
        },
        info: {},
        warning: {
          '500': '#fba61d',
        },
        success: {
          '50': '#204932',
          '100': '#367b54',
          '200': '#419364', // slider background
          '300': '#4cac75',
          '400': '#56c486',
          '500': '#6cf5a7', // slider pip
          '600': '#7bf6b0',
          '700': '#89f7b9',
          '800': '#98f8c1',
          '900': '#b6fad3',
        },
        // background: {
        //   backdrop: '#666',
        // },
      },
    },
    dark: {
      palette: {
        //
        // background: {
        //   backdrop: '#666',
        // },
      },
    },
  },
});
