import styled from '@emotion/styled';
import { Theme, useColorScheme } from '@mui/joy';
import { ThemeSetting } from 'src/@types/types';

export type IconWrapperProps = {
  theme: Theme;
};

export const IconWrapper = styled.span<IconWrapperProps>`
  padding: 0;
  margin: 0;
  .svg {
    fill: ${({ theme }) => {
      const { mode, systemMode } = useColorScheme();
      return mode === ThemeSetting.LIGHT || systemMode === ThemeSetting.LIGHT
        ? theme.vars.palette.neutral[800]
        : '#fff';
    }};
  }
`;
