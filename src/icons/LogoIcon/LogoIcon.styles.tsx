import styled from '@emotion/styled';
import { Theme, useColorScheme } from '@mui/joy';
import { ThemeSetting } from 'src/@types/types';

export type SpinnerProps = {
  theme: Theme;
};

export const Spinner = styled.div<SpinnerProps>`
  padding: 0;
  margin: 0;
  height: 30px;
  .svg {
    border-radius: 6px;
    fill: ${({ theme }) => {
      const { mode } = useColorScheme();
      return mode === ThemeSetting.LIGHT
        ? theme.vars.palette.neutral[800]
        : '#fff';
    }};
    backface-visibility: visible;
    animation-name: flip;
    animation-duration: 30s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.7, 0.26, 0, 1);
    @keyframes flip {
      0%,
      100% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      15% {
        transform: rotateY(0deg) rotateX(0deg);
      }
      25% {
        transform: rotateY(1260deg) rotateX(0deg);
      }
      40% {
        transform: rotateY(1260deg) rotateX(0deg);
      }
      50% {
        transform: rotateY(1260deg) rotateX(-1260deg);
      }
      65% {
        transform: rotateY(1260deg) rotateX(-1260deg);
      }
      75% {
        transform: rotateY(0deg) rotateX(-1260deg);
      }
      90% {
        transform: rotateY(0deg) rotateX(-1260deg);
      }
    }
  }
`;
