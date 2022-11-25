import styled from '@emotion/styled';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 4rem;
  border-bottom: solid 1px var(--tolowercase-palette-neutral-400);
  backdrop-filter: blur(0.5rem);
  /* box-shadow: 0 0.2rem 0.8rem rgba(0, 0, 0, 0.1); */
`;

export const NavItemsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  list-style: none;
`;
