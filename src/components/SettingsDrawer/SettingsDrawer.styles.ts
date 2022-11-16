import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type DrawerProps = {
  isVisible: boolean;
};

export const Drawer = styled.ul<DrawerProps>`
  position: absolute;
  display: grid;
  top: 0;
  right: -24rem;
  width: 32vw;
  max-width: 20rem;
  height: 100vh;
  margin-top: 0;
  padding: 1rem 2rem;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: #fff;
  box-shadow: 0 0 2rem 0.5rem rgba(0, 0, 0, 0.4);
  transition: all 0.4s;
  z-index: 10000;

  ${({ isVisible }: DrawerProps) =>
    isVisible &&
    css`
      right: 0;
    `}
`;

export const CloseDrawer = styled.li`
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
      height: 100vh;
      width: 100vw;
    `}
`;
