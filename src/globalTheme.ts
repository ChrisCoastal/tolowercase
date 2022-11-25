import { extendTheme } from '@mui/joy/styles';

export const globalTheme = extendTheme({
  cssVarPrefix: 'tolowercase',
  colorSchemes: {
    light: {
      palette: {
        primary: {
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
        primary: {
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
  },
});
