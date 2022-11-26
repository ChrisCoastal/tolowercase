import styled from '@emotion/styled';
import { Theme } from '@mui/joy';

// this works
type MuiProps = {
  theme?: Theme;
  as?: React.ElementType<any> | undefined;
};

export const AppContainer = styled.main<MuiProps>`
  position: relative;
  height: 100vh;
  background: rgb(7, 52, 92);
  background-color: ${(props) =>
    props.theme.vars.palette.background.body}; // this works
  overflow-x: hidden;
`;

// this works (without passing custom MuiProps type)
export const Div = styled('div')(({ theme }) => ({
  // The result is 'var(--joy-palette-primary-500)'
  // @ts-expect-error (vars is on theme, but ts can't see it b/c passed through cssvarsprovider)
  color: theme.vars.palette.success[500],
  width: '50px',
  height: '50px',
  backgroundColor: 'red',
}));
