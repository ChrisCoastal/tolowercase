import * as colorSystem from '@mui/joy/styles/types/colorSystem';

declare module '@mui/joy/Button' {
  interface ButtonPropsSizeOverrides {
    xs: true;
    xl: true;
  }
}

declare module '@material-ui/styles' {
  interface ThemePalette extends colorSystem.Palette {
    main: ThemePaletteOptions;
  }
}

type ThemePaletteOptions = 'main' | 'light' | 'dark';

declare module '@material-ui/core/styles/createMuiTheme' {
  type ThemeOptions = MyTheme;
}

export interface MyTheme extends Theme {
  backgroundColor: string;
}

// how to extend the overrides interfaces
declare module '@mui/joy/styles' {
  interface ColorSchemeOverrides {
    foo: true;
  }
}

declare module '@mui/joy/styles' {
  interface ColorPalettePropOverrides {
    bar: true;
  }
}

// this augments options for palette colors (ie: 50 | 100 | 200 etc.)
declare module '@mui/joy/styles' {
  interface PaletteRangeOverrides {
    base: true;
    light: true;
    mid: true;
    dark: true;
  }
}

declare module '@mui/joy/styles' {
  interface PaletteRangeOverrides {
    base: true;
    light: true;
    mid: true;
    dark: true;
  }
}
