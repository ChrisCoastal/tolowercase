import styled from '@emotion/styled';

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 4rem;
  border-bottom: solid 1px #ddd;
  backdrop-filter: blur(0.5rem);
  box-shadow: 0 0.1rem 0.4rem rgba(0, 0, 0, 0.1);
`;

export const NavItemsList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;
  list-style: none;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  list-style: none;
`;
