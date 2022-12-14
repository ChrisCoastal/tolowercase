import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Theme } from '@mui/joy';

export type DrawerProps = {
  isVisible: boolean;
  theme: Theme;
};

export const Drawer = styled.div<DrawerProps>`
  position: absolute;
  display: grid;
  grid-auto-rows: min-content;
  align-items: flex-start;
  top: 0;
  right: -108vw;
  width: 100vw;
  height: 100vh;
  margin-top: 0;
  padding: 1rem 2rem;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.vars.palette.background.body};
  box-shadow: 0 0 2rem 0.5rem rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  z-index: 10000;

  ${({ isVisible }: DrawerProps) =>
    isVisible &&
    css`
      right: 0;
    `}

  @media screen and (min-width: 600px) {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    right: -64vw;
    width: 60vw;
    max-width: 32rem;

    ${({ isVisible }: DrawerProps) =>
      isVisible &&
      css`
        right: 0;
      `};
  }
`;

export const DrawerActions = styled.ul`
  display: flex;
  align-items: center;
  gap: 1.4rem;
  justify-content: right;
  margin: 0;
`;

export const CloseDrawer = styled.div`
  align-self: start;
  justify-self: end;
  list-style: none;
`;

export const DrawerBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  background-color: #000;
  opacity: 0.6;
  z-index: 1000;

  ${({ isVisible }: DrawerProps) =>
    isVisible &&
    css`
      height: 100%;
      width: 100%;
    `}
`;
