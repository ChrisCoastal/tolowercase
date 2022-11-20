import { extendTheme } from '@mui/joy/styles';

export const globalTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // affects all Joy components that has `color="primary"` prop.
        primary: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fde68a',
          400: '#fde68a',
          600: '#fde68a',
          700: '#fde68a',
          800: '#fde68a',
          900: '#78350f',
        },
        success: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fde68a',
          400: '#fde68a',
          600: '#fde68a',
          700: '#fde68a',
          800: '#fde68a',
          900: '#78350f',
        },
      },
    },
  },
});
