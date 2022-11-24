import styled from '@emotion/styled';
import { Theme } from '@mui/joy';
// import { Theme } from '@mui/joy/styles/types/theme';

// this works
type MuiProps = {
  theme?: Theme;
  as?: React.ElementType<any> | undefined;
};

export const AppContainer = styled.main<MuiProps>`
  position: relative;
  min-height: 100vh;
  background: rgb(7, 52, 92);
  /* background: var(--tolowercase-palette-background-backdrop); */
  /* background: linear-gradient(
    133deg,
    rgba(7, 52, 92, 1) 0%,
    rgba(2, 35, 65, 1) 100%
  ); */
  background-color: ${(props) =>
    props.theme.vars.palette.background.body}; // this works
  overflow-x: hidden;
  /* z-index: -1000; */
`;

// this works (without passing custom MuiProps type)
export const Div = styled('div')(({ theme }) => ({
  // The result is 'var(--joy-palette-primary-500)'
  // @ts-expect-error vars is on theme
  color: theme.vars.palette.success[500],
  width: '50px',
  height: '50px',
  backgroundColor: 'red',
}));
